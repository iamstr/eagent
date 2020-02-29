import React from "react";
export default function Inputs(props) {
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          className={`form-control ${props.fade}`}
          placeholder="Girl's Name"
        />
      </div>
      <div className="col-6">
        <input
          type="text"
          className={`form-control ${props.fade}`}
          placeholder="Girl's ID"
        />
      </div>
    </div>
  );
}
