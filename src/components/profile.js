import React from "react";


const profile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <h1>User Name:- {user.result.name} </h1>
      <h2>Contest Ranking  ⭐⭐⭐⭐⭐ </h2>
    </>
  );
};

export default profile;
