import {Node, Panel} from "@xyflow/react";
import React, {useCallback} from "react";
import {NODE_TYPES} from "../../shared/config";
import {getNodeId} from "./lib";

interface AddNodesPanelProps {
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}

export const AddNodesPanelFeature = ({setNodes}: AddNodesPanelProps) => {

  const onAddProcess = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: {label: 'Added node'},
      position: {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
      },
      type: NODE_TYPES.processNode,
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onAddSubProcess1 = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: {label: 'Added node'},
      position: {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
      },
      type: NODE_TYPES.subProcess1Node,
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onAddSubProcess2 = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: {label: 'Added node'},
      position: {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
      },
      type: NODE_TYPES.subProcess2Node,
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);


  return (
    <Panel position="top-right">
      <button onClick={onAddProcess}>add process</button>
      <button onClick={onAddSubProcess1}>add sub process 1</button>
      <button onClick={onAddSubProcess2}>add sub process 2</button>
    </Panel>
  );
};