import { Button, TextField } from "@mui/material";
import Onetodo from "./Onetodo";
function Body({ handleclick, setarr, setval, arr, val }) {
  return (
    <div className="flex  flex-col justify-center items-center  ">
      <div className="shadow-xl w-1/2 flex justify-between gap-3 p-3 ">
        <TextField
          className="w-full"
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
    </div>
  );
}

export default Body;
