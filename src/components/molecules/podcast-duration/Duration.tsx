import { ClockIcon } from "../../atoms/icons";
import "./duration.sass";

type Props = {
  length: number | undefined;
};

function Duration({ length = 0 }: Props) {
  return (
    <div className="duration">
      <ClockIcon boxSize={"1rem"} />
      <span className="duration__text">{`${(length / 60).toFixed(0)}m`}</span>
    </div>
  );
}

export default Duration;
