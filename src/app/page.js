"use client";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterHead from "./components/FooterHead";
import Updates from "./Updates/page";
import Pitch from "./Pitch/page";
import Risk from "./components/Risk";

const myApp = () => {
  const [activeTab, setActiveTab] = useState("pitch");

  useEffect(() => {
    // Set the first tab as active by default when the component mounts
    setActiveTab("tab1");
  }, []);

  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <br />

      <div className="bg-white pl-28 pr-28">
        <div className="flex-center mx-auto">
          <div className="flex border-b border-gray-300">
            <button
              id="tab1"
              onClick={() => setActiveTab("tab1")}
              className={`tab-button py-2 px-4 text-gray-600 font-semibold border-b-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors ${
                activeTab === "tab1" ? "border-blue-500" : ""
              }`}
            >
              Pitch
            </button>
            <button
              id="tab2"
              onClick={() => setActiveTab("tab2")}
              className={`tab-button py-2 px-4 text-gray-600 font-semibold border-b-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors ${
                activeTab === "tab2" ? "border-blue-500" : ""
              }`}
            >
              Updates
            </button>
          </div>

          <div className="mt-4">
            <div
              id="content1"
              className={`tab-content p-2 bg-white ${
                activeTab === "tab1" ? "block" : "hidden"
              }`}
            >
              <Pitch></Pitch>
            </div>
            <div
              id="content2"
              className={`tab-content p-2 bg-white ${
                activeTab === "tab2" ? "block" : "hidden"
              }`}
            >
              <Updates></Updates>
            </div>
          </div>
        </div>
      </div>

      <br />
      <Risk></Risk>
      <FooterHead></FooterHead>
      <Footer></Footer>
    </div>
  );
};

export default myApp;
