
import React from 'react';
import "./Portfolio.css";
import Card from 'react-bootstrap/Card';
import Pic1 from './images/project1.png';
import Pic2 from './images/project2.png';
import Pic3 from './images/coderef.GIF';
import Pic4 from './images/weather_dash1.gif';
import Pic5 from './images/dayPlanner.GIF';
import Pic6 from './images/note_taker.gif';




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const href1 = "https://zhim57.github.io/safe-trails/";
const href2 = "https://evening-plains-51887.herokuapp.com/";
const href3 = "https://greendog69.github.io/refractor-home-work/";
const href4 = "https://greendog69.github.io/weather-dashboard/";
const href5 = "https://greendog69.github.io/event-scheduler/";
const href6 = "https://note-taker69.herokuapp.com/";



const git1 = "https://github.com/zhim57/safe-trails";
const git2 = "https://github.com/Mssanoko/Project2";
const git3 = "https://github.com/greendog69/refractor-home-work";
const git4 = "https://github.com/greendog69/weather-dashboard";
const git5 = "https://github.com/greendog69/event-scheduler";
const git6 = "https://github.com/greendog69/note_taker69";






const Portfolio = () => (
    <div>
        <h1>Portfolio</h1>
        <hr />

        <Card >
            <Card.Img variant="top" src={Pic1} />
            <Card.Body>
                <Card.Title>Safe Trails</Card.Title>
                <Card.Text>
                    Safe Trails is a simple app that will help you and give you peace of mind when looking to step outside.
                    With Safe Trails we will provide you with COVID-19 numbers of any given state of your choice.
                </Card.Text>

            </Card.Body>

            <div className="button_group">
                <a class="btn btn-outline-info" target="_blank" href={href1} >Go to website</a>

                <a class="btn btn-outline-info" target="_blank" href={git1} >Go to Github</a>
            </div>

        </Card>
        <Card >
            <Card.Img variant="top" src={Pic2} />
            <Card.Body>
                <Card.Title>BINVOICE</Card.Title>
                <Card.Text>
                    this app helps contractors without dedicated financial teams to generate invoices and keep track of clients
                </Card.Text>

            </Card.Body>
            <div className="button_group">
                <a class="btn btn-outline-info" target="_blank" href={href2} >Go to website</a>

                <a class="btn btn-outline-info" target="_blank" href={git2} >Go to Github</a>
            </div>
        </Card>
        <Card >
            <Card.Img variant="top" src={Pic3} />
            <Card.Body>
                <Card.Title>Code Refractor</Card.Title>
                <Card.Text>
                    This  shows refraction of code
                </Card.Text>

            </Card.Body>
            <div className="button_group">
                <a class="btn btn-outline-info" target="_blank" href={href3} >Go to website</a>

                <a class="btn btn-outline-info" target="_blank" href={git3} >Go to Github</a>
            </div>

        </Card>
        <Card >
            <Card.Img variant="top" src={Pic4} />
            <Card.Body>
                <Card.Title>weather dashboard</Card.Title>
                <Card.Text>
                    AS A traveler
                    I WANT to see the weather outlook for multiple cities
                    SO THAT I can plan a trip accordingly
                </Card.Text>

            </Card.Body>
            <div className="button_group">
                <a class="btn btn-outline-info" target="_blank" href={href4} >Go to website</a>

                <a class="btn btn-outline-info" target="_blank" href={git4} >Go to Github</a>
            </div>
        </Card>
        <Card >
            <Card.Img variant="top" src={Pic5} />
            <Card.Body>
                <Card.Title>Day Planner</Card.Title>
                <Card.Text>
                    a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                </Card.Text>

            </Card.Body>
            <div className="button_group">
                <a class="btn btn-outline-info" target="_blank" href={href5} >Go to website</a>

                <a class="btn btn-outline-info" target="_blank" href={git5} >Go to Github</a>
            </div>
        </Card>

        <Card >
            <Card.Img variant="top" src={Pic6} />
            <Card.Body>
                <Card.Title>note taker</Card.Title>
                <Card.Text>
                    AS A user, I want to be able to write and save notes

                    I WANT to be able to delete notes I've written before

                    SO THAT I can organize my thoughts and keep track of tasks I need to complete

                </Card.Text>

            </Card.Body>
            <div className="button_group">
                <a class="btn btn-outline-info" target="_blank" href={href6} >Go to website</a>

                <a class="btn btn-outline-info" target="_blank" href={git6} >Go to Github</a>
            </div>
        </Card>
    </div>
);

export default Portfolio; 