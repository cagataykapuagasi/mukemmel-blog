import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook
} from "react-icons/fa";
import "../styles/icon.scss";

export default class Icons extends React.PureComponent {
  onClick = () => {
    const { type } = this.props;

    if (type === "youtube") {
      window.open("https://www.youtube.com/channel/UCDBeGxkRfzV4I_bffXtJ79w");
    } else if (type === "twitter") {
      window.open("https://twitter.com/Jus_tect");
    } else if (type === "instagram") {
      window.open("https://www.instagram.com/ccagatayk");
    } else if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/cagataykapuagasi");
    } else {
      window.open("https://www.facebook.com/profile.php?id=1114208749");
    }
  };

  Icon = () => {
    const { type, size } = this.props;

    if (type === "youtube") {
      return (
        <FaYoutube
          size={size}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.onClick}
          className="icon"
        />
      );
    } else if (type === "twitter") {
      return (
        <FaTwitter
          size={size}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.onClick}
          className="icon-twitter"
        />
      );
    } else if (type === "instagram") {
      return (
        <FaInstagram
          size={size}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.onClick}
          className="icon-instagram"
        />
      );
    } else if (type === "linkedin") {
      return (
        <FaLinkedin
          size={size}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.onClick}
          className="icon-linkedin"
        />
      );
    } else {
      return (
        <FaFacebook
          size={size}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.onClick}
          className="icon-facebook"
        />
      );
    }
  };

  render() {
    const { Icon } = this;

    return <Icon />;
  }
}
