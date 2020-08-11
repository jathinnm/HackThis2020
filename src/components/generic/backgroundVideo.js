import React, {Component} from 'react';

function Video() {
const[videoURL, setVideoURL] = React.useState('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4')
       

   
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }


export default Video;