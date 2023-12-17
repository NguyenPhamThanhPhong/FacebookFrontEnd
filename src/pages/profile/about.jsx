import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faLocationDot,
    faHeart,
    faHouse,
    faPhone,
    faEnvelope,
    faCakeCandles
    } 
from "@fortawesome/free-solid-svg-icons";
const About = () => {
    return (
        <div class="AboutContainer">

                <div class="row">
                    <div className="rowcontain">
                        <div className="iconcontain">
                            <FontAwesomeIcon 
                            icon={faCakeCandles}
                            size="lg"
                            style={{color: "#fff"}} />
                        </div>
                        <div className="infocontain">
                        <span class="Info">July 3, 2003</span>
                        <span class="SmallInfo">Date of birth</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div className="rowcontain">
                        <div className="iconcontain">
                            <FontAwesomeIcon 
                            icon={faGraduationCap}
                            size="lg"
                            style={{color: "#fff"}} />
                        </div>
                        <div className="infocontain">
                        <span class="Info">Studies at University of Information Technology</span>
                        <span class="SmallInfo">Started in 2021</span>
                        </div>
                    </div>
                </div>

            <div class="row">
                <div className="rowcontain">
                    <div className="iconcontain">
                    <FontAwesomeIcon 
                    icon={faHouse}
                    size="lg"
                    style={{color: "#fff"}} />
                    </div>
                    <div className="infocontain">
                        <span class="Info">Lives in Ho Chi Minh</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div className="rowcontain">
                    <div className="iconcontain">
                    <FontAwesomeIcon 
                    icon={faLocationDot}
                    size="lg"
                    style={{color: "#fff"}} />
                    </div>
                    <div className="infocontain">
                        <span class="Info"> From Ha Noi</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div className="rowcontain">
                    <div className="iconcontain">
                    <FontAwesomeIcon 
                    icon={faHeart}
                    size="lg"
                    style={{color: "#fff"}} />
                    </div>
                    <div className="infocontain">
                        <span class="Info">In a relationship</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div className="rowcontain">
                    <div className="iconcontain">
                    <FontAwesomeIcon 
                    icon={faPhone}
                    size="lg"
                    style={{color: "#fff"}} />
                    </div>
                    <div className="infocontain">
                        <span class="Info">0374983293</span>
                        <span class="SmallInfo">Mobile</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div className="rowcontain">
                    <div className="iconcontain">
                    <FontAwesomeIcon 
                    icon={faEnvelope}
                    size="lg"
                    style={{color: "#fff"}} />
                    </div>
                    <div className="infocontain">
                        <span class="Info">21521674@gm.uit.edu.vn</span>
                        <span class="SmallInfo">Email</span>
                    </div>
                </div>
            </div>

      </div>

    );
  };
  export default About;