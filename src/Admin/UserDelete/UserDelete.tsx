import React from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./UserDelete.css"

function UserAddPane(){
    const options = [
        { value: 'value1', label: '値1'},
        { value: 'value2', label: '値2'},
        { value: 'value2', label: '値3'},
      ]

    return(
        <div className="UserDelete">
                <label>
                    名前：
                    <input type="text" name="name" />
                </label>
                    <Button
                        color="gray"
                        onClick={() =>{
                            console.log("OK");
                        }}
                        fontColor="white"
                    >
                        キャンセル
                    </Button>
                    <Button
                        color="blue"
                        onClick={() =>{
                            console.log("OK");
                        }}
                        fontColor="white"
                    >
                        削除
                    </Button>
        </div>
    );
}

export default UserAddPane;