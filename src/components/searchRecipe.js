import React from 'react';
import NavigationBar from './NavigationBar'  
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
            var myArrayId = []
            for(let i=0; i< 20; i++){
                myArrayId.push(response.data.items[i].id.videoId)

            }
            console.log(myArrayId)
            this.setState({videos: myArrayId})
          })
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    render() {

        const myVideos = this.state.videos.map((item) => {
            return(
                <iframe width="350" height="250" src={"https://www.youtube.com/embed/" + item} frameBorder="0" allowFullScreen></iframe>
            );
        })  

    
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
                <br />
                <div>
                    {myVideos[0]}
                    <br />
                    {myVideos[1]}
                    <br />
                    {myVideos[2]}
                    <br />
                    {myVideos[3]}
                    <br />
                    {myVideos[4]}
                    <br />
                    {myVideos[5]}
                    <br />
                    {myVideos[6]}
                    <br />
                    {myVideos[7]}
                    <br />
                    {myVideos[8]}
                    <br />
                    {myVideos[9]}
                    <br />
                    {myVideos[10]}
                </div>
                <AddSecondRecipe />
            </div>
        );
    }
}


export default searchRecipe
