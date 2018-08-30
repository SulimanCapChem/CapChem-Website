import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
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
                    <a className="tooltip" href="contact"><i className="fa fa-paper-plane"> <span
                        className="tooltiptext">Contact Us</span></i></a>
                </div>
                <div className="profile split">
                    <div className="left">

                      
                    </div>
                </div>
            </Grid>
        </div>
    )
  }
}

export default Contact;
