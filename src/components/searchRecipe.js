import React from 'react';
import NavigationBar from './NavigationBar'
// import searchYouTube from 'youtube-api-search';
// import YTSearch from 'youtube-api-search'   
import axios from 'axios'
import AddSecondRecipe from './AddSecondRecipe'

// const YT_API = 'AIzaSyCw79g1Z8W9M6b20wObGETWbhfOXjhXdeA';
// Use the link below to make axios call
// set q to a variable based on input
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyCw79g1Z8W9M6b20wObGETWbhfOXjhXdeA&part=snippet&order=rating&maxResults=20&q=cats

class searchRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            videos: [],
            videoId: '',
            loading: true
        }
    }

    getURL(){
        console.log("in getURL")
        const url =
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCw79g1Z8W9M6b20wObGETWbhfOXjhXdeA&part=snippet&order=relevance&maxResults=20";
        const term = this.state.term
        axios.get(url, {
            params: {
                q: term
            }
        })
        .then(response => {
            console.log(response)

            // this.setState({ videos: response.items, loading: false });

            // this.setState({ items: response });

            // const listVideos = this.props.data.items[0].id.videoId.map(movies => {

            // })


            // const videos = this.props.recipeData.items.id.map(newRecipe => {
            //     return newRecipe.videoId

            //     console.log(newRecipe.videoId)
            // })
            // this.setState({ videos });
          });
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    render() {

        // const { loading, videos } = this.state;

        // if (loading) {
        //   return null;
        // }

        // if (!this.state.items || this.state.items.length === 0) {
        //     return null; // or <div></div>, or a loader, or whatever you want in the meantime
        // }

        // const myVideos = this.state.items.map((item) => {
        //     return(
        //       <div>
        //         <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + item.snippet.resourceId.videoId} frameborder="0" allowfullscreen></iframe>
        //         {console.log('https://www.youtube.com/embed/' + item.snippet.resourceId.videoId)}
        //       </div>
        //     );
        // })  
    
        return (
            <div>
                <NavigationBar />
                <br />
                <input type="text"
                value={this.state.term}
                placeholder="Search Recipe"
                onChange={(this.onInputChange.bind(this))}                
                />

                <button
                onClick={(this.getURL.bind(this))}>
                
                Search Recipe
                </button>
                {/* {myVideos} */}

                {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videos[1].id.videoId} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                <AddSecondRecipe />
            </div>
        );
    }
}


export default searchRecipe
