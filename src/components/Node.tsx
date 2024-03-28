import React from "react";
import { motion } from "framer-motion";
import { NodeAttributes } from "../store/NodeCounterAtom";
export const Node:React.FC<NodeAttributes> = ({data, next}) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -1000,
        right: 1400,
        bottom: 600,
        left: -1000,
      }}
      className="flex flex-row absolute"
    >
      <div className="bg-red-600 h-[60px] w-[60px] flex flex-row justify-center items-center text-white rounded-l-2xl">{data}</div>
      <div className="bg-red-400 h-[60px] w-[40px] flex flex-row justify-center items-center text-white rounded-r-2xl">{next}</div>
    </motion.div>
  );
};
