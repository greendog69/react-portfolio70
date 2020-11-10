import React from 'react';

import Pic from './images/me.jpg'; 
import AboutCard from "./AboutCard";
import Pic1 from './images/port1.jpeg' ; 
import Pic2 from './images/port2.jpeg' ; 
import Pic3 from './images/port3.jpeg' ; 
import Pic4 from './images/port4.jpeg' ;
import Pic5 from './images/port5.jpeg' ; 
import Pic6 from './images/port6.jpeg' ;
import Pic7 from './images/port7.jpeg' ;
import Pic8 from './images/port8.jpeg' ;
import Pic9 from './images/port91.jpeg' ;
import Pic10 from './images/port10.jpeg' ;
import Pic11 from './images/port11.jpeg' ;
import Pic12 from './images/port12.jpg' ;

import Logo1 from './images/logos/heb.jpg' ;
import Logo2 from './images/logos/heb.jpg' ;
import Logo3 from './images/logos/zoo.png' ;
import Logo4 from './images/logos/logo4.png' ;
import Logo5 from './images/logos/logo5.png' ;
import Logo6 from './images/logos/logo6.jpeg' ;
import Logo7 from './images/logos/logo7.jpeg' ;
import Logo8 from './images/logos/logo8.png' ;
import Logo9 from './images/logos/logo9.jpeg' ;
import Logo10 from './images/logos/logo10.jpeg' ;
import Logo11 from './images/logos/logo11.png' ;
import Logo12 from './images/logos/logo12.jpeg' ;
import "./About.css";
const About = () => (
    <div>
        <h1>About Me</h1>
        <hr/>
        <img className="about_image" src={Pic} />
        <p>I was born in St Louis MO. At age nine I moved to israel with my family since my father was offered a
            prestigious spot at the
            Haifa university .My whole life I have been drawn in two directions : to help people and
            a facination with tech. For awhile I thought the two worlds would never colide, so i earned my BA and MA in
            social work.
          </p>

          <p>Luckliy I ran into a wise family member who pointed out all the intersections between helping people and
            working in tech. Ever since I have been looking for my place in the tech world. It has been a long search
            with
            ups and downs.
            IT SEEMS I HAVE NOW FOUND MY PLACE IN THE WORLD OF WEB DEVS.!!!!!

          </p>
          <p>
            I am Friendly Help Desk Technician with 3 years quickly and effectively resolving customers' technical
            issues.
            Dedicated to exceeding client expectations by verifying satisfactory resolutions for every submitted ticket.
            Skilled at maintaining positive communications even in stressful situations. Ready to leverage deep
            technical
            knowledge and amiable personal interactions to provide superlative technical responses.
            More recently developed management skills as department manager
            and am currently studying to be a full stack web developer.
          </p>
          <h2>Past Experince</h2>
          <hr/>
          <div className="about_cards">
            <AboutCard 
              bgImage={Pic1}
              iconImage={Logo1}
              text="I earned  a B.A. in social work in jerusalem, israel."
            
            />
            <AboutCard 
              bgImage={Pic2}
              iconImage={Logo2}
              text="I earned a M.A. social work in jerusalem israel"
            
            />
            <AboutCard 
              bgImage={Pic3}
              iconImage={Logo3}
              text="my first job: training people with special needs to work in zoo"
            
            />
            <div className="break"></div>
            <AboutCard 
              bgImage={Pic4}
              iconImage={Logo4}
              text="I earned my mcsa from microsoft"
            
            />
            <AboutCard 
              bgImage={Pic5}
              iconImage={Logo5}
              text="Online tutorials and productivity tips."
            
            />
            <AboutCard 
              bgImage={Pic6}
              iconImage={Logo6}
              text="MOVED BACK TO U.S.A."
            
            />
            <div className="break"></div>
            <AboutCard 
              bgImage={Pic7}
              iconImage={Logo7}
              text="work as computer tech till returning to usa"
            
            />
            <AboutCard 
              bgImage={Pic8}
              iconImage={Logo8}
              text="first avalable job to support family"
            
            />
            <AboutCard 
              bgImage={Pic9}
              iconImage={Logo9}
              text="not satisfied in retail"
            
            />
            <div className="break"></div>
            <AboutCard 
              bgImage={Pic10}
              iconImage={Logo10}
              text="TIME GOES BYE"
            
            />
            <AboutCard 
              bgImage={Pic11}
              iconImage={Logo11}
              text="google I.T support course"
            
            />
            <AboutCard 
              bgImage={Pic12}
              iconImage={Logo12}
              text="FINALLY FOUND MY FUTURE IN RUTGERS BOOTCAMP."
            
            />

          </div>
    </div>  
);

export default About; 