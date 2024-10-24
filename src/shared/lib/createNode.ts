import {Node} from "@xyflow/react";
import {generateId} from "./generateId.ts";

export const createNode = (type: string): Node => ({
  id: generateId(),
  data: {},
  position: {
    x: (Math.random() - 0.2) * 400,
    y: (Math.random() - 0.2) * 400,
  },
  type,
});
