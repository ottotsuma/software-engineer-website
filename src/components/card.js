import React from "react";
import "./mysass.scss";
import Blog from "./../assets/bottle.jpg";

class card extends React.Component {
  render() {
    return (
      <div className="page-container">
        <BlogCard />
      </div>
    );
  }
}

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  render() {
    return (
      <div
        onMouseEnter={this.flip}
        onMouseLeave={this.flip}
        className={"card-container" + (this.state.flipped ? " flipped" : "")}
      >
        <Front />
        <Back />
      </div>
    );
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    );
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <p className="back-text">
          Once broken the thunderstorm contained within the bottle is unleashed on the area around it. Making no distiction between friend and foe, any who enter the area might be stuck by lightning, battered by the wind and soaked in the cold rain. 
        </p>
        <p className="back-text">
          Bloggity bloggity bloggity blog. This would be the full text 
        </p>
      </div>
    );
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img
          className="card-image"
          src={Blog}
          alt="mage"
        ></img>
        <h1 className="title">Bottled Thunderstorm</h1>
      </div>
    );
  }
}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          {/* <p className="date">{new Date().toLocaleDateString()}</p> */}
          <p className="blog-content">
            This bottle contains the wrath of the sea
          </p>
          <p className="read-more">Hover to read more...</p>
        </div>
      </div>
    );
  }
}

export default card;
