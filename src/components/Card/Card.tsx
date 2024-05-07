"use client";
import { Card } from "@/components/Card/index";
import { useEffect, useState } from "react";
import ArtigosType from "@/types/ArtigoType";

export default function Cards() {
  const [data, setData] = useState<ArtigosType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3080/artigos/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  return (
    <Card.Group>
      {data.map((item) => (
        <Card.Root key={item._id} href={`/artigos/${item._id}`}>
          <Card.Img src={item.imagem} />
          <Card.GroupText>
            <Card.Title as="h1">{item.conteudo}</Card.Title>
            <Card.Content>{item.conteudo}</Card.Content>
            <Card.Footer>
              {new Date(item.data_criacao).toLocaleDateString()}
            </Card.Footer>
          </Card.GroupText>
        </Card.Root>
      ))}
    </Card.Group>
  );
}
