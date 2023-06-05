import "./cover-image.sass";

type Props = {
  url: string | undefined;
};

function CoverImage({ url }: Props) {
  return (
    <div
      role="cover-image"
      style={{ backgroundImage: `url(${url})` }}
      className="cover-image"
    />
  );
}

export default CoverImage;
