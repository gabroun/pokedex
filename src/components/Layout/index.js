import React from "react";
import GlobalStyles from "@styles/GlobalStyles";
import Header from "@components/Header";
import Seo from "@components/Seo";
const Layout = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
