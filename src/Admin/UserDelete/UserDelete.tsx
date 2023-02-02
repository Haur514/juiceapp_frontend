import React, { useEffect, useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./UserDelete.css";
import { Toggle } from "../../component/Toggle";

const fetchMemberList = async (setMemberList) => {
  const inputdata = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/member`,
    {
      method: "GET",
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((members) => {
      setMemberList(members);
    });
};

const switchMemberActivity = async (name: string, activity: boolean) => {
  let data = {
    name: name,
    activity: activity,
  };
  await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/member/setactivity?name=${name}&activity=${activity}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};

const deleteMember = async (member) => {
  let data = {
    name: member,
  };
  await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/member/delete?name=${member}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};

function UserAddPane() {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    fetchMemberList(setMemberList);
  }, []);

  return (
    <div className="UserDelete">
      <table border={1}>
        <tr className="caption">
          <th>ユーザ名</th>
          <th>属性</th>
          <th>Active/InActive</th>
          <th>削除ボタン</th>
        </tr>
        {memberList.map((member) => (
          <tr>
            <th>{member.displayName}</th>
            <th>{member.attribute}</th>
            <th>
              <Toggle
                onClick={async () =>
                  await switchMemberActivity(member.name, !member.active)
                }
                toggled={member.active}
              ></Toggle>
            </th>
            <th>
              <Button
                color="gray"
                radius="0.5em"
                onClick={async () => {
                  await deleteMember(member.name);
                  await fetchMemberList(setMemberList);
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
