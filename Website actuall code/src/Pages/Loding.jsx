import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Styles/Pages/loding.scss";
import logo from "../assets/images/logo/logo2.png";
function Loding() {
  return (
    <div>
      <div id="enter">
        <div className="container my-5">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="text-center">
              <img src={logo} alt="logo" />
            </div>

            <div className="text-center">
              <h1>Aleem Developer</h1>
            </div>
          </div>
        </div>
     <div className="d-flex justify-content-center align-items-center">
     <h2>Loading</h2>
     <div className="loading-container mx-2">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
     </div>
       
      </div>
    </div>
  );
}

export default Loding;
