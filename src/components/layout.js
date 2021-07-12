import React from "react";
import tw from "tailwind-styled-components";

import texture from "../img/texture-bg-2.svg";

export default function Layout({ children }) {
  return (
    <Container style={{ backgroundImage: `url('${texture}')` }}>
      <Content>
        <InnerContent>{children}</InnerContent>
      </Content>
    </Container>
  );
}

const Container = tw.div`
  w-screen
  h-screen
  flex 
  flex-col
  justify-center
  bg-arq-green-100
  content-center 
  items-center
  bg-repeat
  bg-center
  bg-50px
  z-10
`;

const Content = tw.div`
  align-center
  max-w-screen-sm	
`;

const InnerContent = tw.div`
  align-center
`;
