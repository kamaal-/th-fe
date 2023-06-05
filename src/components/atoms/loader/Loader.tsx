import "./loader.sass";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div role="loader" className="loader__wrapper">
      <motion.div
        animate={{ rotateY: 180 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="loader"
      >
        <div className="loader__panel">
          <img width="100%" src="./src/assets/logo.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
}

export default Loader;
