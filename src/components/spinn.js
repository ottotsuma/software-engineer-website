import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";
import Blog from "./../assets/blog.png";
import Bug from "./../assets/bug.jpg";
import Dob from "./../assets/dob.png";
import Todo from "./../assets/todo.jpg";
import Weather from "./../assets/weather.png";

const color1 = "#202040"  
const color2 = "#202060"
const color3 = "#602080"
const color4 = "#b030b0" 

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 500, background: color3 }}>
          <h4>Munchify</h4> <p>2020 September Mobile 14 days</p>{" "}
          <p>
            This was a group full-stack mobile app built in react-native. I was
            the tech lead and responsible for keeping the project on track,
            enforce workflows make decisions to keep moving forward.
          </p>
          <img className="Screen-Shot" src={Munchify} alt="Screen-Shot" />
          <p>Click <a href = "https://play.google.com/store/apps/details?id=com.ottotsuma.restaurantnativeapp" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>The Secret Box</h4> <p>2020 August OSS/PWA 4 days</p>
          <p>
            This progressive web app started as a solo project to show off a MVP
            I could create alone in a few days and turned into an ongoing OSS
            project that I maintain.
          </p>
          <img className="Screen-Shot" src={Secret} alt="Screen-Shot" />
          <p>Click <a href = "https://secretbox.netlify.app/" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Recipes</h4> <p>2020 January ~ Web application ~ 2 days</p>
          <p>
            This web app was crafted using react to combat the problem we all
            have finding recipes using ingredients you currently have.
          </p>
          <img className="Screen-Shot" src={Food} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsumarecipes.netlify.app/" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Monster Search</h4> <p>2020 February Web 9 days</p>{" "}
          <p>
            This application was in response to a friends request for a monster
            spell searching app for their hobby.
          </p>{" "}
          <img className="Screen-Shot" src={Monster} alt="Screen-Shot" />
          <p>Click <a href = "https://monsterpwa.web.app/" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Joker</h4> <p>2020 February Web 5 days</p>{" "}
          <p>
            This application was made for RakutenAPI night. The application was made in VueJs and made of us Rakuten Rapid API service. 
          </p>{" "}
          <img className="Screen-Shot" src={Joker} alt="Screen-Shot" />
          <p>Click <a href = "https://cc13-rakutenapi-staging.herokuapp.com/home" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>DOB-Finder (PWA)</h4> <p>2020 April Web 1 day</p>{" "}
          <p>
            This application was made for Techtalk night. The application was made in to show off how easy it is to make any application a PWA and how it could be helpful for your bussiness. 
          </p>{" "}
          <img className="Screen-Shot" src={Dob} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsuma.github.io/DOB-finder/html2.html" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Weather</h4> <p>2020 March Web 1 day</p>{" "}
          <p>
            This application was made for my personal desk top, to show me the weather when I wake up in the morning, it was made using API's and the location from your browser.  
          </p>{" "}
          <img className="Screen-Shot" src={Weather} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsuma.github.io/Weather/weather.html" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Bug Tracker</h4> <p>2020 February Web 1 day</p>{" "}
          <p>
            This application was made to track bugs on the small projects at Digital Hearts as the client computers cannot be connected to the internet.  
          </p>{" "}
          <img className="Screen-Shot" src={Bug} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsuma.github.io/BugTracker/BugTracker.html" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>To Do</h4> <p>2020 March Web 1 day</p>{" "}
          <p>
            A small to do app made for Code Chrysalis during the pre-course.  
          </p>{" "}
          <img className="Screen-Shot" src={Todo} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsuma.github.io/todo.html" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Blog</h4> <p>2019 June Web Ongoing</p>{" "}
          <p>
            A blog website for pratice. 
          </p>{" "}
          <img className="Screen-Shot" src={Blog} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsuma.github.io/Home.html" target = "_blank">here</a> to be taken to the app.</p>
        </div>
        <div style={{ height: 500, background: color3 }}>
          <h4>Game Calc</h4> <p>2019 June Web 1 day</p>{" "}
          <p>
            A calculator for a game. 
          </p>{" "}
          <img className="Screen-Shot" src={Blog} alt="Screen-Shot" />
          <p>Click <a href = "https://ottotsuma.github.io/calchtml.html" target = "_blank">here</a> to be taken to the app.</p>
        </div>
      </ItemsCarousel>
    </div>
  );
};
