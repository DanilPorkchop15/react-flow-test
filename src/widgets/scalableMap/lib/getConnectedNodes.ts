import {Edge, Node} from "@xyflow/react";

export const getConnectedNodes = (nodes: Node[], edges: Edge[]) => {
  const nodeIds = nodes.map((node) => node.id);
  const connectedEdges = edges.filter(
    (edge) => nodeIds.includes(edge.source) || nodeIds.includes(edge.target)
  );
  const connectedNodes = nodes.filter((node) =>
    connectedEdges.some((edge) => edge.source === node.id || edge.target === node.id)
  );
  return {
    nodes: connectedNodes,
    edges: connectedEdges,
  };
};