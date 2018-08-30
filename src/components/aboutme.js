import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto',}}>
            <Grid className="landing-grid">
            <div class="icon-bar">
              <a class="tooltip active" href="/"><i class="fa fa-home"> <span class="tooltiptext">Home</span>
              </i></a>
              <a class= "tooltip" href="aboutme"><i class="fa fa-users"> <span class="tooltiptext">The Team</span></i></a>
              <a class= "tooltip" href="#"><i class="fa fa-briefcase"> <span class="tooltiptext">Projects</span></i></a>
              <a class= "tooltip" href="contact"><i class="fa fa-paper-plane"> <span class="tooltiptext">Contact Us</span></i></a>
            </div>
                <div class="profile split">
                    <div class="left">
                    </div>
                    <div class="right light">
                        {/*<h1 class ="profile_name">Suliman Sharif</h1>*/}
                        {/*<img src={require("../images/suliman_sharif_profile.png")} style={{height: '300px'}}/>*/}
                        {/*<p class = 'description_about'>On the engineering side Suliman writes the full stack from the back-end to front-end engineering, user design, and overall architect schema of the android platform as well as the front-end engineering of the web application.*/}
                            {/*<br/>On the business side Suliman oversees legal matters, business development, and marketing strategy.</p>*/}
                    <div id="cubeWrapper">
                            <div class="head">
                              <h1>MEET THE TEAM</h1>
                            </div>
                                <div id="cubes">
                                   <div className="cube p2">
                                <div className="name">
                                    <h1>Suliman Sharif</h1>
                                    <p>Founder</p>
                                </div>
                                <div className="innerBorder"></div>
                                <div className="darken"></div>
                                <div className="content">
                                    <ul>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cube p1">
                                <div className="name">
                                    <h1>Chris Johnson</h1>
                                    <p>Lead Engineerr</p>
                                </div>
                                <div className="innerBorder"></div>
                                <div className="darken"></div>
                                <div className="content">
                                    <ul>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cube p3">
                                <div className="name">
                                    <h1>Tim Cook</h1>
                                    <p>Junior Engineer</p>
                                </div>
                                <div className="innerBorder"></div>
                                <div className="darken"></div>
                                <div className="content">
                                    <ul>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cube p4">
                                <div className="name">
                                    <h1>Rob Wang</h1>
                                    <p>Marketing Strategist</p>
                                </div>
                                <div className="innerBorder"></div>
                                <div className="darken"></div>
                                <div className="content">
                                    <ul>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cube p5">
                                <div className="name">
                                    <h1>Hank McCrimmon</h1>
                                    <p>Business Development</p>
                                </div>
                                <div className="innerBorder"></div>
                                <div className="darken"></div>
                                <div className="content">
                                    <ul>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cube p6">
                                <div className="name">
                                    <h1>Samantha Sanders</h1>
                                    <p>Graphics Designer</p>
                                </div>
                                <div className="innerBorder"></div>
                                <div className="darken"></div>
                                <div className="content">
                                    <ul>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
  }
}

export default About;
