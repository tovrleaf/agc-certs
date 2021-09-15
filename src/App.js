import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import "./App.css";

const imgArr = {
  'introduction_to_cloud_computing': ['Introduction to Cloud Computing', '0.4', '13 Sep 2021'],
  'serverless_concepts': ['Serverless Concepts', '1.2', '13 Sep 2021'],
  'network_routing_fundamentals': ['Network Routing Fundamentals', '2.8', '14 Sep 2021'],
  'python_3_scripting_for_system_administrators': ['Python 3 Scripting for System Administrators', '10', '15 Sep 2021']
}
var images = [];
for (const [k, v] of Object.entries(imgArr)) {
  const obj = {
    src: CERTS_DIR + `certs/${k}.png`,
    thumbnail: CERTS_DIR + `certs/${k}.png`,
    thumbnailWidth: 240,
    thumbnailHeight: 185,
    tags: [{value: `${v[1]} hours`, title: "Duration"}, {value: v[2], title: "Completion"}],
    caption: v[0],
    thumbnailCaption: v[0],
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