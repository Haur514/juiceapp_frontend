import React, { useEffect, useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./ItemDelete.css";
import { Toggle } from "../../component/Toggle";

const fetchItemList = async (setItemList) => {
  const inputdata = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/item`,
    {
      method: "GET",
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((items) => {
      setItemList(items);
    });
};

const switchItemActivity = async (id: string, activity: boolean) => {
  let data = {
    id: id,
    activity: activity,
  };
  let response = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/item/setactivity`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  console.log(response);
};

const deleteItem = async (item) => {
  await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/item/delete?name=${item}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
};

function UserAddPane() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchItemList(setItemList);
  }, []);

  return (
    <div className="ItemDelete">
      <table border={1}>
        <tr className="caption">
          <th>アイテム名</th>
          <th>グルーピング</th>
          <th>Active/Inactive</th>
          <th>削除ボタン</th>
        </tr>
        {itemList.map((item) => (
          <tr>
            <th>{item.name}</th>
            <th>{item.grouping}</th>
            <th>
              <Toggle
                toggled={item.active}
                onClick={async () => {
                  await switchItemActivity(item.name, !item.active);
                }}
              ></Toggle>
            </th>
            <th>
              <Button
                color="gray"
                radius="0.5em"
                onClick={async () => {
                  await deleteItem(item.name);
                  await fetchItemList(setItemList);
                }}
                fontColor="white"
              >
                削除
              </Button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserAddPane;
