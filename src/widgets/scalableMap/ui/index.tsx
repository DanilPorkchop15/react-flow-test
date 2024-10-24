import {
  addEdge,
  Background,
  Connection,
  Controls,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialNodes, nodeTypes} from "../config";
import {useCallback} from "react";
import {AddNodesPanelFeature} from "../../../features/panel";
import {FlowApi} from "../api";

export function ScalableMapWidget() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const {getNodes} = useReactFlow()

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
        fitView
        minZoom={0.1}
        maxZoom={2}
      >
        <Background bgColor="#ffe"/>
        <Controls/>
        <AddNodesPanelFeature setNodes={setNodes}/>
      </ReactFlow>
      <button onClick={() => FlowApi.PostNodes(getNodes())}>REQUEST</button>
    </div>
  );
}