import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/Styles/Pages/about-section.scss";
import Header from "./components/header";
import { Parallax } from "react-parallax";
import bg2 from "../assets/images/bg/bg (2).jpg";
import img from "../assets/images/About/img.png";
function About() {
  return (
    <div>
      <div className="about-section">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="center">
          <Header />
          <Parallax bgImage={bg2} strength={500}>
            <section className="art">
              <div className=" container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h1>
                      A state-of-the-art Liquidity hib built To forge the new
                      Financial frontier
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="exp my-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h1 className="text-main">About Me</h1>
                    <p className="text-white">
                      I'm a software Engineer who build Digital Products
                    </p>
                  </div>
                </div>
                <div className="row px-4">
                  <div className="col-lg-7 d-flex justify-content-center align-items-start flex-column">
                    <h2 className="text-white">Who <span className="text-main">I Am</span></h2>
                    <p className="text-white">
                      My name is Aleem and I'm a passionate software engineer
                      with 3+ years of experience building web applications and
                      services. My journey in tech began when I built my first
                      website at 14, and I've been hooked ever since. I
                      specialize in full-stack development with a focus on
                      React, Node.js, and cloud technologies. I believe in
                      writing clean, maintainable code and creating intuitive
                      user experiences. I specialize in transforming complex
                      design concepts into dynamic, responsive interfaces. I
                      thrive in collaborative settings, solving front-end
                      challenges and optimizing performance to enhance
                      usability. I'm always eager to learn new technologies and
                      tackle challenging problems.
                    </p>
                  </div>
                  <div className="col-lg-5 px-2 py-2 d-flex justify-content-center align-items-center">
                    <img src={img} alt="img" className="about-img" />
                  </div>
                </div>
              </div>
            </section>

            <section className="edu">
              <div className="container my-4">
                <div className="row">
                  <div className="col-12 text-center text-white">
                    <h2 className="text-main">My Education</h2>
                    <p>My Education and Learning Experience</p>
                  </div>
                </div>
                <div className="row px-md-3">
                  <div className="col-lg-4 my-3 my-lg-0 ">
                    <div className="card">
                      <div className="card-body">
                        <h3>
                          University of Engineering and Technology (Lahore)
                        </h3>
                        <p>Bacholuers in Computer Science (BSCS)</p>
                        <p>2025 - 2029</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 my-3 my-lg-0 ">
                    <div className="card">
                      <div className="card-body">
                        <h3>Punjab College (PGC) (Lahore)</h3>
                        <p>Intermediate in Computer Science (ICS)</p>
                        <p>2023-2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 my-3 my-lg-0 ">
                    <div className="card">
                      <div className="card-body">
                        <h3>Course From Great Learning and Udemy</h3>
                        <p>
                          Mastering in Html , CSS, JS, Sass, Bootstrap, React
                          JS,
                        </p>
                        <p>2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact-a py-3">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center text-white">
                    <h2 className="text-main">Contact Me</h2>
                    <p>Feel free to reach out to me</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100094860355614">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/aleem-irfan-071154281/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/AleemDevaloper">
                          <i className="fa fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://api.whatsapp.com/send?phone=+923224752036&text=Hi,%20I%20contacted%20you%20Through%20your%20website.">
                          <i className="fa fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Parallax>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-12 mx-md-4">
                  <p>
                    2025 &copy; All Rights Reserved and Made by{" "}
                    <i>Muhammad Aleem</i>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default About;
