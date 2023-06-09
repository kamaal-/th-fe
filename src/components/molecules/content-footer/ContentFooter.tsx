import { BookmarkIcon, ShareIcon } from "../../atoms/icons";
import "./content-footer.sass";
function ContentFooter() {
  return (
    <div role="content-footer" className="content-footer">
      <ShareIcon boxSize={"1.2rem"} style={{ marginRight: ".5rem" }} />
      <BookmarkIcon boxSize={"1.5rem"} />
    </div>
  );
}

export default ContentFooter;
