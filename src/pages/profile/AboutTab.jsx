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

const formatDate = (isoDate) => {
    if (!isoDate) {
      return null; // or an appropriate fallback value
    }
  
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      return null; // Invalid date format, return null or a fallback value
    }
  
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
  
    // Pad single-digit day and month with leading zero
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    // Return formatted date string
    return `${formattedDay}/${formattedMonth}/${year}`;
  };
const About = (props) => {

    let user = props.user;  
    let personalInfo = user?.personalInfo || {};

    return (
        <div className={`AboutContainer ${props.activeKey === "2" ? 'active' : ''}`}>
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
                        <span class="Info">{formatDate(personalInfo?.dateofBirth)}</span>
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
                        <span class="Info">{personalInfo?.biography}</span>
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
      </div>

    );
  };
  export default About;