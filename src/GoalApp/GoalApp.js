import { Button } from "@mui/material";
import React, { useState } from "react";

function GoalApp() {
  const [formdata, setform] = useState({
    goal: "",
    by: "",
  });
  const [goals, setgoals] = useState([]);
  console.log(goals);
  const handlechange = (e) => {
    setform((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const Sub = (e) => {
    e.preventDefault();
    if (!formdata.goal || !formdata.by) {
      // If either goal or by fields are empty, do not proceed
      return;
    }
    setgoals((prev) => [...prev, { goal: formdata.goal, by: formdata.by }]);
    setform({ goal: "", by: "" }); // Reset form data after submission
  };

  return (
    <div>
      <form onSubmit={Sub}>
        <input
          name="goal"
          type="text"
          placeholder="Enter your goal here..."
          value={formdata.goal}
          onChange={handlechange}
        />
        <input
          name="by"
          type="text"
          placeholder="by"
          value={formdata.by}
          onChange={handlechange}
        />
        <button
          disabled={!formdata.goal || !formdata.by}
          variant="contained"
          type="submit"
        >
          Submit
        </button>
      </form>{" "}
      <ul>
        {goals.map((item) => (
          <li>
            I want to {item.goal} by {item.by}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalApp;
