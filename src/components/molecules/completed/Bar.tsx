import { motion } from "framer-motion";
import "./completed.sass";
import { useMemo } from "react";

type Props = {
  percentage?: number;
};

function Bar({ percentage = 45 }: Props) {
  const percent = useMemo(
    () => (percentage < 0 ? 0 : percentage > 100 ? 100 : percentage),
    [percentage]
  );
  return (
    <div className="completed__track">
      <motion.div
        role="bar"
        className="completed__bar"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ delay: 1, duration: 3 }}
      />
    </div>
  );
}

export default Bar;
