import React from "react";
import tw from "tailwind-styled-components";

export default function Info() {
  return (
    <Container>
      <Paragraph>quero te ajudar de alguma forma.</Paragraph>
      <Paragraph>o que você está procurando?</Paragraph>
    </Container>
  );
}
const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
`;

const Paragraph = tw.span`
  text-white
  text-center
  text-sm sm:text-md
  text-shadow
  uppercase
  font-rockwell
  pt-2
  mb-2
  px-4
  py-1
  bg-arq-brown-300
`;
