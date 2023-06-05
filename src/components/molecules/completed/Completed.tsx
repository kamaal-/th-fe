import { useMemo } from "react";
import Pie from "../../atoms/pie/Pie.tsx";
import "./completed.sass";
type Props = {
  percentage?: number;
};

function Completed({ percentage = 45 }: Props) {
  const percent = useMemo(
    () => (percentage < 0 ? 0 : percentage > 100 ? 100 : percentage),
    [percentage]
  );

  return (
    <div className="completed">
      <Pie percentage={percentage} />
      <span className="completed__text" role="completed">
        {percent}% Completed
      </span>
    </div>
  );
}

export default Completed;
