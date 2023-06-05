import "./cover.sass";
import Completed from "../completed/Completed.tsx";
import CoverImage from "../../atoms/cover-image/CoverImage.tsx";
import CoverMeta from "./CoverMeta.tsx";
import Bar from "../completed/Bar.tsx";

type Props = {
  uri: string | undefined;
  length: number | undefined;
};

function Cover({ uri, length }: Props) {
  return (
    <div className="cover" role="cover">
      <CoverImage url={uri} />
      <Completed />
      <Bar />
      <CoverMeta length={length} />
    </div>
  );
}

export default Cover;
