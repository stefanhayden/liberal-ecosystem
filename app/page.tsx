import fs from 'node:fs';
import { Graph } from "./Graph";
import { generate, parse, transform, stringify } from "csv/sync";

const nodesText = fs.readFileSync(process.cwd() + '/app/data/nodes.csv', 'utf8');
const edgesText = fs.readFileSync(process.cwd() + '/app/data/edges.csv', 'utf8');
const nodes = parse(nodesText, {
  columns: true,
  delimiter: ','
});
const edges = parse(edgesText, {
  columns: true,
  delimiter: ','
});

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Graph nodes={nodes} edges={edges} />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        </footer>
      </div>
    </>
  );
}
