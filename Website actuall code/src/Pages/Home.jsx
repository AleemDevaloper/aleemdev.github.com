import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "../assets/Styles/Pages/home.scss";
import "../assets/Styles/Pages/Projects.scss";
import "../assets/Styles/Pages/contact.scss";
import "../assets/Styles/footer.scss";
import { Link, NavLink } from "react-router-dom";
import Project from "./Model/project";
import Scene from "./Model/Secne";
import Scene2 from "./Model/Scene2";
import Scene3 from "./Model/Secne3";
import Scene4 from "./Model/Scene4";
import about from "../assets/images/about.jpg";
import "../assets/Styles/Pages/about.scss";
import icon1 from "../assets/images/call.png";
import icon2 from "../assets/images/email.png";
import "../assets/Styles/Pages/skills.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sk1 from '../assets/images/skills/sk (1).png';
import sk2 from '../assets/images/skills/sk (2).png';
import sk3 from '../assets/images/skills/sk (3).png';
import sk4 from '../assets/images/skills/sk (4).png';
import sk5 from '../assets/images/skills/sk (5).png';
import sk6 from '../assets/images/skills/sk (6).png';
import sk7 from '../assets/images/skills/sk (7).png';
import sk8 from '../assets/images/skills/sk (8).png';
import sk9 from '../assets/images/skills/sk (9).png';
import sk10 from '../assets/images/skills/sk (10).png';
import sk11 from '../assets/images/skills/sk(11).png';
import sk12 from '../assets/images/skills/sk(12).png';
import sk13 from '../assets/images/skills/sk(13).png';
import sk14 from '../assets/images/skills/sk(14).png';
import sk15 from '../assets/images/skills/sk(15).png';
import sk16 from '../assets/images/skills/sk(16).jpeg';
import cv from '../assets/resume/Cv (1).pdf';

