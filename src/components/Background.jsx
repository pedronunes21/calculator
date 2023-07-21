import { Environment, Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { useRef } from "react";

import * as THREE from "three";
import { RGBELoader } from "three-stdlib";

// useLoader.preload(RGBELoader, "/environments/venice_sunset_1k.hdr");
// files={"/environments/venice_sunset_1k.hdr"}
export const Background = ({ backgroundColors }) => {
  const start = 0.2;
  const end = -0.5;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  useFrame(() => {
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientEnvRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
  }, []);

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotateY={Math.PI / 2}>
        <LayerMaterial color="#fff" side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes="y" start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere scale={[100, 100, 100]} rotate={[Math.PI, Math.PI / 2, 0]}>
          <LayerMaterial color="#fff" side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes="y" start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};
