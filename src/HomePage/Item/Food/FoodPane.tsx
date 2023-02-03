import React from "react";
import ItemCard from "../component/ItemCard";
import styled from "styled-components";

function FoodPane(props) {
  return (
    <FoodPaneMain>
      <CategoryName>食品</CategoryName>
      <FoodPaneContent>
        {props.foodList
          .sort((a, b) => -a.salesFigure + b.salesFigure)
          .map((food) => {
            return (
              <ItemCard
                color={props.selected ? "#121258" : "#FFC039"}
                onClick={() => {
                  props.setSelectedItem(food);
                  if (props.selectedMember.name != "") {
                    props.setPopUpVisivility(true);
                  }
                }}
                name={food.name}
                item={food}
                imgSrc={props.logoDictionary[food.name]}
                width="100px"
                key={food.name}
              />
            );
          })}
      </FoodPaneContent>
    </FoodPaneMain>
  );
}

const CategoryName = styled.div`
  background-color: #303030;
  color: greenyellow;
  font-weight: bold;
  font-size: 2em;
`;

const FoodPaneContent = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 100%;
  height: 85%;
  border: solid 1px black;
  margin-bottom: 1em;
  background-color: #787878;
`;

const FoodPaneMain = styled.div`
  height: 20em;
  margin-bottom: 1em;
`;

export default FoodPane;
