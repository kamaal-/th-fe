import Completed from "../../molecules/completed/Completed.tsx";
import { UI } from "../../../@types";

type Props = {
  podcast: UI.IPodcast | null;
  loading: boolean;
};

function Content(props: Props) {
  return (
    <div role="content">
      <div>{props.podcast?.name}</div>
      <Completed />
    </div>
  );
}

export default Content;
