import { HeadphoneIcon } from "../../atoms/icons";
import Duration from "../podcast-duration/Duration.tsx";
import "./cover.sass";
type Props = {
  length: number | undefined;
};

function CoverMeta({ length }: Props) {
  return (
    <div role="cover-meta" className="cover__meta">
      <span className="cover__meta__icon" title={"Podcast"}>
        <HeadphoneIcon />
      </span>
      <Duration length={length} />
    </div>
  );
}

export default CoverMeta;
