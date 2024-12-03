import React from "react";
import { useSpring, animated } from "react-spring";

const CountUpAnimation = ({ count }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: count },
    config: { duration: 400 },
  });

  return (
    <>
      <animated.div className="text-xl font-bold">
        {props.number.to((n) => n.toFixed(0))}
      </animated.div>
    </>
  );
};

export default CountUpAnimation;
