import Completed from "../../molecules/completed/Completed.tsx";
import { UI } from "../../../@types";
import { motion, usePresence } from "framer-motion";
import { useMemo } from "react";
import "./content.sass";
import Cover from "../../molecules/cover/Cover.tsx";

type Props = {
  podcast: UI.IPodcast | null;
  loading: boolean;
};

function Content({ podcast }: Props) {
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
      /* c8 ignore start */
      onAnimationComplete={() => !isPresent && safeToRemove()}
      style={{ position: isPresent ? "static" : "absolute" }}
      animate={isPresent ? "enter" : "exit"}
      /* c8 ignore stop */
      variants={variants}
      className="content"
    >
      <Cover uri={podcast?.image.uri} length={podcast?.length} />
      <div>{podcast?.name}</div>
      <Completed />
    </motion.section>
  );
}

export default Content;
