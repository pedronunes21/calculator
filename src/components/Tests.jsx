import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Rocket } from "./Rocket";
import { TextSection } from "./TextSection";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Background } from "./Background";
import { Calculator } from "./Calculator";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { Keyboard } from "./Keyboard";
import { useExpression } from "../contexts/Expression";

export const Tests = () => {

  const { expression, setExpression } = useExpression()

  const backgroundColors = useRef({
    colorA: "#3535cc",
    colorB: "#abaadd",
  });

  const camera = useRef();
  const calculatorRef = useRef();
  const pointer = new THREE.Vector2();
  let raycaster = new THREE.Raycaster();

  function onPointerMove(event) {

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // raycaster.setFromCamera(pointer, camera.current);
    // const intersects = raycaster.intersectObjects(
    //   calculatorRef.current.children
    // );

    // if (intersects.length > 0) {
    //   document.querySelector("body").style.cursor = "pointer"
    // } else {
    //   document.querySelector("body").style.cursor = "default"

    // }

  }

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("mousedown", pressKey);
  window.addEventListener("mouseup", releaseKey);

  let keyClickedIndex;

  function releaseKey() {
    if (keyClickedIndex !== undefined) {
      tl.current.to(calculatorRef.current.children[keyClickedIndex].position, {
        duration: 0.1,
        y: 38.858,
      });
      tl.current.play();
    }
    keyClickedIndex = undefined;
  }

  let expressionString = ""

  function pressKey() {
    raycaster.setFromCamera(pointer, camera.current);
    const intersects = raycaster.intersectObjects(
      calculatorRef.current.children
    );



    if (intersects.length > 0) {
      if (!intersects[0].object.parent.nonClickable) {
        keyClickedIndex = calculatorRef.current.children.findIndex(
          (mesh) => mesh.uuid === intersects[0].object.parent.uuid
        );

        const keyClicked = calculatorRef.current.children[keyClickedIndex]

        tl.current.to(keyClicked.position, {
          duration: 0.1,
          y: 10,
        });
        tl.current.play();

        switch (keyClicked.type) {
          case "number": {
            expressionString += keyClicked.value;
          }
          case "operation": {
            if (expressionString === "") {
              console.log("Erro")
            } else {
              console.log(keyClicked.value)
            }
          }
        }
        console.log(expressionString)
      }
    }
  }

  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.pause();
    // tl.current.to(calculatorRef.current.children[20].position, {
    //   duration: 0.2,
    //   z: calculatorRef.current.children[20].position.z - 50,
    // });
  }, []);


  return (
    <>
      <directionalLight position={[100, 30, 0]} intensity={0.001} />
      {/* <OrbitControls ref={camera} enableZoom /> */}
      <group>
        {/* <Float floatIntensity={20} speed={5} rotationIntensity={0.1}>
          <Rocket position={[0, -20, 200]} rotation={[0, Math.PI, 0]} />
        </Float> */}
        {/* <Calculator calculatorRef={calculatorRef} position={[0, -10, -20]} /> */}
        <Keyboard calculatorRef={calculatorRef} position={[1.5, -10, -28]} />
      </group>
      <group>
        <Background backgroundColors={backgroundColors} />
        <group>
          <PerspectiveCamera
            ref={camera}
            position={[0, 0, 0]}
            rotation={[-0.4, 0, 0]}
            fov={30}
            makeDefault
          />
        </group>
      </group>
    </>
  );
};
