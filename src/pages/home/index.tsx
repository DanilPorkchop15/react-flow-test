import {memo} from "react";
import {ScalableMapWidget} from "../../widgets/scalableMap";
import {ReactFlowProvider} from "@xyflow/react";

export const HomePage = memo(function Home() {
  return (
    <ReactFlowProvider>
      <h1>Scalable Map</h1>
      <ScalableMapWidget />
    </ReactFlowProvider>
  )
})