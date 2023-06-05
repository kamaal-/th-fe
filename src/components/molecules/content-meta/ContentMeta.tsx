import { Text } from "@chakra-ui/react";
import "./content-meta.sass";
type Props = {
  name: string | undefined;
  date: string | undefined;
};

function ContentMeta({ name = "", date = "Now" }: Props) {
  return (
    <div>
      <Text as={"p"} className="meta__title">
        {name}
      </Text>
      <Text as={"span"} className="meta__subtitle">
        {date}
      </Text>
    </div>
  );
}

export default ContentMeta;
