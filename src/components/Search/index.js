import React from "react";
import { Search, SearchInput, SearchIcon } from "./search";

export default props => {
  return (
    <Search>
      <SearchIcon>
        <i className="fas fa-search" />
      </SearchIcon>
      <SearchInput
        value={props.value}
        onChange={props.onChange}
        placeholder="Cari surat disini.."
      />
    </Search>
  );
};
