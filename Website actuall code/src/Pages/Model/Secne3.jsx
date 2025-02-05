
import { Canvas } from "@react-three/fiber";
import '../../assets/Styles/Pages/contact.scss'
import { Skype } from "./skype";
function Scene3() {

  return (
    <div className="git">
      <Canvas camera={{position:[0,0,4], fov: 34}}>
        <ambientLight /> 
        <Skype />
      </Canvas>
    </div>
  );
}


export default Scene3;
