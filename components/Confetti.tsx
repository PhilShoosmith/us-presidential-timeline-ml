
import React, { useMemo } from 'react';

const CONFETTI_COUNT = 150;
const COLORS = [
  '#FFC700', // Gold
  '#FF0000', // Red
  '#2E3191', // Blue
  '#41BBC7', // Light Blue
  '#FFFFFF', // White
  '#9B5DE5', // Purple
  '#F15BB5', // Pink
  '#00CF98', // Green
];

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="absolute w-2 h-4" style={style}></div>
);

const Confetti: React.FC = () => {
  const confetti = useMemo(() => Array.from({ length: CONFETTI_COUNT }).map((_, index) => {
    const style: React.CSSProperties = {
      left: `${Math.random() * 100}%`,
      top: `${-20 + Math.random() * -80}px`,
      backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      animation: `fall ${3 + Math.random() * 2}s ${Math.random() * 2}s linear forwards`,
      transform: `rotate(${Math.random() * 360}deg)`,
      opacity: Math.random() * 0.5 + 0.5,
    };
    return <ConfettiPiece key={index} style={style} />;
  }), []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[1000]">
      {confetti}
    </div>
  );
};

export default Confetti;