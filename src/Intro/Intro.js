import React    from "react";
import template from "./Intro.jsx";


class Intro extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Intro;
