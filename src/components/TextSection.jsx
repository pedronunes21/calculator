import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX="left"
          anchorY="bottom"
          fontSize={1}
          maxWidth={10}
          lineHeight={1}
          font="./fonts/DMSerifDisplay-Regular.ttf"
        >
          {title}
          <meshStandardMaterial
            color="white"
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}
      <Text
        color="white"
        anchorX="left"
        anchorY="top"
        fontSize={0.5}
        maxWidth={10}
        font="./fonts/Inter-Regular.ttf"
      >
        {subtitle}
        <meshStandardMaterial
          color="white"
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
