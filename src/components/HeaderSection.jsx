
import React from "react";
import styled from "styled-components";
import { FaFilePdf } from "react-icons/fa";

const HeaderSectionContainer = styled.div`
  background-color: #F5F5F5; /* Light background */
  padding: 50px 0;
  text-align: center;
  margin-left: 11%;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

const HeaderDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
`;

const HighlightText = styled.span`
  color: #FD6114; /* Purple highlight for "PDF" */
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  svg {
    font-size: 4rem;
    margin: 0 15px;
    color: #800080;
  }
`;

const HeaderSection = () => {
  return (
    <HeaderSectionContainer>
      <HeaderTitle>
        Welcome to <HighlightText>Chat PDF</HighlightText>
      </HeaderTitle>
      <HeaderDescription>
        Easily upload your{" "}
        <span style={{ color: "#FF6347", fontWeight: "bold" }}>PDF files</span>{" "}
        and{" "}
        <span style={{ color: "#FF6347", fontWeight: "bold" }}>interact</span>{" "}
        with them like never before.
      </HeaderDescription>
      {/* <IconContainer>
        <FaFilePdf />
      </IconContainer> */}
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
