import { UI } from "../../../@types";
import { AnimatePresence, motion } from "framer-motion";
import Content from "../content/Content.tsx";
import { useMemo } from "react";

type Props = {
  data: Array<UI.IPodcast>;
  loading: boolean;
};

function ContentList({ data, loading }: Props) {
  const variants = useMemo(
    () => ({
      enter: {
        transition: { staggerChildren: 5, delayChildren: 2 },
      },
      exit: {
        transition: { staggerChildren: 1, staggerDirection: -1 },
      },
    }),
    []
  );

  return (
    <AnimatePresence>
      <motion.div role="content-list" variants={variants}>
        {data.map((d) => (
          <Content key={d.id} podcast={d} loading={loading} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default ContentList;
