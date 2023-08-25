
import { SimpleRope, Stage } from '@pixi/react';
import { Point } from 'pixi.js';

// https://pixijs.io/pixi-react/components/SimpleRope/
export const SnekExample = () => {
  return (
    <Stage width={500} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <SimpleRope
        points={[
          new Point(0, 150),
          new Point(100, 100),
          new Point(150, 150),
          new Point(200, 100),
          new Point(400, 150)
        ]}
        image="https://pixijs.io/pixi-react/img/snake.png" />
    </Stage>
  );
}