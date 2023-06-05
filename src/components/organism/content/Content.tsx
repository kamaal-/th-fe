import Completed from "../../molecules/completed/Completed.tsx";
import { UI } from "../../../@types";
import { motion, usePresence } from "framer-motion";
import { useMemo } from "react";
import "./content.sass";

type Props = {
  podcast: UI.IPodcast | null;
  loading: boolean;
};

function Content(props: Props) {
  const [isPresent, safeToRemove] = usePresence();

  const variants = useMemo(
    () => ({
      enter: {
        opacity: 1,
        transition: { staggerChildren: 1, delayChildren: 0.2 },
      },
      exit: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }),
    []
  );
  return (
    <motion.section
      role="content"
      whileTap={"tapped"}
      layout={true}
      initial={"exit"}
      onAnimationComplete={() => !isPresent && safeToRemove()}
      /* c8 ignore next */
      style={{ position: isPresent ? "static" : "absolute" }}
      /* c8 ignore next */
      animate={isPresent ? "enter" : "exit"}
      variants={variants}
      className="content"
    >
      <div>{props.podcast?.name}</div>
      <Completed />
    </motion.section>
  );
}

export default Content;
