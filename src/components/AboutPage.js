import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';
import './css/App.css'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactGA from 'react-ga';
// ReactGA.pageview(window.location.href);

const AboutPage = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });    // console.log("*******Lazy Load*******");
    ReactGA.event({
        category: 'LandedOn: /AboutPage',
        action: 'Landed On',
    });
    return (
        <ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>

            <Container id="aboutpage" className="marginTop3">
                {/* <h2 className="h1-responsive font-weight-bold text-center">Who am I?</h2> */}
                <p className="text-center w-responsive mx-auto ">
                    Welcome to my portfolio!
                    <br />
                    about me blah blah blah...
                   </p>
                   <hr style={{width: "50%"}}/>

                <Row className="border-bottom">
                    <Col lg="5">
                        <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                            <img className="img-fluid" src={require("../images/backgrounds/test.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="7">
                        <h2 className="font-weight-bold mb-3 p-0"> <Fa icon="image" className="pr-2 fa-camera-retro"></Fa><strong>Photographer</strong></h2>
                        <p className="">
                            blah blah blah fill in later or never
                        </p>

                        <h4 className="tech-info"> My Camera Gear</h4>
                        <ul style={{ marginLeft: '1em' }}>
                            <li className="camera-info-list"> camera 1</li>
                            {/* <li className="camera-info-list"> Canon 5D mark III</li> */}
                        </ul>

                    </Col>
                </Row>

                <Row className="border-bottom">
                    <Col lg="7">
                        {/* <a className="pink-text">
                            <h6 className="font-weight-bold mb-3">
                                <Fa icon="image" className="pr-2"></Fa>Lifestyle </h6>
                        </a> */}
                        <h3 className="font-weight-bold mb-3 p-0">  <Fa icon="image" className="pr-2"></Fa><strong>Traveler</strong></h3>
                        eh

                    </Col>
                    {/* <Col lg="5">
                        <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <img className="img-fluid" src={require("../images/backgrounds/test.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col> */}
                </Row>

                <Row className="border-bottom-tech">
                    {/* <Col lg="5">
                        <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                            <img className="img-fluid"  src={require("../images/backgrounds/test.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col> */}
                    <Col lg="7">
                        <h3 className="font-weight-bold mb-3 p-0 tech-title"><Fa icon="hand-spock-o" className=""></Fa> <strong>Software Engineer</strong></h3>
                        <p>
                            blah
                            Github <a href="https://github.com/eweed001" target="_blank"> Repo </a>
                        </p>

                        <h4 className="tech-info"> This Portfolio was built with</h4>
                        <ul style={{ marginLeft: '1em' }}>
                            <li><a className="tech-info-list" href="https://reactjs.org/" target="_blank"> Reactjs</a> - A JavaScript framework for building user interfaces</li>
                            <li><a className="tech-info-list" href="https://redux.js.org/" target="_blank"> Redux</a> - is a predictable state container for JavaScript apps</li>
                            <li><a className="tech-info-list" href="https://webpack.js.org/" target="_blank"> Webpack</a> - JavaScript module bundler</li>
                            <li><a className="tech-info-list" href="http://babeljs.io/" target="_blank"> Babel</a> - JavaScript transpiler/compiler</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </ScrollAnimation>

    );
}
export default AboutPage;