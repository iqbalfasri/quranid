import React from "react";
import styled from "styled-components";

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 30px;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #f2f4fb;
  border: none;
  outline: none;
  width: 100%;
  color: #131313;
`;

const SearchInput = styled.input`
  padding: 0 15px;
  background-color: #f2f4fb;
  border: 1px solid #f2f4fb;
  outline: none;
  width: 100%;
  color: #777777;
  font-weight: bold;

  ::placeholder {
    color: #777777;
  }
`;

const SearchIcon = styled.span`
  border: none;
  flex: 1;
  font-weight: lighter;
  color: #777777;
`;

export { Search, SearchInput, SearchIcon };
