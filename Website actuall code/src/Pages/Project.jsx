import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/Styles/Pages/project.scss";

import { Parallax } from "react-parallax";
import Header from "./components/header";
import bg3 from "../assets/images/bg/bg (3).jpg";
import web from "../assets/images/About/web.png";
import web1 from "../assets/images/About/web1.png";
import web2 from "../assets/images/About/web2.png";
import web3 from "../assets/images/About/web3.png";
import web4 from "../assets/images/About/web4.png";
import web5 from "../assets/images/About/web5.png";
import web6 from "../assets/images/About/web6.png";
import web7 from "../assets/images/About/web7.png";
import web8 from "../assets/images/About/web8.png";
import web9 from "../assets/images/About/web9.png";
import web10 from "../assets/images/About/web10.png";
import web11 from "../assets/images/About/web11.png";
function Project() {
  return (
    <div className="projects">
      <div className="line1"></div>
      <div className="line2"></div>

      <div className="center">
        <Header />

        <Parallax bgImage={bg3} strength={500}>
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

          <section className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Projects Overview</h3>
                </div>
              </div>
     
              <div className="row border-grey">
                <div className="col-12 text-center">
                  <h2>View Web sites</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7 px-lg-5">
                  <h2>Optima: </h2>
                  <p>
                    Developed a simple, informative website for a company,
                    providing details about its services and mission. Creating a
                    project with HTML, CSS, Sass, JavaScript, and jQuery is a
                    powerful way to build interactive and visually appealing web
                    applications.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, jQuery, Bootstrap</p>
                  <a href="https://aleemdevaloper.github.io/optima.github.com/optima/"><button>View Project</button></a>
              
                </div>
                <div className="col-lg-5">
                  <img src={web} alt="img" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5">
                  <img src={web1} alt="img" />
                </div>
                <div className="col-lg-7 sp">
                  <h2>The Dig Site:</h2>
                  <p>
                    Developed a simple, informative website for a company,
                    providing details about its services and mission. Creating a
                    project with HTML, CSS, Sass, JavaScript, and jQuery is a
                    powerful way to build interactive and visually appealing web
                    applications.{" "}
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, jQuery, Bootstrap</p>
                 
                  <a href="https://aleemdevaloper.github.io/dig.github.com/"> <button>View Project</button></a>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <h2> Thech Shiners:</h2>
                  <p>
                    Developed a simple, informative website for a company,
                    providing details about its services and mission. Creating a
                    project with HTML, CSS, Sass, JavaScript, and React JS is a
                    powerful way to build interactive and visually appealing web
                    applications.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, React JS, Bootstrap</p>
                  <a href="https://aleemdevaloper.github.io/tech-shinners.github.io/"><button>View Project</button></a>
                </div>
                <div className="col-lg-5">

                  <img src={web2} alt="img" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5">
                  <img src={web3} alt="img" />
                </div>
                <div className="col-lg-7 sp">
                  <h2> Auto Drone:</h2>
                  <p>
                    Developed a simple, and beautiful website for auto drone
                    company which provide drones to there clients. Creating a
                    project with HTML, CSS, Sass, JavaScript, and React JS is a
                    powerful way to build interactive and visually appealing
                    web.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, React JS, Bootstrap</p>
                  <a href="https://aleemdevaloper.github.io/Drone/"><button>View Project</button></a>
                  
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <h2>Real State Website</h2>
                  <p>
                    Its a realstate website developed for the company Town tor. Its my second website which i made it contien multipel Pages
                    7 home pages one buy page sell about contact faq login and sign in page and many other pages
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, CSS, JS, Carosul sliders, animations Bootstrap</p>
                  
                  <a href="https://aleemdevaloper.github.io/real-state.github.com/"><button>View Project</button></a>
                </div>
                <div className="col-lg-5">
                  <img src={web4} alt="img" />
                </div>
              </div>


              <div className="row">
                <div className="col-lg-5">
                  <img src={web5} alt="img" />
                </div>
                <div className="col-lg-7 sp">
                  <h2> Teacher Website:</h2>
                  <p>
                    Developed a simple, and beautiful website for Rate My teacher
                    company. its my fisrt fiverr project Creating a
                    project with HTML, CSS, Sass, JavaScript, bootstrap
                    powerful way to build interactive and visually appealing
                    web.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, JS, Bootstrap</p>
                  <a href="https://aleemdevaloper.github.io/rmt.github.com/"><button>View Project</button></a>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <h2>Italian Food</h2>
                  <p>
                    Its a food website developed for the company Italian Food. Its my second fiverr project which i build it is simpel and 
                    singel page website which contain all the details of the company and its services.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, CSS, JS, Bootstrap</p>
                  <a href="https://aleemdevaloper.github.io/italian-food.github.com/"> <button>View Project</button></a>
                 
                </div>
                <div className="col-lg-5">
                  <img src={web6} alt="img" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5">
                  <img src={web7} alt="img" />
                </div>
                <div className="col-lg-7 sp">
                  <h2> Protfolio webiste:</h2>
                  <p>
                    Developed a simple, and beautiful Protfolio website for my client
                    . its my third fiver rproject Creating a
                    project with HTML, CSS, JavaScript, bootstrap
                    powerful way to build interactive and visually appealing
                    web.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, CSS, JS, Bootstrap</p>
                  <a href="https://aleemdevaloper.github.io/project.github.io/"> <button>View Project</button></a>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <h2>Slider</h2>
                  <p>
                    Its my practice project which i made for my practice. its a
                    simple slider which contain multipel images and its slide. it was littel bit difficult for me 
                    but i made it possibel by using my skills. 
                   </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, CSS, JS,</p>
               
                  <a href="https://aleemdevaloper.github.io/slider.github.io/">   <button>View Project</button></a>
                </div>
                <div className="col-lg-5">
                  <img src={web8} alt="img" />
                </div>
              </div>
              {/* Dekstop apps section is start from here  */}
              <div className="row border-grey py-2">
                <div className="col-12 text-center">
                  <h2>View Dekstop Apps</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <h2>Task Management App</h2>
                  <p>
                    This app is very usefull in daily task it is simpel and and
                    very easy to use. This app is developed by using Electron JS
                    and React JS. in this app we can put over daily task timing
                    so it send us notification.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, Electron JS, Bootstrap</p>
                  <a href="https://github.com/AleemDevaloper/todo-app/"> <button>View Project</button></a>
                 
                </div>
                <div className="col-lg-5">
                    <img src={web9} alt="img" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5">
                  <img src={web10} alt="img" />
                </div>
                <div className="col-lg-7 sp">
                  <h2>JARVIS</h2>
                  <p>
                    It is a power full ai app which not just help in daily task
                    it also manage over whole computer it also contain its own
                    operating system where we can store some data and it have a
                    voice command system also. Its show us date time battery details and 
                    also much more details of pc and help in daily task like opening apps and folders.
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>HTML, SCSS, Electron JS, Bootstrap, Open Ai api</p>
                </div>
              </div>

              {/* Mobile apps section  */}

              <div className="row border-grey py-2">
                <div className="col-12 text-center">
                  <h2>View Mobile Apps</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <h2>Gym Mobile App</h2>
                  <p>
                    This app is very usefull for gym going persons this app help users in improving there life style and it contain ai couch and many other features which helps the user for 
                    improving there life style. This app help the user in daily life workouts
                  </p>
                  <h4 className="text-white"> Technologies Used:</h4>
                  <p>Typescript, React Native, Mongo Db , Express Js</p>
                </div>
                <div className="col-lg-5">
                  <img src={web11} alt="img" />
                </div>
              </div>
            </div>
          </section>
        </Parallax>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                2025 &copy; All Rights Reserved and Made by{" "}
                <i>Muhammad Aleem</i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Project;
