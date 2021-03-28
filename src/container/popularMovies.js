import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesTemp from "../components/moviesTemp";
import SearchBox from "../components/searchBox";
import Banner from "../components/banner";
import DropDown from "../components/dropDown";

const popularMovies = () => {
  const dispatch = useDispatch();

  const { PMData } = useSelector((state) => ({
    PMData: state.popularMoviesRed.popMovies
      ? state.popularMoviesRed.popMovies
      : state.popularMoviesRed.filterRed,
  }));

  useEffect(() => {
    // Call API to get the Movies Data
    dispatch({ type: "REQUEST_POPULAR_DATA" });
  }, []);

  /*
    Dispatch the action to sort the movies by Rating wise Higest and lowest
*/
  const filterData = (value) => {
    dispatch({
      type: "REQUEST_FILTER_DATA",
      filter: value,
      data: PMData,
    });
  };

  /*
    Sort the movies Rating wise Higest and lowest
*/

  const searchData = (searchText) => {
    console.log(searchText);
    if (searchText.length === 0) {
      dispatch({ type: "REQUEST_POPULAR_DATA" });
      return;
    }
    dispatch({
      type: "REQUEST_SEARCH_DATA",
      filter: searchText,
      data: PMData,
    });
  };

  return (
    <div>
      <div className="row m-3 p-2 border bg-info text-white">
        <div className="col-md-4">
          {/* <select
            className="form-control"
            onChange={(event) => filterData(event)}
          >
            <option value="">Rating</option>
            <option value="RL">Rating Low</option>
            <option value="RH">Rating High</option>
          </select> */}
          <DropDown sortFuncation={filterData} />
        </div>
        <div className="col-md-4" />
        <div className="col-md-4">
          <SearchBox SearchReq={searchData} />
        </div>
      </div>
      <div className="col-md-12">
        <Banner
          bannerImage={`https://image.tmdb.org/t/p/w500//pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg`}
        />
      </div>
      <div>
        <MoviesTemp pmvData={PMData} />
      </div>
    </div>
  );
};
export default popularMovies;
