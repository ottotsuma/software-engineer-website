import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pdf from "./CV.pdf";
import Jap from "./Jap.pdf";
import Spin from "./spinn";
import logo from "./../assets/logo.png";

function home() {
    return (
      <div className="App">
        <h1 className="Title">ダラー・ショーン - FRONT END WEB DEV</h1>
        {/* <div className="ProjectsArea">
          <h4>Projects</h4>
          <Spin />
        </div> */}
        <div className="About">
        <h4>Technical Skills</h4>
          <div className="Tech">
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>JavaScript</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Ruby</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Java</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>React.js</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://miro.medium.com/max/1000/1*ub1DguhAtkCLvhUGuVGr6w.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>React-Native</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Vue.js</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Node.js</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://mdn.mozillademos.org/files/16742/pwa.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>PWA</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://expressjs.com/images/express-facebook-share.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Express</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>MongoDB</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://zdnet2.cbsistatic.com/hub/i/r/2018/04/19/092cbf81-acac-4f3a-91a1-5a26abc1721f/thumbnail/770x578/5d78c50199e6a9242367b37892be8057/postgresql-logo.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Postgres</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>HTML</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>CSS</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Sass</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Bootsrap</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://images.ctfassets.net/nrgyaltdicpt/6gsvc5Ogjmu04I4Miu0uGg/cb1d4391717d2ab8d5e42ede6fb0eef1/overleaf_wide_colour_light_bg.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>Latex/Overleaf</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://i2.wp.com/beatexcel.com/wp-content/uploads/2013/07/vba-logo.png?resize=572%2C217" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>VBA</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contentInner">
              <div id="CardContainer">
                <div id="inner">
                  <div class="card">
                    <img src="https://www.qrry.com/wp-content/uploads/2020/03/test-driven-development-TDD.png" class="cardImg" alt="human" />
                    <div class="container">
                      <h4>TDD</h4>
                      {/* <p>
                        JavaScript, Ruby, Java, React-native, React.js, Vue.js,
                        PWA, Node.js, Express, MongoDB, TDD, Postgres, HTML, CSS,
                        SaaS, Bootstrap, Latex/Overleaf, VBA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Work</h3>
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
