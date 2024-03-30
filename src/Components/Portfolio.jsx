/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/building.jpg";

const imageAltText = "There is an backgroung image of building consisting beautiful design of bricks casting an etraordinary image of art.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things to Know About cyberseurity and microsoft tools",
    description:
      "This article will help in undersatanding fundamentals of cybersecurity and indroduce tools for security.",
    url: "https://github.com/microsoft/Security-101/blob/main/1.2%20Common%20cybersecurity%20threats.md",
  },
  {
    title: "Web Devlopment for overall improvment",
    description:
      "This fundamental enchrimchment edorse your knownledge in the field of web devlopment also fade a wide range of creativity.",
    url: "https://github.com/yankovalenko94/Webdev2019",
  },
  {
    title: "My Linkdein site",
    description:
      "This website will contain all the information about my carres project and work based on my skills.",
    url: "https://www.linkedin.com/in/sahil-raj-2a87b6253/",
  },
  {
    title: "My youtube channel",
    description:
      "This channel provide content on azure, cybersecurity and aws.",
    url: "https://youtube.com/@sahilraj5672?si=CwUe_-5g9HtQLfqd",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
