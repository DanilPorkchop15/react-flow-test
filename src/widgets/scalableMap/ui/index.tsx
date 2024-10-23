import {ReactFlow, Controls, Background, NodeChange, EdgeChange, Connection, Node, Edge, addEdge, applyEdgeChanges, applyNodeChanges} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialNodes, nodeTypes} from "../config";
import {useCallback, useState} from "react";
import {AddNodesPanelFeature} from "../../../features/panel";

export function ScalableMapWidget() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nods) => applyNodeChanges(changes, nods)),
    [setNodes]
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: '500px', width: '100%', border: '4px dotted black' }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes as Node[]}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}

      >
        <Background bgColor="#ffe" />
        <Controls />
        <AddNodesPanelFeature setNodes={setNodes} />
      </ReactFlow>
    </div>
  );
}