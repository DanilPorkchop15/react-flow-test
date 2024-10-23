import {ProcessNode} from "../../features/processNode";
import type { Node } from "@xyflow/react";
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
    type: 'processNode',
    data: { text1: 'Node 1' },
    position: { x: 100, y: 50 },
  },
  {
    id: '2',
    type: 'subProcess1Node',
    data: { field1: { text: 'Node 2' }, field2: { text: 'Node 3' } },
    position: { x: 400, y: 150 },
  }
]