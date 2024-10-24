import {Node, Panel} from "@xyflow/react";
import React, {useCallback} from "react";
import {NODE_TYPES} from "../../shared/config";
import {createNode} from "../../shared/lib";

interface AddNodesPanelProps {
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}

export const AddNodesPanelFeature = ({setNodes}: AddNodesPanelProps) => {

  const onAddNode = useCallback((type: string) => {
    setNodes((nds) => nds.concat(createNode(type)));
  }, [setNodes]);

  return (
    <Panel position="top-right">
      <button onClick={() => onAddNode(NODE_TYPES.processNode)}>add process</button>
      <button onClick={() => onAddNode(NODE_TYPES.subProcess1Node)}>add sub process 1</button>
      <button onClick={() => onAddNode(NODE_TYPES.subProcess2Node)}>add sub process 2</button>
    </Panel>
  );
};