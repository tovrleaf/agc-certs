import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import "./App.css";

const imgArr = {
  'introduction_to_cloud_computing':              ['Introduction to Cloud Computing', 0.4, '13 Sep 2021'],
  'serverless_concepts':                          ['Serverless Concepts', 1.2, '13 Sep 2021'],
  'network_routing_fundamentals':                 ['Network Routing Fundamentals', 2.8, '14 Sep 2021'],
  'python_3_scripting_for_system_administrators': ['Python 3 Scripting for System Administrators', 10, '15 Sep 2021'],
  'aws_certification_preparation_guide':          ['AWS Certification Preparation Guide', 3.2, '16 Sep 2021'],
  'python_for_beginner_legacy':                   ['Python for Beginners (legacy)', 6.1, '17 Sep 2021'],
  'coding_for_cloud_101_legacy':                  ['Coding for Cloud 101 (legacy)', 1.4, '18 Sep 2021'],
  'aws_cost_control_legacy':                      ['AWS Cost Control (legacy)', 4.5, '19 Sep 2021'],
  'aws_cloud_services_and_infrastructure_-_cost_optimization_deep_dive': ['AWS Cloud Services and Infrastructure - Cost Optimization Deep Dive', 11.7, '20 Sep 2021'],
  'introduction_to_aws_legacy':                   ['Introduction to AWS (Legacy)', 1.5, '21 Sep 2021'],
  'storage_databases_and_migration_for_associate_aws_solutions_architects': ['Storage, Databases, and Migration for Associate AWS Solutions Architects', 7.8, '22 Sep 2021'],
  'introduction_to_amazon_rds':                   ['Introduction to Amazon RDS', 3.1, '23 Sep 2021'],
  'aws_certified_cloud_practitioner_2020':        ['AWS Certified Cloud Practitioner 2020', 13.2, '21 Nov 2020'],
  'introduction_to_aws_cloudformation':           ['Introduction to AWS CloudFormation', 2, '24 Sep 2021'],
  'kubernetes_deep_dive':                         ['Kubernetes Deep Dive ', 4.7, '26 Sep 2021'],
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