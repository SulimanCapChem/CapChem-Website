import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto',}}>
            <Grid className="landing-grid">
                <div className="icon-bar">
                    <a className="tooltip active" href="/"><img src={require("../../../images/home.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Home</span></a>
                    <a className="tooltip" href="aboutme"><img src={require("../../../images/team.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">The Team</span></a>
                    <a className="tooltip" href="#"><img src={require("../../../images/projects.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Projects</span></a>
                    <a className="tooltip" href="#"><img src={require("../../../images/hand.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Pricing</span></a>
                    <a className="tooltip" href="#"><img src={require("../../../images/contact.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Contact Us</span></a>
                </div>
            </Grid>
        </div>
    )
  }
}

export default Contact;
