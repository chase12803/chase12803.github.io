import { motion } from "framer-motion";

const letterAnimations = {
  default: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Name = () => (
  <div className="h-min w-min p-1">
    <motion.div
      className="name-letter"
      initial="default"
      animate="visible"
      transition={{ staggerChildren: 0.06 }}
    >
      {/* <AnimatedText text="Work&nbsp;in" />
      <AnimatedText text="Progress" /> */}
      <AnimatedText text="Chase" />
      <AnimatedText text="Carstensen" />
    </motion.div>
  </div>
);

const AnimatedText = ({ text }) => (
  <div>
    {/* Splits the given text into an array and animates each letter individually */}
    {text.split("").map((letter, id) => (
          <motion.span
            // React gets mad if each element of a list doesn't have a unique key
            key={id}
            variants={letterAnimations}
            transition={{ duration: 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
  </div>
);

export default Name;
