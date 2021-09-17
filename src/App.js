import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import "./App.css";

const imgArr = {
  'introduction_to_cloud_computing':              ['Introduction to Cloud Computing', 0.4, '13 Sep 2021'],
  'serverless_concepts':                          ['Serverless Concepts', 1.2, '13 Sep 2021'],
  'network_routing_fundamentals':                 ['Network Routing Fundamentals', 2.8, '14 Sep 2021'],
  'python_3_scripting_for_system_administrators': ['Python 3 Scripting for System Administrators', 10, '15 Sep 2021'],
  'aws_certification_preparation_guide':          ['AWS Certification Preparation Guide', 3.2, '16 Sep 2021'],
  'python_for_beginner_legacy':                   ['Python for Beginners (legacy)', 6.1, '17 Sep 2021']
}
// sort by date
var sorted = Object.entries(imgArr).sort(([, a] ,[, b]) => Date.parse(a[2]) - Date.parse(b[2])).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

var images = [];
var total = 0;
for (const [k, v] of Object.entries(sorted).reverse()) {
  const obj = {
    src: CERTS_DIR + `certs/${k}.png`,
    thumbnail: CERTS_DIR + `certs/${k}.png`,
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
class App extends Component{
  render() {
    return(
      <div className="App">
        <p>{images.length} courses, {total} hours in total.</p>
        <Gallery images={images} enableImageSelection={false} />
      </div>
    );
  }
}

export default App;