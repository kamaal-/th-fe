import { Icon, IconProps } from "@chakra-ui/react";

function Search(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        role="search"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
      />
    </Icon>
  );
}

export default Search;
