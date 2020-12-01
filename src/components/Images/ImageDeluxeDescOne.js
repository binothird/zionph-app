import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageDeluxeDescOne = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      deluxeDescriptionOne: file(
        relativePath: { eq: "products/deluxe/deluxe-description1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const deluxeDescriptionOne = data.deluxeDescriptionOne.childImageSharp.fluid;

  return (
    <Img
      alt="ZionDeluxeDescriptionOne"
      fluid={deluxeDescriptionOne}
      className={className}
    />
  );
};

export default ImageDeluxeDescOne;
