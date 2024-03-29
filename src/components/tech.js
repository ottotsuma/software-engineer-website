import React from "react";
import styled from "styled-components";
import { imageError } from "./color";

function TechList() {
  return (
    <Wrapper>
      <Techs>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="JavaScript"
                />
                <Container>
                  <Name>JavaScript</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                  alt="TypeScript"
                />
                <Container>
                  <Name>TypeScript</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png"
                  alt="Ruby"
                />
                <Container>
                  <Name>Ruby</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png"
                  alt="Java"
                />
                <Container>
                  <Name>Java</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://cdn.psdrepo.com/images/2x/railsware-blog-important-overhaul-elixir-did-to-erlang-m6.jpg"
                  alt="Elixir"
                />
                <Container>
                  <Name>Elixir</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                  alt="React"
                />
                <Container>
                  <Name>React.js</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                  alt="Next"
                />
                <Container>
                  <Name>Next.js</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://miro.medium.com/max/1000/1*ub1DguhAtkCLvhUGuVGr6w.png"
                  alt="React-Native"
                />
                <Container>
                  <Name>React-Native</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                  alt="Vue"
                />
                <Container>
                  <Name>Vue.js</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                  alt="Node"
                />
                <Container>
                  <Name>Node.js</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://mdn.mozillademos.org/files/16742/pwa.png"
                  alt="PWA"
                />
                <Container>
                  <Name>PWA</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://expressjs.com/images/express-facebook-share.png"
                  alt="Express"
                />
                <Container>
                  <Name>Express</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
                  alt="MongoDB"
                />
                <Container>
                  <Name>MongoDB</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://zdnet2.cbsistatic.com/hub/i/r/2018/04/19/092cbf81-acac-4f3a-91a1-5a26abc1721f/thumbnail/770x578/5d78c50199e6a9242367b37892be8057/postgresql-logo.png"
                  alt="Postgres"
                />
                <Container>
                  <Name>Postgres</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                  alt="HTML"
                />
                <Container>
                  <Name>HTML</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://www.styled-components.com/atom.png"
                  alt="Styled Components"
                />
                <Container>
                  <Name>Styled Components</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://mui.com/static/logo.png"
                  alt="Material UI"
                />
                <Container>
                  <Name>Material UI</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                  alt="CSS"
                />
                <Container>
                  <Name>CSS</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                  alt="Sass"
                />
                <Container>
                  <Name>Sass</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png"
                  alt="Bootstrap"
                />
                <Container>
                  <Name>Bootstrap</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://images.ctfassets.net/nrgyaltdicpt/6gsvc5Ogjmu04I4Miu0uGg/cb1d4391717d2ab8d5e42ede6fb0eef1/overleaf_wide_colour_light_bg.png"
                  alt="Latex/Overleaf"
                />
                <Container>
                  <Name>Latex/Overleaf</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
        <div className="contentInner">
          <CardContainer>
            <Inner>
              <Card>
                <CardImage
                  onError={imageError}
                  src="https://www.aresourcepool.com/wp-content/uploads/2017/09/tdd.png"
                  alt="TDD"
                />
                <Container>
                  <Name>TDD</Name>
                </Container>
              </Card>
            </Inner>
          </CardContainer>
        </div>
      </Techs>
    </Wrapper>
  );
}

function Tech() {
  return <App className="App">{TechList()}</App>;
}

export default Tech;

const App = styled.div`
  // justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  max-width: 100%;
`;

const Name = styled.h4`
  text-transform: capitalize;
  color: black;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  float: left;
  background-color: white;
  height: 100%;
  margin: 1%;
  position: relative;
  width: 130px;
`;

const Wrapper = styled.div`
  background: inherit;
  display: flex;
  justify-content: center;
`;

const Techs = styled.div`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;

const CardContainer = styled.div`
  background-color: transparent;
  overflow: hidden;
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 2px 16px;
`;

const CardImage = styled.img`
  padding: 5px;
  border-radius: 5px 5px 0 0;
  width: 120px;
  height: 100px;
`;
