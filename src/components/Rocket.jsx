import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rocket(props) {
  const { nodes, materials } = useGLTF("./models/rocket/model.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 1.8]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Scene_-_Root"]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Scene_-_Root"]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/rocket/model.gltf");
