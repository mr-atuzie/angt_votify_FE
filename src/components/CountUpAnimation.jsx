import { useSpring, animated } from "@react-spring/web";

const CountUpAnimation = ({ count, symbol }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: count },
    config: { duration: 600 },
  });

  return (
    <animated.div className="text-3xl font-bold text-blue-600">
      {props.number.to((n) => `${n.toFixed(0)}${symbol ? symbol : ""}`)}
    </animated.div>
  );
};

export default CountUpAnimation;
