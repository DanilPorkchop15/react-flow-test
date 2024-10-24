import React, {memo} from "react";

export const NodeWrapper = memo(function NodeWrapper({children}: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 10,
        border: '2px dashed gray',
        background: 'honeydew',
      }}
    >
      {children}
    </div>
  )
})