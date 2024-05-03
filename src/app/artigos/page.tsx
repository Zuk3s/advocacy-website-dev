import { Card } from "@/components/Card/index";
import Nav from "@/components/NavBar/Nav";
import Logo from "../../../public/images/logo-b.png";
import React from "react";
import Title from "@/components/Content/Title";

export default function Artigo() {
  return (
    <React.Fragment>
      <Nav />
      <Card.GroupText>
        <Title>Artigos</Title>
        <Card.Group>
          <Card.Root href="">
            <Card.Img src={Logo} />
            <Card.GroupText>
              <Card.Title as="h1">
                Artigo uahdauwhduwa adwawdwa dawdadawdaw dawdwdaw dawdw adwwad
              </Card.Title>
              <Card.Content>Texto</Card.Content>
            </Card.GroupText>
          </Card.Root>
          <Card.Root href="">
            <Card.Img src={Logo} />
            <Card.GroupText>
              <Card.Title as="h2">Artigo 2</Card.Title>
              <Card.Content>
                No crepúsculo dourado, a brisa suave acaricia a paisagem, num
                instante fugaz, o tempo parece parar, revelando a miragem da
                natureza em sua plenitude.
              </Card.Content>
            </Card.GroupText>
          </Card.Root>
        </Card.Group>
      </Card.GroupText>
    </React.Fragment>
  );
}
