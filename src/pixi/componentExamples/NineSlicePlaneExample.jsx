import { NineSlicePlane } from "@pixi/react";
import bubble from "../../assets/speech-bubble.png";

// More info: https://pixijs.download/dev/docs/PIXI.NineSlicePlane.html
export const NineSlicePlaneExample = () => {
  return (
    <NineSlicePlane
      anchor={[200, 100]}
      pivot={[200, 100]}
      leftWidth={50}
      topHeight={30}
      rightWidth={60}
      bottomHeight={180}
      width={400}
      height={300}
      x={250}
      y={120}
      image={bubble}
    />
  )
}