import React, { useState } from "react";
import users from "./Data";
import UserCard from "./UserCard";

const Child = () => {
  const [bigArr, setBigArr] = useState(users);
  // console.log(bigArr);
  function add() {
    console.log("Add function called");
  }
  console.log("Child rerender");
  return (
    <div>
      {bigArr.map((user) => {
        return <UserCard key={user.id} user={user} add={add} />;
      })}
    </div>
  );
};

export default Child;
