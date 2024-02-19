import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";

function Calc() {
  const [form, setform] = useState({
    name: "",
    pass: "",
  });

  const [num, setnum] = useState(0);
  const [res, setres] = useState("");
  const add = () => {
    setres((prev) => +prev + +num);
  };
  const devide = () => {
    setres((prev) => +prev / +num);
  };
  const subtract = () => {
    setres((prev) => +prev - +num);
  };
  const Multiply = () => {
    setres((prev) => +prev * +num);
  };
  const resetinp = () => {
    setnum("");
  };
  const resetres = () => {
    setres("");
  };

  return (
    <div>
      <div className="m-4">
        <TextField
          label="Res"
          value={res}
          onChange={(e) => setres(e.target.value)}
          type="number"
        ></TextField>
      </div>
      <div className="m-4">
        <TextField
          type="number"
          label="Insert"
          value={num}
          onChange={(e) => setnum(e.target.value)}
        ></TextField>
      </div>
      <div className="m-5 flex  gap-2">
        <Button variant="contained" onClick={add} disabled={!num}>
          Add
        </Button>
        <Button variant="contained" onClick={subtract} disabled={!num}>
          subtract
        </Button>
        <Button variant="contained" onClick={devide} disabled={!num}>
          devide
        </Button>
        <Button variant="contained" onClick={Multiply} disabled={!num}>
          Multiply
        </Button>
        <Button variant="contained" color="error" onClick={resetinp}>
          reset Input
        </Button>
        <Button variant="contained" color="error" onClick={resetres}>
          Reset Result
        </Button>
      </div>
    </div>
  );
}

export default Calc;
