import React from "react";
import tw from "tailwind-styled-components";

export default function CTAs() {
  const urlServicoRender = "https://api.whatsapp.com/send?phone=5551981909312&text=Ol%C3%A1,%20como%20funciona%20o%20seu%20servi%C3%A7o%20de%20render?%20%F0%9F%98%8A";
  const urlConsultoria = "https://api.whatsapp.com/send?phone=5551981909312&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20consultoria%20online%20%F0%9F%98%8A";
  const urlContato = "mailto:arqbrunaferri@gmail.com";

  return (
    <Container>
      <Button onClick={() => window.open(urlServicoRender, "_blank")}>
        <Paragraph>SERVIÇO DE RENDER</Paragraph>
      </Button>
      <Button onClick={() => window.open(urlConsultoria, "_blank")}>
        <Paragraph>CONSULTORIA ONLINE</Paragraph>
      </Button>
      <Button onClick={() => window.open(urlContato, "_blank")}>
        <Paragraph>ENTRE EM CONTATO</Paragraph>
      </Button>
    </Container>
  );
}

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mt-4
`;

const Button = tw.button`
  w-full
  pt-2
  py-2
  px-10
  mb-4
  flex
  justify-center
  items-center
  uppercase
  font-rockwell
  text-white
  bg-arq-green-300
  button-shadow-arq-green-600
  button-border-arq-green-600
  transition duration-300 ease-in-out 
  hover:bg-arq-green-400
`;

const Paragraph = tw.span`
  text-white
  text-center
  uppercase
  font-rockwell
  pt-2
  text-center
  text-sm sm:text-lg
  text-shadow
`;
