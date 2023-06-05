import { Icon, IconProps } from "@chakra-ui/react";

function Share(props: IconProps) {
  return (
    <Icon {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path role="share" d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
        <path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14" />
        <path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
      </g>
    </Icon>
  );
}

export default Share;
