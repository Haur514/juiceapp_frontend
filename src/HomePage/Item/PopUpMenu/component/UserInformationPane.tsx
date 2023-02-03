import React from "react";

function UserInformationPane({
    selectedMember
}){
    return(
        <div>
            {selectedMember == null ? "hoge" : selectedMember.displayName}さん
        </div>
    );
}

export default UserInformationPane;