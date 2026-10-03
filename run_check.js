
const exhibits = require('./extract_ex.js');
console.log('Total exhibits loaded:', exhibits.length);
exhibits.forEach((ex, i) => {
    const missing = [];
    if (!ex.id) missing.push('id');
    if (!ex.modelFile) missing.push('modelFile');
    if (!ex.vi) missing.push('vi');
    if (!ex.en) missing.push('en');
    if (ex.vi) {
        ['tag', 'subtitle', 'intro', 'obs', 'diet', 'dietSub', 'length', 'lengthSub', 'mass', 'massSub', 'loc', 'locSub'].forEach(k => {
            if (ex.vi[k] === undefined) missing.push('vi.' + k);
        });
    }
    if (missing.length > 0) {
        console.log([ERR] Exhibit  (): missing );
    } else {
        console.log([OK] Exhibit :  () -> model: );
    }
});
