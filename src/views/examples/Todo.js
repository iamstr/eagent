import React from "react";
import "../../assets/css/todo.css";
export default function Todo() {
  const [check, setCheck] = React.useState(false);
  const [fades, setFades] = React.useState("");
  return (
    <div id="wrapper">
      <h1>
        Todo List <i class="fa fa-check" />{" "}
      </h1>
      <h2>
        tasks <span>For Today</span>
      </h2>

      <div>
        <input type="checkbox" id="check1" />
        <label for="check1">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          do this
        </label>
      </div>

      <div>
        <input type="checkbox" id="check2" />
        <label for="check2">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          do that
        </label>
      </div>

      <div>
        <input type="checkbox" id="check3" />
        <label for="check3">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          do there
        </label>
      </div>

      <div>
        <input type="checkbox" id="check4" />
        <label for="check4">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          everything
        </label>
      </div>

      <div>
        <input type="checkbox" id="check5" />
        <label for="check5">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          yes, it works
        </label>
      </div>

      <div>
        <input type="checkbox" id="check6" />
        <label for="check6">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          final duty
        </label>
      </div>

      <div>
        <input type="checkbox" id="check7" />
        <label for="check7">
          <div>
            <i class="fa fa-check" />
          </div>{" "}
          yooray
        </label>
      </div>

      <div>
        <input type="checkbox" id="check8" />
        <label for="check8">
          <div>
            <i class="fa fa-check" />
          </div>
          I'm aware that no JavaScript is required
        </label>
      </div>

      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-green w-50 mt-5 font-weight-bold position-relative"
          onClick={() => {
            setCheck(!check);
            check === true ? setFades("fade") : setFades("in");
          }}
        >
          Next <i class="fa fa-angle-right absolute absolute-1" />
        </button>
        <button
          className="btn btn-default  w-50 ml-3 mt-5 font-weight-bold position-relative"
          onClick={() => {
            setCheck(!check);
            check === true ? setFades("fade") : setFades("in");
          }}
        >
          <i class="fa fa-angle-left absolute absolute-1" /> Back
        </button>
      </div>
    </div>
  );
}
