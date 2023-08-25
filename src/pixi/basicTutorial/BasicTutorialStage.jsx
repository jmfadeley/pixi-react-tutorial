import { Container, Stage } from '@pixi/react';
import { StateSprite } from './StateSprite';

export const BasicTutorialStage = () => {
  return (
    <Stage width={300} height={300} options={{ backgroundAlpha: 0.5 }}>
        <Container x={150} y={150}>
          <StateSprite />
        </Container>
      </Stage>
  )
}
