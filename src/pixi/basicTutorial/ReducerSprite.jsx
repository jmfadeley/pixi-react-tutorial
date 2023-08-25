import { Sprite, useTick } from '@pixi/react';
import { useReducer, useRef } from 'react';

const reducer = (_, { data }) => data;

// This is the Bunny with useReducer and useTick.
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
    <Sprite
      image='https://pixijs.io/pixi-react/img/bunny.png' { ...motion}
      />
  )
}