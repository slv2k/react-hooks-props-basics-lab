import React from "react";

function About(props) {
  console.log(props);
  // return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     {/* <p>{props.bio}</p> */}
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     {/* add your <Links /> component here */}
  //   </div>
  // );

  if (props.bio === "") {
    return null;
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
    )
  }
}

export default About;
