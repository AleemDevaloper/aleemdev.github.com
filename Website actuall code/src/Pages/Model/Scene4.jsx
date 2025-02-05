
import { Canvas } from "@react-three/fiber";
import '../../assets/Styles/Pages/home.scss'
import { Environment } from "@react-three/drei";
import Macbook from "./Macbook";
import { OrbitControls } from '@react-three/drei';
function Scene4() {

  return (
   
    <div className="macbook">
      <Canvas camera={{fov: 15, position: [0,-10,130]}}>
        <ambientLight /> 
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.1}
          enableZoom={false}
          enableRotate={true}
          rotateSpeed={0.02}
          enablePan={false}
          panSpeed={0.5}
          minDistance={10}
          maxDistance={130}
        />
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr",]}/>
        <Macbook />
        
      </Canvas>
    </div>
     
  );
}


export default Scene4;
