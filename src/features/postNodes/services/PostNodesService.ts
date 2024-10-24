import {PostNodesApi} from "../../../entities/nodes/api";
import {Edge, Node} from "@xyflow/react";

export class PostNodesService {
  public static postNodes = async (nodes: Node[], edges: Edge[]) => {
      await PostNodesApi.postNodes({nodes, edges})
  }
}