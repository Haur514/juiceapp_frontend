import React, { useEffect, useRef, useState } from "react";
import internal from "stream";
import { isPropertySignature } from "typescript";
import { useGetElementProperty } from "./../../../customhook/useGetElementProperty"
import './ItemCard.css'
import styled from "styled-components";

interface Props {
  color: string;
  name:string;
  item:any;
  onClick: () => void;
  imgSrc: string;
  width: string;
}



const ItemCard: React.FC<Props> = ({ 
    name,
    onClick, 
    imgSrc,
    item,
    width
  }) => { 

  const targetRef = useRef<HTMLInputElement>(null);

  const { getElementProperty } =
    useGetElementProperty<HTMLDivElement>(targetRef);

  const [imgHeight,setImgHeight] = useState(getElementProperty("height")*0.8-32);

  useEffect(() =>{
    setImgHeight(getElementProperty("height")*0.8-32);
  },[])

  return (
    <ItemCardPane
      onClick={onClick}
      ref={targetRef}
    >
    <img 
      src={imgSrc}
      width={imgHeight}
      height={imgHeight}
    ></img>
    <span>{name+" "+item.sellingPrice+"円"}</span>
    </ItemCardPane>
  );
}

const ItemCardPane = styled.button`
  background-color:#cabda1;
  padding:1rem;
  display:grid;
  border:0px;
  border-radius: 10px;
  grid-template-columns: 100%;
  grid-template-rows: 80% 20%;
  font-size: 1.5em;
  margin-left:0.5em;
  margin-right:0.5em;
  margin-top:0.5em;
  margin-bottom: 0.5em;
  flex-shrink: 0;
  font-size: 1.2em;
`

export default ItemCard;