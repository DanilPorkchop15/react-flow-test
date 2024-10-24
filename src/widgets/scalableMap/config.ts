import {ProcessNode} from "../../features/processNode";
import type {Edge, Node} from "@xyflow/react";
import {NODE_TYPES} from "../../shared/config";
import {SubProcessNode} from "../../features/subProcess";

export const nodeTypes = {
  [NODE_TYPES.processNode]: ProcessNode,
  [NODE_TYPES.subProcess1Node]: SubProcessNode,
  [NODE_TYPES.subProcess2Node]: SubProcessNode,
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