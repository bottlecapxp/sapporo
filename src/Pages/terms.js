import React from "react";
import { useHistory } from "react-router-dom";
import "./Pages.css";
import Header from "../components/header.js";
import BulletPoint from "../components/bulletpoint.js";

const Terms = (props) => {
  let history = useHistory();

  return (
    <div className="terms_container">
      <Header title="TERMS AND CONDITIONS" />
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet " />
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet " />
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet " />
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet " />
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet " />
      <button
        onClick={() => {
          history.push("/collect");
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Terms;
