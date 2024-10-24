import {useCallback} from "react";
import {Node, useReactFlow} from "@xyflow/react";

export const useUpdateNodeData = <T extends Node["data"]>(nodeId: string) => {
  const {setNodes} = useReactFlow();
  return useCallback(
    (data: T) => {
      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                ...data,
              },
            };
          }
          return node;
        })
      );
    },
    [nodeId, setNodes]
  );
};