'use client'

import ForceGraph2D from 'react-force-graph-2d'
import SpriteText from 'three-spritetext';

export const Graph = ({ nodes, edges }: { nodes: { [k: string]: string }[], edges: { [k: string]: string }[] }) => {
    return (
        <ForceGraph2D
        width={1000}
        height={1000}
        graphData={{
          nodes: nodes.map(n => {
            return {
              ...n,
              name: n.label
            }
          }),
          links: edges
        }}
        nodeAutoColorBy="type"
        nodeId='id'
        nodeRelSize={6}

        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.label;
          const fontSize = Math.round((node.size * 12)/globalScale);
          
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = node.color;
          ctx.fillText(label, node.x, node.y);

          node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const bckgDimensions = node.__bckgDimensions;
          bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
        }}

        // nodeThreeObject={node => {
        //   const sprite = new SpriteText(node.label);
        //   sprite.color = node.color;
        //   sprite.textHeight = 8;
        //   return sprite;
        // }}
      />
    )
}