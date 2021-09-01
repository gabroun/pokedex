import * as React from "react";
import Layout from "@components/Layout/";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as S from "@styles/index";
import Img from "gatsby-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pokedex.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <S.MainContent className="image-container">
        <Img fluid={data.file.childImageSharp.fluid} alt="pokedex" />

        <div>
          <h2>What pokemon are you looking for?</h2>

          <p>
            Click here to see the <Link to="/pokemons">list of pokemons</Link>
          </p>
        </div>
      </S.MainContent>
    </Layout>
  );
};

export default IndexPage;
