import React, { CSSProperties } from 'react';
import { Dice } from './components/Dice';

// function getRandom(min: number, max: number) {
//   return (Math.floor(Math.random() * max - min) + min) * 90;
// }
//
// type LoadingProps = {
//   classNameWrapper?: string;
//   classNameDice?: string;
//   style?: CSSProperties;
//   onClick?: (e: React.MouseEvent) => void;
// };

const Loading = () => {
  // const [style, setStyle] = useState({});
  // const handleClick = () => {
  //   const xRand = getRandom(1, 24);
  //   const yRand = getRandom(1, 24);
  //   setStyle({
  //     transform: `rotateX(${xRand}deg) rotateY(${yRand}deg)`,
  //   });
  // };
  return (
    <>
      <Dice />
    </>
  );
};

export default Loading;
