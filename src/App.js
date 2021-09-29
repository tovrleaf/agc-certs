import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import "./App.css";
import transform from './nameTransform';

const imgArr = [
  ['Introduction to Cloud Computing', 0.4, '13 Sep 2021'],
  ['Serverless Concepts', 1.2, '13 Sep 2021'],
  ['Network Routing Fundamentals', 2.8, '14 Sep 2021'],
  ['Python 3 Scripting for System Administrators', 10, '15 Sep 2021'],
  ['AWS Certification Preparation Guide', 3.2, '16 Sep 2021'],
  ['Python for Beginners (legacy)', 6.1, '17 Sep 2021'],
  ['Coding for Cloud 101 (legacy)', 1.4, '18 Sep 2021'],
  ['AWS Cost Control (legacy)', 4.5, '19 Sep 2021'],
  ['AWS Cloud Services and Infrastructure - Cost Optimization Deep Dive', 11.7, '20 Sep 2021'],
  ['Introduction to AWS (Legacy)', 1.5, '21 Sep 2021'],
  ['Storage, Databases, and Migration for Associate AWS Solutions Architects', 7.8, '22 Sep 2021'],
  ['Introduction to Amazon RDS', 3.1, '23 Sep 2021'],
  ['AWS Certified Cloud Practitioner 2020', 13.2, '21 Nov 2020'],
  ['Introduction to AWS CloudFormation', 2, '24 Sep 2021'],
  ['Kubernetes Deep Dive', 4.7, '26 Sep 2021'],
  ['S3 Masterclass', 12.1, '27 Sep 2021'],
  ['AWS Essentials', 14.9, '28 Sep 2021'],
  ['Designing Resilient Architectures for Associate AWS Solutions Architects', 5, '29 Sep 2021'],
]

// sort by date
var sorted = Object.entries(imgArr).sort(([, a] ,[, b]) => Date.parse(a[2]) - Date.parse(b[2])).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

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