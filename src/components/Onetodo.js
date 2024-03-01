import { Button } from "@mui/material";

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
      <div className="shadow-xl w-2/5 rounded-lg flex justify-between gap-3 p-3 mb-3 text-xl font-bold">
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

  return (
    <div className="mt-16 flex justify-center flex-col items-center w-full ">
      {show}
    </div>
  );
}

export default Onetodo;
