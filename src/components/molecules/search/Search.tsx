import { GQL } from "../../../@types";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "../../atoms/icons";
import "./search.sass";
type Props = {
  onChange: GQL.SearchUpdateFunc;
};

function Search({ onChange }: Props) {
  return (
    <div className="search">
      <InputGroup>
        <InputLeftElement className="search__icon__wrapper">
          <SearchIcon className="search__icon" boxSize={"1.5rem"} />
        </InputLeftElement>
        <Input
          role="search-input"
          className="search__input"
          onChange={(e) => onChange(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}

export default Search;
