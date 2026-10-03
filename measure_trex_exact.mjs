import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\NMteam\\AppData\\Local\\Temp\\chrome_debug_' + Date.now();

const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--disable-gpu',
  'http://localhost:8000/prototype.html'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9222/json');
    const tabs = await res.json();
    const pageTab = tabs.find(t => t.url && t.url.includes('prototype.html'));

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    ws.addEventListener('open', () => {
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));

      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `(async () => {
              // Click T-Rex tab
              const tabs = Array.from(document.querySelectorAll('.dino-tab'));
              const trexTab = tabs.find(t => t.textContent.includes('Rex'));
              if (!trexTab) return { error: 'T-Rex tab not found' };
              trexTab.click();

              // Wait 2.5s for load & render
              await new Promise(r => setTimeout(r, 2500));

              // We can measure the contact shadow mesh or scene objects
              const status = document.getElementById('stage-status')?.className;
              const title = document.getElementById('exhibit-name')?.textContent;
              
              return {
                title,
                status
              };
            })()`,
            awaitPromise: true,
            returnByValue: true
          }
        }));
      }, 1500);
    });

    ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 2 && data.result) {
        console.log('T-REX RESULT:', data.result.result.value);
      }
    });

    setTimeout(() => {
      ws.close();
      chromeProc.kill();
      process.exit(0);
    }, 6000);

  } catch (e) {
    console.error(e);
    chromeProc.kill();
    process.exit(1);
  }
}, 2000);
