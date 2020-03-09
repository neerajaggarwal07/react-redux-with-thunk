import React, { Component } from "react";
import NewsListView from "../views/NewsFeedsList.view";
import {connect} from 'react-redux';
import {fetchNewsFeed,hideNews} from './NewsFeeds.actions'


 class NewsFeedsContainer extends Component {
  
/**
 * @function componentDidMount
 * @description This function will call a method that will dispatch an action to fetch news feeds data
 */
  componentDidMount() {
    this.props.onClickLoadMore(this.props.pgNum);
  }

 
  render() {
    if(this.props.isLoading) {
        return <p>Loading...</p>
    }
    if(this.props.isError) {
        return <p>Something Went Error...</p>
    }
    return (
      <NewsListView
        itemsList={this.props.newsFeedsList}
        loadMoreHandler={() => this.props.onClickLoadMore(this.props.pgNum)}
        hideClickHandler={this.props.onHideClickHandler}
      />
    );
  }
}

//store a function and return
const mapStateToProps = state => {

  // map of prop names and slice of state stored in redux
  return {
    pgNum : state.pageNumber,
    newsFeedsList : state.newsFeedsList,
    isError : state.error,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // holds the reference of annonymouese function 
    onClickLoadMore : (pgNum) => dispatch(fetchNewsFeed(pgNum)),
    onHideClickHandler : (id) => dispatch(hideNews(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedsContainer);
