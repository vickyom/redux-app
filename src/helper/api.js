export const fetchPopularData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e2df83ac84acb977bef0b1fd007c11ad`
    );
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
  }
};
