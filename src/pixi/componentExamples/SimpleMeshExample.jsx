
import { SimpleMesh } from '@pixi/react';
import { DRAW_MODES } from 'pixi.js';

const w = 500;
const h = 300;
const state = {
  indices: new Uint16Array([
    0,3,4, 
    0,1,4, 
    1,2,4, 
    2,4,5, 
    3,4,6, 
    4,6,7, 
    4,7,8, 
    4,5,8,
  ]),
  uvs: new Float32Array([
    0, 0,          0.5, 0,          1, 0,
    0, 0.5,        0.5, 0.5,        1, 0.5,
    0, 1,          0.5, 1,          1, 1,
  ]),  
  vertices: new Float32Array([
    0,0,       w/2, 0,       w, 0,
    0,h/2,     w/2, h/2,     w, h/2,
    0,h,       w/2, h,       w, h,
  ])
}

// https://pixijs.io/pixi-react/components/SimpleMesh/
export const SimpleMeshExample = () => {
  return (
    <SimpleMesh
      image='https://pixijs.io/pixi-react/img/mesh-placeholder.png'
      uvs={state.uvs}
      vertices={state.vertices}
      indices={state.indices}
      drawMode={DRAW_MODES.TRIANGLES} />
  );
}