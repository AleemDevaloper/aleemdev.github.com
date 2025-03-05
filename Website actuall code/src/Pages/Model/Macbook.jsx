import { useGLTF, useTexture} from "@react-three/drei"
// import { useEffect, useState } from "react";
import * as THREE from "three"
function Macbook() {
    let model = useGLTF('./mac.glb')
    let tex = useTexture('./red.png')
    let meshes = {};  // Create an empty object to store the meshes
    model.scene.traverse(e =>{
        meshes[e.name] = e;
    })
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(90);   
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    

  return (
    <group position={[0,-12,46]}>
        <primitive object={model.scene} />
    </group>
  ) 
}

export default Macbook
