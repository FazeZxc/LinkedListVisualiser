import React from "react";
import { Node } from "./Node";
import { useRecoilValue } from "recoil";
import { NodeAtom, NodeAttributes } from "../store/NodeCounterAtom";

export const CreateNode: React.FC = () => {
  const nodeArray = useRecoilValue(NodeAtom);
  console.log(nodeArray);
  return (
    <div>
      {nodeArray.map((nodes: NodeAttributes) => {
        return <Node data={nodes.data} next={nodes.next} />;
      })}
    </div>
  );
};