function Home() {
  
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 8, // Number of slides to show at once (default for larger screens)
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000, // Autoplay speed in milliseconds
    arrows: true,
    responsive: [
      {
        // Settings for screens with width 1024px or greater
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        // Settings for screens with width between 600px and 1023px
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        }
      },
      {
        // Settings for screens with width less than 600px
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  




  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <Scene />,
    <Scene2 />,
    <Scene3 />,
    // Add more slides as needed
  ];
  const texts = [
    <a href="https://github.com/AleemDevaloper" className="texts">Github</a>,
    <a href="https://www.facebook.com/profile.php?id=100094860355614" className="texts">Facebook</a>,
    <a href="https://join.skype.com/invite/vFOXfP8O4wLb" className="texts">Skype</a>,
    // Add more texts as needed
  ];
  
  const prevT = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  const nextT = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="homesection">
        <div className="home" id="home">
          {/* Nav bar start from here  */}
          <nav className="navbar navbar-expand navbar-light w-100">
            <div className="container-xl mx-md-3">
              <NavLink className="navbar-brand" to="/">
                <svg
                  version="1.1"
                  viewBox="0 0 1600 1376"
                  width="50"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    transform="translate(757,39)"
                    d="m0 0h7l21 5 26 10 20 12 15 11 10 9 19 19 11 14 11 15 12 19 11 18 13 22 12 21 12 20 45 78 14 24 16 28 15 26 14 24 45 78 14 24 16 28 15 26 14 24 45 78 14 24 15 26 14 25 13 22 12 21 15 26 16 28 30 52 14 24 15 26 16 28 14 24 45 78 14 24 15 26 16 28 14 24 45 78 14 24 12 21 14 24-1 3-28-2-36-5-33-6-42-10-43-13-35-12-36-15-34-16-23-13-27-16-27-18-17-12-18-13-16-13-15-13-11-9-15-14-8-7-15-14-12-11-22-22-7-8-8-8-7-8-14-15-8-8-26-17-15-9-23-13-15-7-24-9-18-6-28-6-18-2h-40l-21 3-25 6-27 9-29 14-21 12-16 10-36 24-18 14-10 8-16 13-17 13-15 13-11 9-15 12-11 9-16 13-17 13-15 12-16 12-18 13-22 15-20 13-21 13-25 14-19 10-28 13-27 11-31 10-38 10-29 6-27 4-20 2-18 1h-57l-27-2-15-2-2-1 2-5 12-22 13-23 30-56 8-14 7-14 10-19 17-33 10-18 23-46 10-19 14-26 13-23 11-19 14-22 14-20 13-16 7-8 22-22 16-12 21-14 18-10 26-12 44-15 28-7 49-10 47-8 46-7 64-8 53-6 25-4 19-5 32-11 21-9 18-10 12-8 16-12 13-11 11-9 12-12 7-8 13-16 13-19 12-21 11-23 10-28 10-40-9-2-52-13-36-7-38-4-34-2h-54l-36 3-28 4-40 8-32 8-30 9-33 12-33 15-42 21 2-5 12-21 15-26 28-48 16-28 14-24 16-28 14-24 16-28 14-24 16-28 14-24 16-28 14-24 12-21 15-26 28-48 16-28 14-24 12-21z"
                    fill="#D9DBDB"
                  />
                  <path
                    transform="translate(681,774)"
                    d="m0 0h14l31 10 20 7 24 10 16 8 16 9 26 16 15 10 26 20 14 12 13 12 8 6v2l4 2 10 10 8 7 31 31 7 8 14 14v2h2l7 8 9 10 7 8 9 10 9 11h-3l-17-17-7-8-15-15-7-8-2-4-4-2v-2h-2l-5-6v-2l-3-1-5-5v-2l-4-2v-2l-4-2v-2l-4-2-17-17-4-3v-2l-4-2-18-13-8-6-2-1v-2l-5-1-4-3-5-1 1 7-3 4h-2l-2 8 6 5v4l-2 2-1 4h2l-1 5-3 5-1 5 2 4-3 5-10 9-2 3 17 1 1 3h-49l-21 3-25 6-27 9-29 14-21 12-16 10-36 24-18 14-10 8-16 13-17 13-15 13-11 9-15 12-11 9-16 13-17 13-15 12-16 12-18 13-22 15-20 13-21 13-25 14-19 10-28 13-27 11-31 10-38 10-29 6-27 4-20 2-18 1h-57l-27-2-15-2-2-1 2-5 12-22 13-23 30-56 8-14 7-14 10-19 17-33 10-18 23-46 10-19 14-26 13-23 11-19 14-22 14-20 13-16 7-8 22-22 16-12 21-14 18-10 26-12 44-15 28-7 49-10 47-8 46-7 64-8z"
                    fill="#A4A5A5"
                  />
                  <path
                    transform="translate(757,39)"
                    d="m0 0h7l21 5 26 10 20 12 15 11 10 9 19 19 11 14 11 15 12 19 11 18 13 22 12 21 12 20 45 78 14 24 16 28 15 26 14 24 45 78 14 24 16 28 15 26 14 24 45 78 14 24 15 26 3 6-6-2-12-14-11-12-16-17-22-22-8-7-12-11-14-11-13-10-18-13-24-16-23-14-27-14-32-16-31-13-26-8-10-2-42-11-38-8-19-3-44-4-20-1h-54l-36 3-28 4-40 8-32 8-30 9-33 12-33 15-42 21 2-5 12-21 15-26 28-48 16-28 14-24 16-28 14-24 16-28 14-24 16-28 14-24 16-28 14-24 12-21 15-26 28-48 16-28 14-24 12-21z"
                    fill="#FDFDFD"
                  />
                  <path
                    transform="translate(872,884)"
                    d="m0 0h5l5 3 1 2h3v2l5 2 6 4v2l4 2 14 10 10 9 16 16 6 5 6 7 6 5 5 6v2h2l7 8 16 17 9 9-2 2-4-1-7-3-3-2h-5l-1-3h-8l-6-4-8-3-7-1-21-8-18-6-28-6-9-1-1-4h-14l-3-1 2-4 7-7 4-3 1-4-2-5 3-7 2-2 1-4h-2l1-4-2-1 4-1-2-5-5-4 1-4 2-4 4-4z"
                    fill="#C5C6C6"
                  />
                  <path
                    transform="translate(80,1224)"
                    d="m0 0h2v5l-4 10-1 8v9l3 4 1 10-3 5 2 4 8 4v2l-2 1 4 1 1 5 3-1 1-3 3 1 4 6 6 1v6l-5 2-14 3-7 3-12-1-6 2h-10l-26-3-2-1 2-5 5-9h4v-2h2l1-4 6-8 8-16 4-7h2v-2l9-9 1-3h2v-2h2l2-10 2-4h2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(129,1232)"
                    d="m0 0 4 2v7l4 4 5 1 2 11-7 1v7 4h-4v14l1 6-9-5-1-6 2-2-3-2 3-3h3l-1-6-4-5-2-1v-2l-4-1-4-3-1-7-3-8 2-4 2 1v2l10-1 3-1z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(915,908)"
                    d="m0 0 5 1 37 37 7 8 14 14v2h2l7 8 9 10 7 8 9 10 9 11h-3l-17-17-7-8-15-15-7-8-2-4-4-2v-2h-2l-5-6v-2l-3-1-5-5v-2l-4-2v-2l-4-2v-2l-4-2-15-15-2-4-6-5z"
                    fill="#A3A4A4"
                  />
                  <path
                    transform="translate(966,535)"
                    d="m0 0 5 1 14 4 25 11 48 24 22 13 27 18 7 5 3 5-4-1-12-9-16-10-25-15-14-7-17-9-23-11-16-8-20-8z"
                    fill="#CBCCCC"
                  />
                  <path
                    transform="translate(256,1090)"
                    d="m0 0 2 4-4 5v7l-4-1v9l-4 5v8h-3l-2 7-8 6-1 2 3-1 2 2-6 9-2 6h-3l-2 5-2 1-1-3 2-7 3-5 2-8h2l-1-7 6-3 1-7h2l2-5 1-12 3-4 1-4 5-1 3-5h2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(1033,1030)"
                    d="m0 0 4 2 3 2v2l4 2 9 9 7 6 7 8 65 65 5 6-1 2-17-16-10-9-15-14-21-21-7-8-8-8-7-8-14-15z"
                    fill="#FEFEFE"
                  />
                  <path
                    transform="translate(345,849)"
                    d="m0 0h8v3l-3 1-1 2h-2l-3 6h-2l-1 3-6 4-6 7-6 4-5 8-2 6-4 4h-2l-2 5-1-4-3-1 2-4h2v-2h2l2-6 4-5h2l2-4 9-7 5-6h2l2-4 2-5-12 1-10 5-3-1 4-4 5-1 1-2h3l1-2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(203,1259)"
                    d="m0 0 4 4 1 4 5 1 2 1v2l5-1 3-1 5 3 7 2 10 3 6-1 1 4-5 1h-2l-7 6-12 6-4 1 5-5 5-4 1-3h2v-2h-9l-14-3-8-7-2-5z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(175,1187)"
                    d="m0 0h3l1 7-4 15h-2l-1 5h-2l-2 18 1 5-7 2v-2h-2v-2l-2-1 2-2 1-9 3-8 3-10h2v-4l1-3h2l1-9z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(954,980)"
                    d="m0 0 10 4 4 3 8 1 2 2h5l3 3 9 3 5 1 9 10 8 8v3l-5-2-17-11-28-16-15-7z"
                    fill="#DFE0E0"
                  />
                  <path
                    transform="translate(915,908)"
                    d="m0 0 5 1 37 37 3 4v3l-4-1-5-5v-2l-4-2v-2l-4-2v-2l-4-2-15-15-2-4-6-5z"
                    fill="#979898"
                  />
                  <path
                    transform="translate(281,998)"
                    d="m0 0h2v5l-6 5-5 8-1 7-4 4-6-2-4-3 2-4h2v-2l5-2 5-10 6-4z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(181,1151)"
                    d="m0 0 6 2 1 3-4 6-1 4-1 3 1 3-4 2-6-1-1-4 2-3 2-10z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(302,899)"
                    d="m0 0 2 4-3 5 1 1 3-6h3l-3 6-1 1-2 10-2 4-4 3-4-2-1-8 2-4 2-1 3-7z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(163,1244)"
                    d="m0 0 6 1 1 3-2 12-2 3h-3l-1-2v-6l2-5z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(1192,681)"
                    d="m0 0 5 1 10 10 7 8 3 3-1 3-1-2h-2l-5-6-16-16z"
                    fill="#C9CACA"
                  />
                  <path
                    transform="translate(162,1293)"
                    d="m0 0 8 1 3 1 1 4-5 4-4-1 1-2-3-1v-2h-5v-2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(1144,1140)"
                    d="m0 0 5 1 13 12 9 7 2 2-1 3-10-9-11-9-7-6z"
                    fill="#FCFCFC"
                  />
                  <path
                    transform="translate(295,930)"
                    d="m0 0 4 1v6l-3 9-3-1-1-4-4-1v-3h3l1-2h2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(998,994)"
                    d="m0 0 4 1 11 12 8 10h-3l-17-17-3-4z"
                    fill="#A1A2A2"
                  />
                  <path
                    transform="translate(137,1163)"
                    d="m0 0h2l1 4-6 8v10l-4 2-1-3 3-11 4-9z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(33,1293)"
                    d="m0 0 2 1-2 7 1 6 6 1v1l-12-1-2-1 2-5z"
                    fill="#A4A5A5"
                  />
                  <path
                    transform="translate(1173,661)"
                    d="m0 0 5 2 14 14-1 3-15-14v-2l-3-1z"
                    fill="#CACBCB"
                  />
                  <path
                    transform="translate(114,1220)"
                    d="m0 0 5 1v4l7 3v2l-5-1-4-1-5 4 1-9z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(199,1069)"
                    d="m0 0h2l2 15-9 1v-3l5-4z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(220,1165)"
                    d="m0 0 2 1-1 6-5 6h-1v-6l4-6z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(149,1290)"
                    d="m0 0 8 5-3 2-7-1v-2l-3-1 3-2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(966,535)"
                    d="m0 0 5 1 14 4v2l3 1-4 1-12-5-6-3z"
                    fill="#C7C8C8"
                  />
                  <path
                    transform="translate(322,851)"
                    d="m0 0m-2 1 3 1-2 3-4 3h-2l-1 3-2-1 1-4 5-4z"
                    fill="#A1A2A2"
                  />
                  <path
                    transform="translate(173,1078)"
                    d="m0 0 3 1v5l-4 4-3-2z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(954,980)"
                    d="m0 0 10 4 5 5-6-2-11-5z"
                    fill="#D9DBDB"
                  />
                  <path
                    transform="translate(223,957)"
                    d="m0 0 3 1-3 5h-2l-1 2-2-6z"
                    fill="#909090"
                  />
                  <path
                    transform="translate(198,1218)"
                    d="m0 0 1 2-4 7-3 1 1-5z"
                    fill="#8E8E8E"
                  />
                  <path
                    transform="translate(255,907)"
                    d="m0 0v3l-2 3h-2l-2 11h-2l3-12z"
                    fill="#8E8E8E"
                  />
                </svg>
              </NavLink>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-lg-3">
                  <li
                    className="nav-item"
                    onClick={() => scrollToSection("main")}
                  >
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="#home"
                    ></NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => scrollToSection("about")}
                  >
                    <NavLink className="nav-link" to="/home"></NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => scrollToSection("skills")}
                  >
                    <NavLink className="nav-link" to="/home"></NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => scrollToSection("project")}
                  >
                    <NavLink className="nav-link" to="/home"></NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => scrollToSection("contact")}
                  >
                    <NavLink className="nav-link" to="/home"></NavLink>
                  </li>
                </ul>
                <form className="d-flex menu">
                  <button className="btn"><Link to='/menu' className="btn"> Menu</Link></button>
                  <span></span>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div className="main-section" id="main">
          <div className="container">
          <div className="row mx-2">
            <div className="col-lg-5 d-flex justify-content-center align-iems-center flex-column ">
              <h2>Welcome to My Website</h2>
              <h1>
                I'm <span> Aleem</span> <br /> Web Developer
              </h1>
              <p>
                I'm a passionate and dedicated web developer with over 3 years
                of experience. I specialize in creating modern, user-friendly,
                and responsive websites. I have worked with various clients from
                small businesses to large corporations.
              </p>
              <div className="btn-p">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="star"></div>
                  <button className="btn"><a href={cv} download>Download Cv</a></button>
                  <div className="star2"></div>
                </div>
                <span>
                  <div className="bt-g"></div>
                </span>
              </div>
            </div>
            <div className="col-lg-7 macbook">
              <Scene4 />
            </div>
          </div>
          </div>
        </div>

        <section className="about" id="about">
          <div className="container">
            <div className="row justify-content-center align-items-center flex-column-lg">
              <div className="about-txt col">
                <h6 className="sub2-main-color mb-2">About Me</h6>
                <h1 className="sub-main-color my-2">
                  Professional
                  <font className="main-text"> Problem Solutions </font> For
                  Digital Products
                </h1>

                <p className="sub2-main-color my-3">
                  I design and create best digital products I provide solution
                  for new and digital business I design and create professional
                  websites for local business and brands
                </p>
                <div className="row my-3">
                  <div className="col d-flex">
                    <h3 className="main-color mx-1">1-</h3>
                    <h3 className="sub-main-color">Business Websites</h3>
                  </div>
                  <div className="col d-flex">
                    <h3 className="main-color mx-1">2-</h3>
                    <h3 className="sub-main-color"> E commerence websites</h3>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col d-flex">
                    <h3 className="main-color mx-1">3-</h3>
                    <h3 className="sub-main-color"> Custom Websites</h3>
                  </div>
                  <div className="col d-flex">
                    <h3 className="main-color mx-1">4-</h3>
                    <h3 className="sub-main-color"> Product Design</h3>
                  </div>
                </div>

                <div className="row ab-c my-4 mt-5">
                  <div className="col">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={icon2} alt="email" />
                      <div className="row flex-column m-1">
                        <div className="col sub-main-color">Email Me</div>
                        <div className="col sub-main-color">
                          aleemirfan672@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={icon1} alt="phone" />
                      <div className="row flex-column m-1">
                        <div className="col sub-main-color">Contect Me</div>
                        <div className="col sub-main-color">
                          +92 3224 753036
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-img col d-flex justify-content-center align-items-center">
                <img src={about} alt="img" />
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h2>Explore my Skills</h2>
                </div>
              </div>
            </div>

            <div className="row text-center">
              <h1>
                My <span>Skills</span>
              </h1>
            </div>

            <div className="m-skills">
            <div className="my-5 py-4">
            <Slider {...settings}>
        <div>
          <img src={sk1} alt="img" />
        </div>
        <div>
          <img src={sk2} alt="img" />
        </div>
        <div>
          <img src={sk3} alt="img" />
        </div>
        <div>
          <img src={sk4} alt="img" />
        </div>
        <div>
          <img src={sk5} alt="img" />
        </div>
        <div>
          <img src={sk6} alt="img" />
        </div>
        <div>
          <img src={sk7} alt="img" />
        </div>
        <div>
          <img src={sk8} alt="img" />
        </div>
        <div>
          <img src={sk9} alt="img" />
        </div>
        <div>
          <img src={sk10} alt="img" />
        </div>
        <div>
          <img src={sk11} alt="img" />
        </div>
        <div>
          <img src={sk12} alt="img" />
        </div>
        <div>
          <img src={sk13} alt="img" />
        </div>
        <div>
          <img src={sk14} alt="img" />
        </div>
        <div>
          <img src={sk15} alt="img" />
        </div>
        <div>
          <img src={sk16} alt="img" />
        </div>
       
      </Slider>
     </div>
            </div>
          </div>
        </section>

        <div className="project py-4" id="project">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-5">
                <h2>Explore Completed Projects</h2>
                <h1>
                  See Some of my <br /> <span>Projects</span>
                </h1>
                <p>
                  By using my professional designing and development skills . I
                  made best websites for businesses . I provide proper client
                  satisfaction with 100% good quality work.
                </p>
                <div className="btn-p">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="star"></div>
                    <Link to="/projects"><button className="btn">Learn More</button></Link>
                    <div className="star2"></div>
                  </div>
                  <span>
                    <div className="bt-g"></div>
                  </span>
                </div>
              </div>
              <div className="col-lg-7 my-2 py-2">
                <Canvas camera={{ fov: 27, position: [0, 0, 4.3] }}>
                  <ambientLight />
                  <Project />
                </Canvas>
              </div>
            </div>
          </div>
        </div>

        <div className="contact" id="contact">
          <div className="container">
            <div className="my-5">
              <div className="row">
                <div className="col-12 logos">
                  <div className="slide-side">
                    <button className="prev" id="prev" onClick={(prev, prevT)}>
                      &#10094;
                    </button>

                    <button className="next" id="next" onClick={(next, nextT)}>
                      &#10095;
                    </button>

                    <div className="slider">
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className={`slide ${
                            index === currentIndex ? "active" : ""
                          }`}
                        >
                          {slide}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ctext">
                    <div className="slider-text">
                      {texts.map((text, index) => (
                        <div
                          key={index}
                          className={`slide ${
                            index === currentIndex ? "active" : ""
                          }`}
                        >
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="text-center">
                    <h2>Get in touch</h2>
                    <h1>
                      Let’s Talk For your <span>Next Projects</span>
                    </h1>
                    <p>
                      Fell free to get in touch . You can easily talk to us 24/7
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <footer>
            <div className="row bg-black py-3">
              <div className="col-12">
                <div className="text-center">
                  &copy; All rights are reserved Made by{" "}
                  <span>Muhammad Aleem</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
