import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
  return (
    <>
      <Helmet titleTemplate={title ? `${title} - Pokedex` : `%s`}>
        <html lang="en" />
        <title>{title ? title : "Pokedex"}</title>
      </Helmet>
    </>
  );
};

export default Seo;
