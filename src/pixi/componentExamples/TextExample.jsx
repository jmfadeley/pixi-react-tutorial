import { TextStyle, BlurFilter } from 'pixi.js';
import { Text } from '@pixi/react';
import { useMemo } from 'react';

const style = new TextStyle({
  align: 'center',
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 50,
  fontWeight: '400',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#01d27e',
  strokeThickness: 5,
  letterSpacing: 20,
  dropShadow: false,
  dropShadowColor: '#ccced2',
  dropShadowBlur: 0,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
});

export const TextExample = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <Text 
      text="I exist withou  my consent!" 
      anchor={.5}
      filters={[blurFilter]}
      style={style}
    />
  )
}