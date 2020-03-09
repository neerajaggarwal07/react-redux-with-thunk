
import constants from './NewsFeeds.constants';
const initialState =  {
    pageNumber: 1,
    newsFeedsList: [],
    isLoading : false,
    error:false
  };

  const NewsFeedsReducer = ( state = initialState, action) => {
        switch(action.type){
            case constants.SHOW_LOADER : return {
                ...state,
                isLoading: true
            };
            case constants.HIDE_LOADER : return {
                ...state,
                isLoading: false
            };
            case constants.SHOW_ERROR : return {
                ...state,
                error: action.bIsError
            };
            case constants.PAGE_NUMBER : return {
                ...state,
                pageNumber: state.pageNumber + 1
            };
            case constants.GET_NEWS_FEEDS : return {
                ...state,
                newsFeedsList : action.result.hits
            };
            case constants.HIDE_NEWS : return {
                ...state,
                newsFeedsList : state.newsFeedsList.filter(item => item.objectID !== action.id)
            };
            default : return state;

        }
  }

  export default NewsFeedsReducer;