import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WelcomeImg from './Images/WelcomeImg.png';


const Home = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6" id="welcome">
                        <p id="welcome-title">WELCOME TO FVF</p>
                        <p id="welcome-txt">The #1 FUT player comparison tool, helping you create your perfect Ultimate Team.
                            We compare players Pace, Passing, Shooting, Dribbling, Physical and Defence
                            using real time data from FutDB’s player API.</p>
                    </div>
                    <div class="col-md-6" id="welcome-img">
                        <img src={WelcomeImg} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6" id="attributes-img">

                    </div>
                    <div class="col-md-6" id="attributes-txt">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home