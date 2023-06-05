import "./pie.sass";
import { motion } from "framer-motion";

type Props = {
  percentage?: number;
};

function Pie({ percentage = 40 }: Props) {
  return (
    <motion.div
      role="pie"
      initial={{ background: "conic-gradient(#ffa97a 0%, white 0)" }}
      animate={{
        background: `conic-gradient(#ffa97a ${percentage}%, white 0)`,
      }}
      transition={{ delay: 1, duration: 2 }}
      className="pie"
    />
  );
}

export default Pie;
