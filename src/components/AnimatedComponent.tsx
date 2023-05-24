import { FC } from "react";
import { motion, Variants } from "framer-motion";

import { useForm } from "@contexts/FormContext";

interface AnimatedComponentProps {
  children: React.ReactNode;
}

const animations: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
};

export const AnimatedComponent: FC<AnimatedComponentProps> = ({ children }) => {
  const { currentStep } = useForm();

  return (
    <motion.div
      key={currentStep.step}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
