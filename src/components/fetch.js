import React from "react";

export default class Fetch extends React.Component {
  state = {
    loading: true,
    course: null
  };

  componentDidMount()
  {
    fetch('http://127.0.0.1:3005/') //, {mode: '-cors'}
    .then(res => res.json())
    //.then(dt => console.log(dt))
    .then(dt => this.setState({course : dt}))
      //.then(res => console.log(res.json()))
            //.then(res => this.setState({course : res.json()}))
            .catch(err =>
               console.log(err)
            )

  }
  render() {

// fetch('http://127.0.0.1:3005/') //, {mode: 'no-cors'}
//             .then(function (res) {
//                 return res.json()
//             })
//             .then(function (data) {
//                 console.log(data);
//             }).catch(function (err) {
//                 console.log(err)
//             })
    // if (this.state.course) {
    //   return <div>{this.state.course[0]}</div>;
    // }
    // else
    console.log(this.state)

    if (!this.state.course) 
    {
      return <div>
      Cannot find aa course
      </div>;
    }
    return (
      <div>
        <div>{this.state.course[0].Course_name}</div>
        <div>{this.state.course[0].Course_duration}</div>
        <div>{this.state.course[0].category}</div><br />


        <div>{this.state.course[1].category}</div>
        <div>{this.state.course[1].Course_duration}</div>
        <div>{this.state.course[1].category}</div><br />

        <div>{this.state.course[2].category}</div>
        <div>{this.state.course[2].Course_duration}</div>
        <div>{this.state.course[2].category}</div><br />

        <div>{this.state.course[3].category}</div>
        <div>{this.state.course[3].Course_duration}</div>
        <div>{this.state.course[3].category}</div><br />

        <div>{this.state.course[4].category}</div>
        <div>{this.state.course[4].Course_duration}</div>
        <div>{this.state.course[4].category}</div> <br />

        <div>{this.state.course[6].category}</div>
        <div>{this.state.course[6].Course_duration}</div>
        <div>{this.state.course[6].category}</div><br />


      </div>
    );
  }
}