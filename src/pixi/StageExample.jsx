import { Stage } from '@pixi/react';
import { ParticleContainerExample } from './componentExamples/ParticleContainerExample';

export const StageExample = () => {
  return (
    <div style={{marginTop: '4em'}}>
      <Stage 
        width={500} 
        height={500} 
        options={{ backgroundColor: 0xeef1f5 }}
        >
          <ParticleContainerExample />
      </Stage>
    </div>
  )
}
