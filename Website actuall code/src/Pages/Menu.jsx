import "../assets/Styles/Pages/menu.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import Header from "./components/header";
import { Parallax } from 'react-parallax';
import bg from "../assets/images/bg/bg.jpg"

function Menu() {
  return (
    <Parallax bgImage={bg} strength={500} className="menupage">
    <div className="menupage">
      <Header/>

      <div className="container mt-2 py-2">
        <div className="row mt-3 px-2">
          <div className="col-12">
             {/* Home Link  */}
            <ul>
                 {/* Home link  */}
              <li>
                <svg
                  data-v-a622e8e6=""
                  width="20"
                  height="20"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path
                    d="M4.83039 1.00043L8.99988 5.16992L4.83039 9.33941"
                    stroke="#fff"
                    strokeWidth={0.7}
                  ></path>
                  <path
                    d="M7.17565 6.99407L5.3515 5.16992L7.17565 3.34577"
                    stroke="#fff"
                    strokeWidth={0.7}
                  ></path>
                </svg>
              </li>
              <li>
                <Link to="/" className="btn"><h1>Home</h1></Link>
              </li>
            </ul>
             {/* Project Link  */}
            <ul>
                  {/* Projects Link  */}
                  <li>
                <svg
                  data-v-a622e8e6=""
                  width="20"
                  height="20"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "white" }}
                  //   style="visibility: visible; translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, -10.6667px);"
                >
                  <path
                    d="M4.83039 1.00043L8.99988 5.16992L4.83039 9.33941"
                    stroke="#fff"
                    strokeWidth={0.7}
                  ></path>
                  <path
                    d="M7.17565 6.99407L5.3515 5.16992L7.17565 3.34577"
                    stroke="#fff"
                    strokeWidth={0.7}
                  ></path>
                </svg>
              </li>
              <li>
                <Link to="/projects" className="btn"><h1>Projects</h1></Link>
              </li>
            </ul>
             {/* ABout Link  */}
            <ul>
                  {/* About Link  */}
                  <li>
                <svg
                  data-v-a622e8e6=""
                  width="20"
                  height="20"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "white" }}
                  //   style="visibility: visible; translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, -10.6667px);"
                >
                  <path
                    d="M4.83039 1.00043L8.99988 5.16992L4.83039 9.33941"
                    stroke="#fff"
                    strokeWidth={0.7}
                  ></path>
                  <path
                    d="M7.17565 6.99407L5.3515 5.16992L7.17565 3.34577"
                    stroke="#fff"
                    strokeWidth={0.7}
                  ></path>
                </svg>
              </li>
              <li>
                <Link to="/about" className="btn"><h1>About</h1></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
    </Parallax>
  );
}

export default Menu;
