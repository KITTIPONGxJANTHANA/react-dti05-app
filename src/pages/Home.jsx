import React from "react";
import MeunBar from "../components/MeunBar";
import Pro from "./../assets/Pro.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Component from "./../assets/Component.png";
import Firebase from "./../assets/Firebase.png";
import Html from "./../assets/Html.png";
import Java from "./../assets/Java.png";
import Node from "./../assets/Node.png";
import Outline from "./../assets/Outline.png";
import Spring from "./../assets/Spring.png";
import Vector from "./../assets/Vector.png";

const Home = () => {
  const hc = { color: "yellow" };

  return (
    <>
      <MeunBar hc={hc} />
      <div className="flex items-center justify-center mt-20 ">
        {}
        <div className="text-white mr-20">
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl">
            Frontend Web
          </h1>
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl">
            Developer
          </h1>
          <br />
          <span>
            Hi, I'm NiniN SAU. A passionate Frontend Web Developer based in
            Cambodia
          </span>
          <br />
          <span>
            Web developer, with extensive knowledge and years of experience
          </span>
          {}
          <div className="flex mt-5 gap-3">
            <FaLinkedinIn className="text-4xl bg-white text-black p-2 rounded-4xl" />
            <FaGithub className="text-4xl" />
          </div>
        </div>
        {}
        <div className="ml-20">
          <img src={Pro} alt="Pro" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <h1 style={{ fontFamily: "Lora" }} className="text-3xl text-white">
          My Tech Stack
        </h1>
      </div>
      <div className="flex items-center justify-center mt-15 pb-8">
        <img className="w-8 mx-4" src={Component} alt="Component" />
        <img className="w-8 mx-4" src={Firebase} alt="Firebase" />
        <img className="w-8 mx-4" src={Html} alt="Html" />
        <img className="w-8 mx-4" src={Java} alt="Java" />
        <img className="w-8 mx-4" src={Node} alt="Node" />
        <img className="w-8 mx-4" src={Outline} alt="Outline" />
        <img className="w-8 mx-4" src={Spring} alt="Spring" />
        <img className="w-8 mx-4" src={Vector} alt="Vector" />
      </div>
    </>
  );
};

export default Home;