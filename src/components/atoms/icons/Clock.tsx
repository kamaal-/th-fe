import { Icon, IconProps } from "@chakra-ui/react";

function Clock(props: IconProps) {
  return (
    <Icon {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path role="clock" d="M11 8v5h5" />
      </g>
    </Icon>
  );
}

export default Clock;
