import { ParticleContainer, Sprite } from "@pixi/react";
import bunny from "../../assets/bunny.png";

// Particles can slow the system down. A few bunnies is nothing while 10,000 rain particles
// can be expensive. If you need this kind of effect, consider VanillaJS.

const position = [ 
  { x: -75, y: -75, angle: 0, id: 1 },
  { x: -20, y: -100, angle: 15, id: 2 },
  { x: 40, y: 0, angle: 25, id: 3 },
  { x: 85, y: 175, angle: 45, id: 4 },
  { x: 105, y: 320, angle: 90, id: 5 },
]
export const ParticleContainerExample = () => {
  return (
    <ParticleContainer 
      position={[150,150]}
      properties={{position: true}}>
        {bunny != null && position.map(entry =>
          <Sprite
            key={`particle-sprite-${entry.id}`}
            anchor={0.5} 
            x={entry.x}
            y={entry.y}
            angle={entry.angle}
            image={bunny}
          />
        )}
    </ParticleContainer>
  )
}