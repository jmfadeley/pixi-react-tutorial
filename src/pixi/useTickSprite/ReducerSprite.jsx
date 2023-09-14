import { Container, Stage, Sprite, useTick } from '@pixi/react';
import { useReducer, useRef } from 'react';

const reducer = (_, { data }) => data;

// This is the Bunny with useReducer and useTick. Again, this
// is using state to create animation, and is not AnimatedSprite.
export const ReducerSprite = () => {
  const [motion, updateMotion] = useReducer(reducer);
  const iteration = useRef(0);
  
  useTick((delta) => {
    const i = (iteration.current += 0.05 * delta);
    updateMotion({
      type: 'update',
      data: {
        x: Math.sin(i) * 100,
        y: Math.sin(i / 1.5) * 100,
        rotation: Math.sin(i) * Math.PI,
        anchor: Math.sin(i/2),
      }
    })
  })
  
  return (
    <Stage width={300} height={300} options={{ backgroundAlpha: 0.5 }}>
      <Container x={150} y={150}>
        <Sprite
          image='https://pixijs.io/pixi-react/img/bunny.png' { ...motion}
          />
      </Container>
    </Stage>
  )
}