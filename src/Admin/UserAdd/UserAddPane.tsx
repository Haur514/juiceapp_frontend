import React, { useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./UserAddPane.css";

const addUser = async (userId, displayName, attribute) => {

  let data = {
    name: userId,
    displayName: displayName,
    attribute: attribute
  }
  const response = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/member/add`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }
  );
  console.log(response);
};

function UserAddPane() {
  const [userId, setUserId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [attribute, setAttribute] = useState("teature");
  return (
    <div className="UserAddPane">
      <table>
        <tr>
          <td className="caption">アイコン</td>
          <td></td>
        </tr>
        <tr>
          <td className="caption">ID</td>
          <td>
            <input
              type="text"
              name="name"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td className="caption">表示名</td>
          <td>
            <input
              type="text"
              name="displayName"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td className="caption">属性</td>
          <td>
            <select
              name="new-user-attribute"
              defaultValue="teature"
              value={attribute}
              onChange={(event) => setAttribute(event.target.value)}
            >
              <option value="teature">Teature</option>
              <option value="m2">M2</option>
              <option value="m1">M1</option>
              <option value="b4">B4</option>
            </select>
          </td>
        </tr>
      </table>
      <label>
        <Button
          color="gray"
          onClick={() => {
            console.log("OK");
          }}
          fontColor="white"
        >
          キャンセル
        </Button>
      </label>
      <label>
        <Button
          color="blue"
          onClick={() => {
            console.log(userId);
            console.log(displayName);
            console.log(attribute);
            addUser(userId, displayName, attribute);
          }}
          fontColor="white"
        >
          追加
        </Button>
      </label>
    </div>
  );
}

export default UserAddPane;
