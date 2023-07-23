import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="black"
          anchorX="left"
          anchorY="bottom"
          fontSize={1}
          maxWidth={10}
          lineHeight={1}
          font="./fonts/DMSerifDisplay-Regular.ttf"
        >
          {title}
          <meshStandardMaterial
            color="black"
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}
      <Text
        color="black"
        anchorX="left"
        anchorY="top"
        fontSize={0.5}
        maxWidth={10}
        font="./fonts/Inter-Regular.ttf"
      >
        {subtitle}
        <meshStandardMaterial
          color="black"
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
