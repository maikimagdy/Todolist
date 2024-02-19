import { Button } from "@mui/material";
import React, { useState } from "react";

function Onetodo({ arrs, setarrs }) {
  const handledel = (e) => {
    setarrs((prev) => prev.filter((ele) => ele.name !== e));
  };
  const handlecheck = (name) => {
    setarrs((prev) =>
      prev.map((e) => (e.name === name ? { ...e, done: !e.done } : e))
    );
  };
  const show = arrs
    .sort((a, b) => a.done - b.done)
    .map((e) => (
      <div className="shadow-xl w-full flex justify-between gap-3 p-3 m-3 text-xl font-bold">
        <p onClick={() => handlecheck(e.name)}>
          {" "}
          {e.done ? <del> {e.name} </del> : e.name}
        </p>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handledel(e.name)}
        >
          X
        </Button>
      </div>
    ));

  return <div className="mt-16 w-1/3 h-48">{show}</div>;
}

export default Onetodo;
