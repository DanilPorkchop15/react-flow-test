import {
  addEdge,
  Background,
  Connection,
  MiniMap,
  Node, ReactFlow,
  useEdgesState,
  useNodesState
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialEdges, initialNodes, nodeTypes} from "../config";
import {useCallback} from "react";
import {AddNodesPanelFeature} from "../../../features/addNodes";
import {PostNodesPanelFeature} from "../../../features/postNodes";

export function ScalableMapWidget() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div style={{height: '80vh', width: '100%', border: '4px dotted black'}}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes as Node[]}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        minZoom={0.5}
        maxZoom={2}
      >
        <Background bgColor="#ffe"/>

        <MiniMap pannable nodeColor="#7ff87f" position="bottom-center"/>
        <AddNodesPanelFeature setNodes={setNodes}/>
        <PostNodesPanelFeature />
      </ReactFlow>
    </div>
  );
}