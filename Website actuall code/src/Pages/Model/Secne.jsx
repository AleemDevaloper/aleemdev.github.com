
import { Canvas } from "@react-three/fiber";
import { Git } from "./github";
import '../../assets/Styles/Pages/contact.scss'
function Scene() {

  return (
    <div className="git">
      <Canvas camera={{position:[0,0,4], fov: 34}}>
        <ambientLight /> 
        <Git />
      </Canvas>
    </div>
  );
}


export default Scene;
