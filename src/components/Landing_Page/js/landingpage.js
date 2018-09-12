import React, { Component } from 'react';
import { Grid, Cell, Layout, Header } from 'react-mdl';
import '../css/landing_page.css'
class Landing extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto',}}>
            <Layout>
            <Grid className="landing-grid">
                <div className="icon-bar">
                    <a className="tooltip active" href="/"><img src={require("../../../images/home.svg")} style={{width: '40px', height: '40px'}}></img> <span
                        className="tooltiptext">Home</span>
                    </a>
                    <a className="tooltip" href="aboutme"><img src={require("../../../images/team.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">The Team</span></a>
                    <a className="tooltip" href="#"><img src={require("../../../images/projects.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Projects</span></a>
                    <a className="tooltip" href="#"><img src={require("../../../images/hand.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Pricing</span></a>
                    <a className="tooltip" href="#"><img src={require("../../../images/contact.svg")} style={{width: '40px', height: '40px'}}></img> <span className="tooltiptext">Contact Us</span></a>
                </div>
                <Cell col={3}></Cell>
                <Cell col={4} style={{'margin-left': '100px', 'margin-top': '15%'}}>
                    {/*<img src={require("../../../images/capchem_logo.png")} style={{width: '200px', height: '100px'}}></img>*/}
                    <div style={{WebkitFilter: 'saturate(2)'}}>
                        <h2 id="Landing-Title">CapChem
                        </h2>
                        <p>The Missing Link between Academia and Industry</p>
                    </div>
                    <div className="icon design">
                        <img src={require("../../../images/design.svg")}></img>
                        <span>Design</span>
                    </div>
                    <div className="icon product">
                        <img src={require("../../../images/product.svg")} ></img>
                        <span>Product</span>
                    </div>
                    <div className="icon manage">
                        <img src={require("../../../images/manage.svg")} ></img>
                        <span>Consultancy</span>
                    </div>
                </Cell>
                <Cell col={3}></Cell>
            </Grid>
            </Layout>
        </div>
    )
  }
}

export default Landing;
