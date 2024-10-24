import {getConnectedNodes} from "../lib";
import {PostNodesDto} from "../interfaces";

export class FlowApi {
  public static  PostNodes = async ({nodes, edges} : PostNodesDto) =>{
    const data = getConnectedNodes(nodes, edges);
    console.log("Connected nodes", data);
    try {
      const response = await fetch("https://test/", {
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