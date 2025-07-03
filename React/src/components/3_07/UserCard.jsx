import React from "react";
import { motion } from "framer-motion";

const UserCard = React.memo(({ user }) => {
    console.log("UserCard rerender");
  return (
    <motion.div
      className="bg-white border shadow-md rounded-2xl p-4 w-full max-w-sm transition-transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="text-lg font-semibold text-gray-800">👤 {user.name}</div>
      <div className="text-sm text-gray-500 mt-1">📧 {user.email}</div>
      <div className="text-xs text-gray-400 mt-2">🆔 ID: {user.id}</div>
    </motion.div>
  );
});

export default UserCard;
