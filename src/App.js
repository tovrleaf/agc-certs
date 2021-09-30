import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import "./App.css";
import transform from './nameTransform';
import courses from './courses'

// sort by date
var sorted = courses()
sorted.sort((a ,b) => Date.parse(a[2]) - Date.parse(b[2]));

var images = [];
var total = 0;
for (const [k, v] of Object.entries(sorted).reverse()) {
  const pic = transform.transform(v[0])
  const obj = {
    src: CERTS_DIR + `certs/${pic}`,
    thumbnail: CERTS_DIR + `certs/${pic}`,
    thumbnailWidth: 240,
    thumbnailHeight: 185,
    tags: [{value: `${v[1]} hours`, title: "Duration"}, {value: v[2], title: "Completion"}],
    caption: v[0],
    thumbnailCaption: v[0].length > 40 ? v[0].substring(0, 37) + '...' : v[0]
  };
  images.push(obj);

  total += v[1];
}

total = Math.round(total * 10) / 10
var days = Math.floor(total / 24);
var hours = Math.round(total % 24 * 10) / 10;
class App extends Component{
  render() {
    return(
      <div className="App">
        <p>{images.length} courses, {days} days, {hours} hours in total.</p>
        <Gallery images={images} enableImageSelection={false} />
      </div>
    );
  }
}

export default App;