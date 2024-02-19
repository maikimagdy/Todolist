import React from "react";

function Foot({ arr }) {
  const nom = arr.filter((e) => e.done).length;
  return (
    <div className="h-32 bg-yellow-400 flex justify-between items-center text-4xl font-bold mt-60 px-16 w-full">
      <div>Total Todos:{arr.length}</div>
      <div>Completed Todos:{nom}</div>
    </div>
  );
}

export default Foot;
