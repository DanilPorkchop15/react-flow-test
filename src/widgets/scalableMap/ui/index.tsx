import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export function ScalableMapWidget() {
  return (
    <div style={{ height: '100px', width: '100%' }}>
      <ReactFlow>
        <Background bgColor="#ffe" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
