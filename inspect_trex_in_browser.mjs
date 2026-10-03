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

      // Switch exhibit to t_rex and measure its bounding box
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `(async () => {
              const trexExhibit = EXHIBITS.find(e => e.id === 't_rex');
              loadExhibit(trexExhibit);
              
              // Wait 1.5s for load
              await new Promise(r => setTimeout(r, 1500));
              
              const box = new THREE.Box3().setFromObject(mainDinoGroup);
              const humanBox = new THREE.Box3().setFromObject(humanGroup);
              
              return {
                dinoBoxMin: { x: box.min.x, y: box.min.y, z: box.min.z },
                dinoBoxMax: { x: box.max.x, y: box.max.y, z: box.max.z },
                humanBoxMin: { x: humanBox.min.x, y: humanBox.min.y, z: humanBox.min.z },
                humanBoxMax: { x: humanBox.max.x, y: humanBox.max.y, z: humanBox.max.z },
                mainDinoGroupY: mainDinoGroup.position.y,
                child0Y: mainDinoGroup.children[0]?.position.y,
                groundOffsetY: trexExhibit.groundOffsetY
              };
            })()`,
            awaitPromise: true,
            returnByValue: true
          }
        }));
      }, 2000);
    });

    ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 2 && data.result) {
        console.log('T-REX MEASUREMENTS:', JSON.stringify(data.result.result.value || data.result, null, 2));
      } else if (data.method === 'Runtime.exceptionThrown') {
        console.error('[BROWSER EXCEPTION]:', data.params.exceptionDetails.exception?.description);
      }
    });

    setTimeout(() => {
      ws.close();
      chromeProc.kill();
      process.exit(0);
    }, 6000);

  } catch (err) {
    console.error(err);
    chromeProc.kill();
    process.exit(1);
  }
}, 2000);
