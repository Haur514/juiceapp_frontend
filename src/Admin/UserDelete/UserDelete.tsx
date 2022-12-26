import React, { useEffect, useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./UserDelete.css"
import { Toggle } from "../../component/Toggle";


const fetchMemberList = async (setMemberList) =>{
    const inputdata = await fetch(`http://localhost/backend/member`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(members => {
        setMemberList(members);
    });
}

const switchMemberActivity = async (name : string, activity : boolean) => {
    await fetch(`http://localhost/backend/member/setactivity?name=${name}&activity=${activity}`,{
        method: 'GET',
        mode: 'cors'
    });
}

const deleteMember = async (member) =>{
    await fetch(`http://localhost/backend/member/delete?name=${member}`,{
        method: 'GET',
        mode: 'cors'
    })
}

function UserAddPane(){
    const [memberList,setMemberList] = useState([]);

    useEffect(() => {
        fetchMemberList(setMemberList);
    },[])

    return(
        <div className="UserDelete">
            <table border={1}>
                <tr className="caption">
                    <th>
                        ユーザ名
                    </th>
                    <th>
                        属性
                    </th>
                    <th>
                        Active/InActive
                    </th>
                    <th>
                        削除ボタン
                    </th>
                </tr>
                {memberList.map(member => 
                    <tr>
                        <th>
                        {member.displayName}
                        </th>
                        <th>
                            {member.attribute}
                        </th>
                        <th>
                            <Toggle
                                onClick={async () => await switchMemberActivity(member.name,!member.active)}
                                toggled={member.active}></Toggle>
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
                )}
            </table>
        </div>
    );
}

export default UserAddPane;