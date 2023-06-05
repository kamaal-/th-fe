import { Heading } from "@chakra-ui/react";
import "./content-header.sass";

type Props = {
  title: string | undefined;
  subtitle: string | undefined;
};

function ContentHeader({
  title = "Peak Performance: Going From Good to Great with Simon Taudel",
  subtitle = "Subtitle",
}: Props) {
  return (
    <header role="content-header" className={"content-header"}>
      <Heading className="content-header__subtitle" as="h4">
        {subtitle}
      </Heading>
      <Heading className="content-header__title" as="h2">
        {title}
      </Heading>
    </header>
  );
}

export default ContentHeader;
