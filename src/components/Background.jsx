import { Environment, Sphere } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { Gradient, LayerMaterial } from "lamina"

import * as THREE from "three"
import { RGBELoader } from "three-stdlib"

useLoader.preload(RGBELoader, "/environments/venice_sunset_1k.hdr")
// files={"/environments/venice_sunset_1k.hdr"}
export const Background = () => {

  const colorA = "#0923be"
  const colorB = "#ffad30"
  const start = .2;
  const end = -.5

  return <>
    <Sphere scale={[500,500,500]} rotateY={Math.PI / 2}>
      <LayerMaterial
        color="#fff"
        side={THREE.BackSide}
      >
        <Gradient
          colorA={colorA}
          colorB={colorB}
          axes="y"
          start={start}
          end={end}
        />

      </LayerMaterial>
    </Sphere>
    <Environment resolution={256}>
      <Sphere scale={[100,100,100]} rotate={[Math.PI, Math.PI / 2, 0]}>
        <LayerMaterial
          color="#fff"
          side={THREE.BackSide}
        >
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes="y"
            start={start}
            end={end}
          />

        </LayerMaterial>
      </Sphere>
    </Environment>
    
  </>
}