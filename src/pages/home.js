import React from "react";
import styled from "styled-components";

import Avatar from "../components/avatar";
import CTAs from "../components/cta";
import Info from "../components/info";
import Layout from "../components/layout";

import circulolistrado from "../img/circulo-listrado.png";
import folhaunica from "../img/folha-unica.png";
import folhadupla from "../img/folha-dupla.png";
import circuloconjunto from "../img/circulo-conjunto.png";
import circulo from "../img/circulo.png";

function App() {
  return (
    <StyledApp>
      <CirculoListrado />
      <FolhaUnica />
      <FolhaDupla />
      <Layout>
        <Avatar />
        <Info />
        <CTAs />
      </Layout>
      <CirculoConjunto />
      <Circulo />
      <CirculoDouble />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CirculoListrado = styled.div`
  background-image: url(${circulolistrado});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: -100px;
  left: -100px;
  min-width: 30vh;
  min-height: 30vh;
`;

const FolhaUnica = styled.div`
  background-image: url(${folhaunica});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: -110px;
  left: -110px;
  min-width: 30vh;
  min-height: 30vh;
`;

const FolhaDupla = styled.div`
  background-image: url(${folhadupla});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: -50px;
  right: -50px;
  min-width: 20vh;
  min-height: 20vh;
`;

const CirculoConjunto = styled.div`
  background-image: url(${circuloconjunto});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: -100px;
  left: -100px;
  min-width: 30vh;
  min-height: 30vh;
`;

const Circulo = styled.div`
  background-image: url(${circulo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: -30px;
  right: -30px;
  min-width: 10vh;
  min-height: 10vh;
`;

const CirculoDouble = styled.div`
  background-image: url(${circulo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: -50px;
  right: -50px;
  min-width: 5vh;
  min-height: 5vh;
`;
