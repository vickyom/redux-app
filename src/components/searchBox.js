import React from "react";

const searchBox = (props) => {
  const { SearchReq } = props;

  const searchData = (events) => {
    console.log("searchData", events.target.value);
    SearchReq(events.target.value);
  };

  return (
    <div>
      <form action="#" method="get">
        <div className="input-group">
          <input
            onChange={(e) => searchData(e)}
            className="form-control"
            name="q"
            placeholder="Search for"
          />
        </div>
      </form>
    </div>
  );
};
export default searchBox;
