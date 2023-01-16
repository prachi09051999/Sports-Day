import { endLoading, fetchSports, startLoading } from "../redux-store/actions";

const fetchSportsData = (dispatch) => {
  dispatch(startLoading());
  fetch("https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a")
    .then((response) => response.json())
    .then((result) => {
      dispatch(fetchSports(result));
    })
    .catch((err) => err)
    .finally(() => {
      dispatch(endLoading());
    });
};

export default fetchSportsData;
