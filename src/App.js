import React, { Component } from "react";
import topImg from "./top.png";
import middleImg from "./middle.png";
import bottomImg from "./bottom.png";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card2
          renderImg={() => <img src={middleImg} alt="" />}
          renderBottom={() => <img src={bottomImg} alt=""/>}
        />
        <Card>
          <div>
            <img src={topImg} alt="" />
            <img src={middleImg} alt="" />
            <img src={bottomImg} alt="" />
          </div>
        </Card>
      </div>
    );
  }
}

export default App;

class Card extends Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

class Card2 extends Component {
  render() {
    return (
      <div className="card">
        <h5>
          {this.props.name} - {this.props.hp}
        </h5>
        {this.props.renderImg()}
        {this.props.renderBottom()}
      </div>
    );
  }
}
