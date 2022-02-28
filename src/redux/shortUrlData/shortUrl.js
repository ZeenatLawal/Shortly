import getShortUrl from './apiCalls';

const GET_URLS = 'shortly/shortUrlData/GET_URLS';

const initialState = [];

export const shortenedUrl = (url) => async (dispatch) => {
  const getData = await getShortUrl(url);
  const getResult = Object.entries(getData).map(([key, value]) => ({
    name: key,
    link: value,
  }));

  const shortUrls = getResult.filter((data) => data.name.includes('full_short'));

  if (shortUrls) {
    dispatch({
      type: GET_URLS,
      payload: shortUrls,
    });
  }
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_URLS:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default urlReducer;
