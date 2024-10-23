import {memo} from "react";
import {ScalableMapWidget} from "../../widgets/scalableMap";

export const HomePage = memo(function Home() {
  return (
    <>
      <h1>Home</h1>
      <ScalableMapWidget />
    </>
  )
})