// import React from 'react';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import _ from 'lodash'
const API_KEY = 'AIzaSyCSlhxkHsiCF1ncWeGPyP30tP-DYjBP9e8'


class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    };
    // this.videoSearch("surf")
  }

  videoSearch(term){
    YTsearch({key: API_KEY, term: term}, videos => {
      this.setState({
        selectedVideo: videos[0],
        videos
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar
        onSearch = {videoSearch}/>
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#video-player'))
