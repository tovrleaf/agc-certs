import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import "./App.css";

const imgArr = {
  'introduction_to_cloud_computing': ['0.4', '13 Sep 2021']
}
var images = [];
for (const [k, v] of Object.entries(imgArr)) {
  const obj = {
    src: CERTS_DIR + `certs/${k}.png`,
    thumbnail: CERTS_DIR + `certs/${k}.png`,
    thumbnailWidth: 240,
    thumbnailHeight: 185,
    tags: [{value: `${v[0]} hours`, title: "Duration"}, {value: v[1], title: "Completion"}],
    caption: "Introduction to Cloud Computing", 
  };
  images.push(obj);
}

class App extends Component{
  render() {
    return(
      <div className="App">
        <Gallery images={images} enableImageSelection={false} />
      </div>
    );
  }
}

export default App;