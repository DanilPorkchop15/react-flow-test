import type {Edge, Node} from "@xyflow/react";
import {NODE_TYPES} from "../../shared/config";
import {NodesFeature} from "../../features/nodes";

export const nodeTypes = {
  [NODE_TYPES.processNode]: NodesFeature.Process,
  [NODE_TYPES.subProcess1Node]: NodesFeature.SubProcess,
  [NODE_TYPES.subProcess2Node]: NodesFeature.SubProcess,
}

export const initialNodes: Node[] = [
  {
    id: '1',
    type: NODE_TYPES.processNode,
    data: {field1: {text: 'Test Text', label: 'Test Label'}},
    position: {x: 250, y: 50},
  },
  {
    id: '2',
    type: NODE_TYPES.subProcess1Node,
    data: {field1: {text: 'Node 2'}, field2: {text: 'Node 3'}},
    position: {x: 250, y: 300},
  }
]

export const initialEdges: Edge[] = [
  {id: 'e1-2', source: '1', target: '2', animated: true},
]