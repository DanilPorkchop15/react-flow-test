import {Edge, Node} from "@xyflow/react";

export const getConnectedNodes = ( nodes: Node[], edges: Edge[]) => {
  const connectedNodes: Node[] = [];
  const connectedEdges: Edge[] = [];
  nodes.forEach((node) => {
    edges.forEach((edge) => {
      if (edge.source === node.id) {
        connectedNodes.push(node);
        connectedEdges.push(edge);
      }
    });
  });
  return {
    nodes: connectedNodes,
    edges: connectedEdges,
  };
};
