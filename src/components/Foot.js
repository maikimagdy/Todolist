import React from "react";

function Foot({ arr }) {
  const nom = arr.filter((e) => e.done).length;
  return (
    <div className="py-12 bg-yellow-400 flex justify-between items-center text-4xl font-bold px-5 w-full foot">
      <div>Total Todos: {arr.length}</div>
      <div>Completed Todos: {nom}</div>
    </div>
  );
}

export default Foot;
