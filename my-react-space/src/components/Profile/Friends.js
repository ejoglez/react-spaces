import React from 'react';

function FriendsList(){
    return(
        <div className="friendsList">
            <div className="friend">
                <a href="https://www.linkedin.com/in/ejoglez/"><p>Eric</p></a>
                <img src={require("./friends/eg.jpeg")} alt="userPic" />
            </div>
            <div className="friend">
                <a href="https://www.linkedin.com/in/ahmed-r-j-alsaedi/"><p>Ahmed</p></a>
                <img src={require("./friends/ahmed.png")} alt="userPic" />
             </div>
             <div className="friend">
                <a href="https://github.com/fburgess"><p>Freddie</p></a>
                <img src={require("./friends/freddie.png")} alt="userPic" />
             </div>
        </div>
    )
}

export default FriendsList;