import React from "react";
import "../../assets/css/styles.css";
import Inputs from "./New_Maid";
import Todo from "./Todo";

export default function NewMaid() {
  const [check, setCheck] = React.useState(false);
  const [fades, setFades] = React.useState("");
  return (
    <div className="App my-5">
      <div className="container">
        <Inputs fade={fades} />
        <button
          className="btn btn-green w-25 mt-5 font-weight-bold position-relative"
          onClick={() => {
            setCheck(!check);
            check === true ? setFades("fade") : setFades("in");
          }}
        >
          Next <i class="fa fa-angle-right absolute absolute-1" />
        </button>
        {check && <Todo />}
      </div>
    </div>
  );
}
