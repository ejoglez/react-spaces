import React from "react";
import Info from "./Info"
import CommentsSection from "./CommentsSection"
import Header from "../Common/Header/Header"
import Table from "../Common/Table/Table"
import FriendsList from "./Friends"
import Spotify from "./Spotify";
import "./styles.css"

const profilePic = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tom-jerry-movie-tom-1605689120.jpg?crop=0.536xw:1.00xh;0.221xw,0&resize=480:*'

function Profile(){
    return(
        <div className="main">
            <div className="columnLeft">
                <span><h1>Tommy</h1></span>
                <img src={profilePic} alt='profile-pic'/>
                <span><strong>the Vibe</strong>: Pushin P or whatever the kids are saying nowadays</span>
                <Header text="Contact Me"/>
                    <div className="contact">
                            <p>Email Me</p>
                            <p>Github</p>
                            <p>Linkedin</p>
                            <p>Twitter</p>
                    </div>
                    <br></br>
                <Header text="Interests" />
                <Table />
                <Spotify />
            </div>
            <div className="columnRight">
                <Header text="Details" />
                <Info />
                <Header text="Friends List" />
                <FriendsList />
                <Header text="Comment Section"/>
                <br></br>
                <CommentsSection />
            </div>
        </div>
    )
}

export default Profile;