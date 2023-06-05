import { Stack } from "@chakra-ui/react";
import { UI } from "../../../@types";
import Content from "../content/Content.tsx";

type Props = {
  data: Array<UI.IPodcast>;
  loading: boolean;
};

function ContentList({ data, loading }: Props) {
  return (
    <Stack role="content-list">
      {data.map((d) => (
        <Content key={d.id} podcast={d} loading={loading} />
      ))}
    </Stack>
  );
}

export default ContentList;
