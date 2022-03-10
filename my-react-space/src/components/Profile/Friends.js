import React from 'react';

function FriendsList(){
    return(
        <div className="friendsList">
            <div className="friend">
                <p>Eric G</p>
                <a href="https://www.linkedin.com/in/ejoglez/">
                    <img src={require("./friends/eg.jpeg")} alt="userPic" />
                </a>
            </div>
            <div className="friend">
                <p>Ahmed</p>
                <a href="https://www.linkedin.com/in/ahmed-r-j-alsaedi/">
                    <img src={require("./friends/ahmed.png")} alt="userPic" />
                </a>
             </div>
             <div className="friend">
                <p>Fred</p>
                <a href="https://github.com/fburgess">
                    <img src={require("./friends/freddie.png")} alt="userPic" />
                </a>
             </div>
        </div>
    )
}

export default FriendsList;