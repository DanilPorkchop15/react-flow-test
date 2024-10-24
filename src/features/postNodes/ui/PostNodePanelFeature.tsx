import {Panel, useReactFlow} from "@xyflow/react";
import {PostNodesService} from "../services";

export const PostNodesPanelFeature = () => {
  const {getNodes, getEdges} = useReactFlow();

  return (
    <Panel position="bottom-right">
      <button onClick={() => PostNodesService.postNodes({nodes: getNodes(), edges: getEdges()})}>
        Post Nodes
      </button>
    </Panel>
  );
};