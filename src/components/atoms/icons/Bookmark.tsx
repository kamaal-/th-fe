import { Icon, IconProps } from "@chakra-ui/react";

function Bookmark(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        role={"bookmark"}
        strokeWidth={0.1}
        fill="#ff5900"
        d="M4 4.5A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v13a.5.5 0 0 1-.794.404L10 14.118l-5.206
        3.786A.5.5 0 0 1 4 17.5v-13ZM6.5 3A1.5 1.5 0 0 0 5 4.5v12.018l4.706-3.422a.5.5 0 0 1 .588
        0L15 16.518V4.5A1.5 1.5 0 0 0 13.5 3h-7Z"
      />
    </Icon>
  );
}

export default Bookmark;
