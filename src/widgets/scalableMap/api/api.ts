import {getConnectedNodes} from "../lib";
import {PostNodesDto} from "../interfaces";
import {BASE_API_URL} from "../../../shared/config";

export class FlowApi {
  public static PostNodes = async ({nodes, edges}: PostNodesDto) => {
    const data = getConnectedNodes(nodes, edges);

    try {
      const response = await fetch(BASE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}