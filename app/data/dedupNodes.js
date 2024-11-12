const fs  = require('node:fs');

const existing = {};
const nodesText = fs.readFileSync(process.cwd() + '/app/data/nodes.csv', 'utf8').split("\n").map(n => n.split(','))

const clean = nodesText.filter(n => {
    if (!existing[n[0]]) {
        existing[n[0]] = true;
        return true;
    }
    return false;
})

fs.writeFileSync(process.cwd() + '/app/data/nodes.csv', clean.map(n => n.join(',')).join("\n") )