import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import Onetodo from "./Onetodo";
import Foot from "./Foot";

function Body() {
  const [val, setval] = useState({
    name: "",
    done: false,
  });
  const [arr, setarr] = useState([]);
  const handleclick = () => {
    setval((prev) => ({ ...prev, name: "" }));
    setarr((prev) => [...prev, val]);
  };
  return (
    <div className="flex min-h-full  flex-col justify-center items-center ">
      <div className="shadow-xl w-1/3 flex justify-between gap-3 p-3 ">
        <TextField
          className="w-full "
          placeholder="Add a Task..."
          value={val.name}
          onChange={(e) =>
            setval((prev) => ({ ...prev, name: e.target.value }))
          }
        ></TextField>
        <Button
          variant="contained"
          color="warning"
          onClick={handleclick}
          disabled={val.name === ""}
        >
          Add
        </Button>
      </div>
      <Onetodo arrs={arr} setarrs={setarr} />
      <Foot arr={arr} />
    </div>
  );
}

export default Body;
