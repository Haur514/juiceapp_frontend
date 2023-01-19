import React, { useEffect, useRef, useState } from "react";
import internal from "stream";
import { isPropertySignature } from "typescript";
import { useGetElementProperty } from "../customhook/useGetElementProperty";
import './ItemCard.css'

interface Props {
  color: string;
  name:string;
  onClick: () => void;
  imgSrc: string;
  width: string;
}



const ItemCard: React.FC<Props> = ({ 
    name,
    onClick, 
    imgSrc,
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
    <button 
      onClick={onClick}
      className="ItemCard"
      ref={targetRef}
    >
    <img 
      src={imgSrc}
      width={imgHeight}
      height={imgHeight}
    ></img>
    <span>{name}</span>
    </button>
  );
}

export default ItemCard;