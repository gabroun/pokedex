import React from "react";
import * as S from "./styles";
import { Link } from "gatsby";

const Toolbar = ({ currentPage, numOfPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;
  const prevPage =
    currentPage - 1 === 1 ? `/pokemons` : `/pokemons/${currentPage - 1}`;
  const nextPage = `/pokemons/${currentPage + 1}`;
  return (
    <S.Toolbar className="toolbar">
      {!isFirst && (
        <Link to={prevPage} rel="prev" className="toolbar-prev" role="link">
          ←
        </Link>
      )}
      {Array.from({ length: numOfPages }, (_, i) => (
        <Link
          className="toolbar-number"
          key={`pagination-number${i + 1}`}
          to={`/${i === 0 ? "pokemons" : `pokemons/${i + 1}`}`}
          role="link"
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next" className="toolbar-next" role="link">
          →
        </Link>
      )}
    </S.Toolbar>
  );
};

export default Toolbar;
