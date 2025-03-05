
import { Canvas } from "@react-three/fiber";
import '../../assets/Styles/Pages/contact.scss'
import { Facebook } from "./facebook";
function Scene2() {

  return (
    <div className="git">
      <Canvas camera={{position:[0,0,4], fov: 34}}>
        <ambientLight /> 
        <Facebook />
      </Canvas>
    </div>
  );
}


export default Scene2;
