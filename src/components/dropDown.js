import React from "react";

export default function dropDown(props) {
  const { sortFuncation } = props;

  const filterData = (events) => {
    console.log("searchData", events.target.value);
    sortFuncation(events.target.value);
  };
  return (
    <div>
      <select className="form-control" onChange={(event) => filterData(event)}>
        <option value="">Rating</option>
        <option value="RL">Rating Low</option>
        <option value="RH">Rating High</option>
      </select>
    </div>
  );
}
