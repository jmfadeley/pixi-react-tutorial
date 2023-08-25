import { Sprite, useTick } from '@pixi/react';
import { useState } from 'react';

let i = 0;
// This is the Bunny that handles its update with
// React hooks more directly.
export const StateSprite = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useTick((delta) => {
    i += 0.05 * delta;
    setX(Math.sin(i) * 100);
    setY(Math.sin(i/1.5) * 100);
    setRotation(-10 + Math.sin(i/10 + Math.PI *2) *10);
  })
  
  return (
    <Sprite
      image='https://pixijs.io/pixi-react/img/bunny.png'
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
      />
  )
}