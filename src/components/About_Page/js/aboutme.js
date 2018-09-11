import React, { Component } from 'react';
import { Grid, Cell, Card} from 'react-mdl';
import '../css/about.css';

class About extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto',}}>
            <Grid className="landing-grid">
            <div class="icon-bar">
                <a className="tooltip active" href="/"><img src={require("../../../images/home.svg")} style={{width: '40px', height: '40px'}}></img> <span
                    className="tooltiptext">Home</span>
                </a>
                <a className="tooltip" href="aboutme"><img src={require("../../../images/team.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">The Team</span></a>
                <a className="tooltip" href="#"><img src={require("../../../images/projects.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Projects</span></a>
                <a className="tooltip" href="#"><img src={require("../../../images/hand.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Pricing</span></a>
                <a className="tooltip" href="#"><img src={require("../../../images/contact.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Contact Us</span></a>
            </div>
                <Cell col={1}>
                </Cell>
                <Cell col={1}>
                    <div style={{'display': 'inline-flex'}}>
                        <button id = "Engineering-Button">Engineering Team</button>
                        <button id ="Business-Button">Business Team</button>
                    </div>
                </Cell>
                <Cell col={3} style={{'margin-left': '20px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={require("../../../images/suliman_sharif_profile.png")}></img>
                                    </div>
                                    <h3 className="title">Suliman Sharif</h3>
                                    <span className="post">Founder</span>
                                    <ul className="social">
                                        <li><a href="#" className="fab fa-facebook"></a></li>
                                        <li><a href="#" className="fab fa-twitter"></a></li>
                                        <li><a href="#" className="fab fa-google-plus"></a></li>
                                        <li><a href="#" className="fab fa-linkedin"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell col={3}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={require("../../../images/chris_photo.jpg")}></img>
                                    </div>
                                    <h3 className="title">Chris Johnson</h3>
                                    <span className="post">Software Engineer</span>
                                    <ul className="social">
                                        <li><a href="#" className="fab fa-facebook"></a></li>
                                        <li><a href="#" className="fab fa-twitter"></a></li>
                                        <li><a href="#" className="fab fa-google-plus"></a></li>
                                        <li><a href="#" className="fab fa-linkedin"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell col={3}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={require("../../../images/tim_profile.jpeg")}></img>
                                    </div>
                                    <h3 className="title">Tim Cheek</h3>
                                    <span className="post">Junior Software Engineer</span>
                                    <ul className="social">
                                        <li><a href="#" className="fab fa-facebook"></a></li>
                                        <li><a href="#" className="fab fa-twitter"></a></li>
                                        <li><a href="#" className="fab fa-google-plus"></a></li>
                                        <li><a href="#" className="fab fa-linkedin"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Cell>

            </Grid>
        </div>
    )
  }


}

export default About;
