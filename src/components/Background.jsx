import { Environment, Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { useRef } from "react";

import * as THREE from "three";
import { RGBELoader } from "three-stdlib";

useLoader.preload(RGBELoader, "/environments/venice_sunset_1k.hdr");

export const Background = (props) => {
  return (
    <>
      <Environment files={"/environments/venice_sunset_1k.hdr"}>
        <Sphere
          scale={[100, 100, 100]}
          rotate={[Math.PI, Math.PI / 2, 0]}
        ></Sphere>
      </Environment>
    </>
  );
};
