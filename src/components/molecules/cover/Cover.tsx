import "./cover.sass";
import Completed from "../completed/Completed.tsx";
import CoverImage from "../../atoms/cover-image/CoverImage.tsx";
import CoverMeta from "./CoverMeta.tsx";

type Props = {
  uri: string | undefined;
  length: number | undefined;
};

function Cover({ uri }: Props) {
  return (
    <div className="cover" role="cover">
      <CoverImage url={uri} />
      <Completed />
      <CoverMeta length={length} />
    </div>
  );
}

export default Cover;
