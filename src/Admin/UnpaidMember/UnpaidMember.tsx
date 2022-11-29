import React, { useEffect, useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./UnpaidMember.css";

const fetchMemberList = async (setMemberList) => {
  const inputdata = await fetch(`http://localhost/backend/member`, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((members) => {
      setMemberList(
        members.filter(function(member) {
          return member.umpayedAmount > 0;
        })
      )
    });
};

function UnpaidMember() {

    const [memberList,setMemberList] = useState([])

    useEffect(() => {
        fetchMemberList(setMemberList)
    },[])

  return (
    <div className="UnpaidMember">
        <table border={1}>
            <tr>
                <th>
                    名前
                </th>
                <th>
                    未払金
                </th>
                <th>
                    支払いボタン
                </th>
            </tr>
            {memberList.map(member => 
                <tr>
                    <th>
                        {member.displayName}
                    </th>
                    <th>
                        {member.umpayedAmount}円
                    </th>
                    <th>
                        <Button
                            color="gray"
                            radius="0.5em"
                            onClick={() => {
                                console.log("OK")
                            }}
                            fontColor="white"
                        >
                            支払い完了
                        </Button>
                    </th>
                </tr>
            )}
        </table>
    </div>
  );
}

export default UnpaidMember;
