import React from "react";
import logo from "./../assets/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pdf from "./CV.pdf";
import Jap from "./Jap.pdf";
import Spin from "./spinn";

function home() {
  return (
    <div className="App">
      <h1 className="Title">ダラー・ショーン - FRONT END WEB DEV</h1>
      <div className="About">
        <div className="Tech">
          <h4>Technical Skills</h4>
          <p>
            JavaScript, Ruby, Java, React-native, React.js, Vue.js, PWA,
            Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS, SaaS,
            Bootstrap, Latex/Overleaf, VBA
          </p>
        </div>
      </div>
      <h3>Projects</h3>
      <Spin />
      {/* <img className="Logo" src={logo} alt="Logo" /> */}
      <div className="Container">
        <div className="Top">
          <div className="Inner-Container">
            {/* 創造的思考、問題解決力、教育、分析能力、吸収力と忍耐力 */}
          </div>
          <div className="Inner-Container">{/* Nothing */}</div>
        </div>
        <div className="Bottom">
          <div className="Inner-Container">
            <h2>Work History</h2>
            <div>
              <h4>Video Game Debugger</h4> 2019 Nov - present Digital Hearts
              Tokyo, JPN – Thoroughly checked though video games for bugs and
              incorrect English. – Corresponded with clients both small and
              large. – Coordinated with clients to avoid copyright infringement.
              • <h4>Tech Support</h4> 2019 July - present Planet Works Tokyo,
              JPN – Corresponded with English speaking customers in Japan to
              resolve hardware issues. – Achieved 100 percent positive customer
              response. – Adapted quickly to customer demand. •{" "}
              <h4>Science Teacher</h4> 2017 Jul - 2018 Jul Wiltshire Department
              of Education Wilts, ENG – Created the Physics course after the new
              government changes to education in 2018. – Implemented
              personalised learning strategies in the Science department. –
              Mentored students though the Duke of Edinburgh. •{" "}
              <h4>Teaching Assistant</h4>
              2015 Sept - 2016 Sept Wiltshire Department of Education Wilts, ENG
              – Taught students with different backgrounds and disabilities. –
              Motivated students during their hardest moments. – Fostered a
              growth mindset and safe learning envrioment. •{" "}
              <h4>Technical Sales Engineer</h4>
              2015 Feb - 2015 Sept Simplex turbulo Wilts, ENG – Furthered
              relations with international customers. – Reverse-engineered blue
              prints for large shipping engines. – Streamlined spring inspection
              process. • <h4>Technical Assistant</h4> 2014 Jul - 2015 Feb
              Sarum-Hydraulics Wilts, ENG – Engineered a portable microscope
              that works with your smartphone. – Consulted with clients to
              understand their problems and develop solutions. – Coordinated
              with clients to avoid copyright infringement.
            </div>
          </div>
          <div className="Inner-Container">
            <h2>Education</h2>
            <div>
              <h4>Code Chrysalis</h4>
              <p>2020 July - 2020 Sept Coding Bootcamp Tokyo, JPN</p>
              <h4>ARC Tokyo Language School</h4>{" "}
              <p>2018 Aug - 2019 Jan Japanese Language Tokyo, JPN</p>{" "}
              <h4>Southampton University</h4>{" "}
              <p>
                2016 Sept - 2017 July BA Teaching (Science) Southampton, ENG
              </p>{" "}
              <h4>University of Portsmouth</h4>{" "}
              <p>
                2011 Sept - 2014 Sept BSc (Hons), Applied Physics (2:1)
                Portsmouth, ENG
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
