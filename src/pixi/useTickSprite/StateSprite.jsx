import { Container, Stage, Sprite, useTick } from '@pixi/react';
import { useState } from 'react';

let i = 0;
// This is the Bunny that handles its update with React hooks directly. 
// By updating the state, you redraw the sprite to create animation,
// but this is different from an AnimatedSprite.
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
    <Stage width={300} height={300} options={{ backgroundAlpha: 0.5 }}>
      <Container x={150} y={150}>
        <Sprite
          image='https://pixijs.io/pixi-react/img/bunny.png'
          anchor={0.5}
          x={x}
          y={y}
          rotation={rotation}
          />
        </Container>
      </Stage>
  )
}