import React, { useState, useEffect } from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import Foot from "./components/Foot";

function Allapp() {
  const [arr, setArr] = useState(() => {
    const storedArr = JSON.parse(window.localStorage.getItem("Array"));
    return storedArr || [];
  });

  const [val, setVal] = useState({
    name: "",
    done: false,
  });

  const handleclick = () => {
    setVal((prev) => ({ ...prev, name: "" }));
    setArr((prevArr) => [...prevArr, val]);
  };

  useEffect(() => {
    window.localStorage.setItem("Array", JSON.stringify(arr));
  }, [arr]);

  return (
    <div className="h-full flex justify-between flex-col">
      <Head />
      <Body
        handleclick={handleclick}
        arr={arr}
        setarr={setArr}
        val={val}
        setval={setVal}
      />
      <Foot arr={arr} />
    </div>
  );
}

export default Allapp;
