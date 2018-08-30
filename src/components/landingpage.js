import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto',}}>
            <Grid className="landing-grid">
                <div className="icon-bar">
                    <a className="tooltip active" href="/"><i className="fa fa-home"> <span
                        className="tooltiptext">Home</span>
                    </i></a>
                    <a className="tooltip" href="aboutme"><i className="fa fa-users"> <span className="tooltiptext">The Team</span></i></a>
                    <a className="tooltip" href="#"><i className="fa fa-briefcase"> <span
                        className="tooltiptext">Projects</span></i></a>
                    <a className="tooltip" href="#"><i className="fa fa-paper-plane"> <span className="tooltiptext">Contact Us</span></i></a>
                </div>
                <div className="profile split">
                    <div className="left">
                    </div>
                    <div className="right light">
                        {/*<h1 class ="profile_name">Suliman Sharif</h1>*/}
                        {/*<img src={require("../images/suliman_sharif_profile.png")} style={{height: '300px'}}/>*/}
                        {/*<p class = 'description_about'>On the engineering side Suliman writes the full stack from the back-end to front-end engineering, user design, and overall architect schema of the android platform as well as the front-end engineering of the web application.*/}
                        {/*<br/>On the business side Suliman oversees legal matters, business development, and marketing strategy.</p>*/}
                    </div>
                </div>
            </Grid>
        </div>
    )
  }
}

export default Landing;
