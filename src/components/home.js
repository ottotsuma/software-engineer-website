// Import statements
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cog from "./../assets/cog.png";
import Munchify from "./../assets/512x512.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
// https://pubgnoc.com/
import Video from "./video";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "@react-spring/web";

import Modal from "./elements/modal";
import Tech from "./tech";

import Modal2 from "./elements/modal2";
import Timeline from "./timeline";

import { imageError } from "./color";

// Embed video player of your youtube video!
const YouTubeUrl = "https://www.youtube.com/embed/m86uLnh7OfU";
// 「保存」、「登録」、「完了」、「キャンセル」
const Language = {
  ja: {
    Cancel: "キャンセル",
    name: "ダラー・ショーン",
    projects: "プロジェクト",
    experience: "経験",
    tech: "技術的なスキル",
    blackjack: "ブラックジャック",
    hi: "こんにちは！",
    lang: "English",
    MunchifyDisc: "機械学習があなたにぴったりのレストランを予測！",
    MunchifyTech: "React-Native, NodeJS, MongoDB",
    MunchifyTitle: "Munchify!",
    CGPCDisc: "LOL 日本プロリーグ「LJL」ゲームオーバーレイ",
    CGPCTech: "React, Styled-Components, Firebase, AWS",
    CGPCTitle: "CGPC (LJL)",
    DekkiDisc:
      "DEKKIはゲームを愛する人たちが語り合えるゲームコミュニティプラットフォームです。",
    DekkiTech: "React, Styled-Components, AWS",
    DekkiTitle: "Dekki",
    SecretDisc: "あなたの秘密のためのセーフティボックスです。",
    SecretTech: "React, NodeJS, MongoDB",
    SecretTitle: "秘密の箱",
    RecipesDisc: "空腹感を解消しよう！",
    RecipesTech: "React, PWA, Netlify",
    RecipesTitle: "夫のレシピ",
    pubDisc: "大会ページ",
    pubTech: "Gatsby, React-Spring, AWS",
    pubTitle: "PUBGNOC",
    pubURL: "https://pubgnoc.com/",
    DekkiURL: "https://dekki.com/en/",
    RecipesURL: "https://ottotsumarecipes.netlify.app/",
    SecretURL: "https://secretbox.netlify.app/",
    PokeURL: "https://ottotsuma.netlify.app",
  },
  en: {
    Cancel: "Cancel",
    name: "Shaun Darragh",
    projects: "Projects",
    experience: "Experience",
    tech: "Technical Skills",
    blackjack: "BlackJack",
    hi: "Hi!",
    lang: "日本語",
    MunchifyDisc: "Machine learning predicts your perfect restaurant!",
    MunchifyTech: "React-Native, NodeJS, MongoDB",
    MunchifyTitle: "Munchify!",
    CGPCDisc: "Game overlay for LOL Japan League「LJL」",
    CGPCTech: "React, Styled-Components, Firebase, AWS",
    CGPCTitle: "CGPC (LJL)",
    DekkiDisc: "A community platform for gamers to talk about games they love",
    DekkiTech: "React, Styled-Components, AWS",
    DekkiTitle: "Dekki",
    DekkiURL: "https://dekki.com/en/",
    SecretDisc: "A safety box for your secrets!",
    SecretTech: "React, NodeJS, MongoDB",
    SecretTitle: "The Secret Box",
    RecipesDisc: "Sort out your hunger!",
    RecipesTech: "React, PWA, Netlify",
    RecipesTitle: "Otto's Recipes",
    pubDisc: "Tournament page for PUBGNOC",
    pubURL: "https://pubgnoc.com/",
    pubTech: "Gatsby, React-Spring, AWS",
    pubTitle: "Pubgnoc",
    RecipesURL: "https://ottotsumarecipes.netlify.app/",
    SecretURL: "https://secretbox.netlify.app/",
    PokeURL: "https://ottotsuma.netlify.app",
  },
};

// Main function
function Home() {
  const [playSpring, setPlaySpring] = useState(window.innerWidth > 590);
  React.useEffect(() => {
    const handleResize = () => setPlaySpring(window.innerWidth > 590);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const springGlass = useSpring({
    from: { width: playSpring ? "0%" : "250px" },
    to: { width: playSpring ? "60%" : "250px" },
    config: { clamp: true, mass: 2, tension: 60, friction: 20 },
  });

  // function change(props) {
  //   const win = window.open(props, "_blank");
  //   win.focus();
  // }
  const [lang, setLang] = useState("en");
  function updateLang() {
    if (lang === "en") {
      setLang("ja");
    } else {
      setLang("en");
    }
  }
  const [show, setShow] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  function updateShow() {
    setShow(!show);
  }
  function updateTimeline() {
    setShowTimeline(!showTimeline);
  }

  const [showItem1, setShowItem1] = useState(false);
  function updateShowItem1() {
    setShowItem1(!showItem1);
  }

  const [showItem2, setShowItem2] = useState(false);
  function updateShowItem2() {
    setShowItem2(!showItem2);
  }

  const [showItem3, setShowItem3] = useState(false);
  function updateShowItem3() {
    setShowItem3(!showItem3);
  }

  const [showItem4, setShowItem4] = useState(false);
  function updateShowItem4() {
    setShowItem4(!showItem4);
  }

  const [showItem5, setShowItem5] = useState(false);
  function updateShowItem5() {
    setShowItem5(!showItem5);
  }

  const [showItem6, setShowItem6] = useState(false);
  function updateShowItem6() {
    setShowItem6(!showItem6);
  }
  // const [toggle, setToggle] = useState(true);
  // setTimeout(() => {
  //   setToggle(false)
  // }, 2000);
  // const springReverse = useSpring({
  //   transform: toggle ? "translateX(0px)" : "translateX(-250px)",
  //   config: { clamp: true, mass: 2, tension: 60, friction: 20 },
  // });

  return (
    <GlassWrapper>
      {show && (
        <Modal2
          title={Language[lang].projects}
          insert={<div>Projects was removed</div>}
          close={updateShow}
        />
      )}
      {showTimeline && (
        <Modal2
          title={`${Language[lang].experience}`}
          insert={<Timeline />}
          close={updateTimeline}
        />
      )}
      {showItem1 && (
        <Modal2
          title={Language[lang].MunchifyTitle}
          insert={
            Language[lang].MunchifyDisc +
            "\n Made with: " +
            Language[lang].MunchifyTech
          }
          close={updateShowItem1}
          cancel={Language[lang].Cancel}
        />
      )}
      {showItem6 && (
        <Modal2
          title={Language[lang].pubTitle}
          url={Language[lang].pubURL}
          insert={
            Language[lang].pubDisc +
            "\n Made with: " +
            Language[lang].pubTech
          }
          close={updateShowItem6}
          cancel={Language[lang].Cancel}
        />
      )}
      {showItem2 && (
        <Modal2
          title={Language[lang].CGPCTitle}
          insert={
            Language[lang].CGPCDisc + "\n Made with: " + Language[lang].CGPCTech
          }
          close={updateShowItem2}
          cancel={Language[lang].Cancel}
        />
      )}
      {showItem3 && (
        <Modal2
          title={Language[lang].DekkiTitle}
          url={Language[lang].DekkiURL}
          insert={
            Language[lang].DekkiDisc +
            "\n Made with: " +
            Language[lang].DekkiTech
          }
          close={updateShowItem3}
          cancel={Language[lang].Cancel}
        />
      )}
      {showItem4 && (
        <Modal2
          title={Language[lang].SecretTitle}
          url={Language[lang].SecretURL}
          insert={
            Language[lang].SecretDisc +
            "\n Made with: " +
            Language[lang].SecretTech
          }
          close={updateShowItem4}
          cancel={Language[lang].Cancel}
        />
      )}
      {showItem5 && (
        <Modal2
          title={Language[lang].RecipesTitle}
          url={Language[lang].RecipesURL}
          insert={
            Language[lang].RecipesDisc +
            "\n Made with: " +
            Language[lang].RecipesTech
          }
          close={updateShowItem5}
          cancel={Language[lang].Cancel}
        />
      )}
      <Glass style={springGlass} key={playSpring}>
        {/* <Profile2 style={springReverse}>AAA</Profile2> */}
        <Profile>
          <NameWrap>
            <Video />
            <HiWrapper>
              <ProfileImage
                src="https://ottotsuma.github.io/images/people/05400592ac5ec9dc524baf6939b5609b.jpg"
                alt="Profile"
                onError={imageError}
              />
              <Hi>{Language[lang].hi}</Hi>
            </HiWrapper>
            <Link2
              style={{ fontSize: "1.17em" }}
              onClick={() =>
                Modal({
                  insert: (
                    <div>
                      <iframe
                        title="PWA"
                        width="420"
                        height="315"
                        src={YouTubeUrl}
                      ></iframe>
                    </div>
                  ),
                  cancel: "Close",
                  title: "PWA Video",
                })
              }
            >
              {Language[lang].name}
            </Link2>
            <StyledButton onClick={() => updateLang()}>
              {Language[lang].lang}
            </StyledButton>
          </NameWrap>
          <List>
            <Linkey>
              <LinkImage
                onError={imageError}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
              />
              <AStyled href="https://github.com/ottotsuma" target="_blank">
                GitHub
              </AStyled>
            </Linkey>
            <Linkey>
              <LinkImage
                onError={imageError}
                src="https://www.pinclipart.com/picdir/middle/75-750874_work-experience-svg-png-icon-free-download-356662.png"
                alt="Experience"
              />
              <Link2 onClick={() => updateTimeline()}>
                {Language[lang].experience}
              </Link2>
            </Linkey>
            <Linkey>
              <LinkImage src={Cog} alt="Tech" />
              <Link2
                onClick={() =>
                  Modal({
                    insert: Tech(),
                    cancel: "Close",
                    title: `${Language[lang].tech}`,
                  })
                }
              >
                {Language[lang].tech}
              </Link2>
            </Linkey>
            <Linkey>
              <LinkImage src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Font_Awesome_5_solid_book.svg/896px-Font_Awesome_5_solid_book.svg.png'} alt="Light Novel" />
              <Anchor to="/Monad/1">
                <p>
                  {'Light Novel'}
                </p>
              </Anchor>
            </Linkey>
          </List>
          <Anchor2 to="/Blackjack">
            <p to="/Blackjack" style={{ color: "white" }}>
              {Language[lang].blackjack}
            </p>
          </Anchor2>
        </Profile>
        <Right>
          <HomeImage
            onError={imageError}
            src={
              "https://yt3.ggpht.com/ytc/AAUvwni9DJA2UfBnLyffWzkPZp7yLUJG0RHSf1WXqTEEvg=s176-c-k-c0x00ffffff-no-rj"
            }
            alt="LJL"
            onClick={() => updateShowItem2()}
          />
          <HomeImage
            onError={imageError}
            src={
              "https://pubgnoc.com/static/53b73d6ef9cc0945598a9e490e0d4c22/ed7f8/NOClogo_220119ver-04.png"
            }
            alt="pubgnoc"
            onClick={() => updateShowItem6()}
          />
          <HomeImage
            onError={imageError}
            src={
              "https://pbs.twimg.com/profile_images/1062990176106905601/s7nYomEa_400x400.jpg"
            }
            alt="Dekki"
            onClick={() => updateShowItem3()}
          />
          <HomeImage
            onClick={() => updateShowItem1()}
            src={Munchify}
            alt="Munchify"
          />
          <HomeImage
            src={Secret}
            alt="Secret Box"
            onClick={() => updateShowItem4()}
          />
          <HomeImage src={Food} onClick={() => updateShowItem5()} alt="Food" />
        </Right>
      </Glass>
      <Circle1 />
      <Circle2 />
    </GlassWrapper>
  );
}
export default Home;

const GlassWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Yusei Magic", sans-serif;
`;

const NameWrap = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.div`
border-style: solid;
border-width: 1.5px;
border-color: black;

margin-top: 10px;
color: white;
background: #0d89eb;
display: flex;
justify-content: center;
align-items: center;
width: 53%;
cursor: pointer;
white-space: nowrap;
&:hover {
    background: #2CA8FF;
}
@media screen and (max-width: 650px) {
  padding 0 10px;
}
`;

const Hi = styled.div`
  position: absolute; /* important */
  bottom: 0; /* important */
  max-height: 0; /* important */
  overflow: hidden; /* important */
  transition: max-height 300ms ease-in; /* important */
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  opacity: 0;
  color: white;
`;

const HiWrapper = styled.div`
  &:hover ${Hi} {
    max-height: 50%; /* important */
    bottom: 90%;
    opacity: 1;
    background: #0d89eb;
  }
`;

// https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
const Link2 = styled.div`
  // fake link!
  color: black;
  // background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2ca8ff;
  }
  text-decoration: underline;
`;

const AStyled = styled.a`
  color: black;
  // background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2ca8ff;
  }
`;

const Anchor = styled(Link)`
  // fake link!
  color: black;
  // background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2ca8ff;
  }
  text-decoration: underline;
`;

const Anchor2 = styled(Link)`
@media screen and (max-height: 500px) {
  display: none;
}


// Link that looks like a button!

border-style: solid;
border-width: 1.5px;
border-color: black;


color: white;
background: #0d89eb;
display: flex;
justify-content: center;
align-items: center;
width: 53%;
height: 10%;
cursor: pointer;
white-space: nowrap;
&:hover {
    background: #2CA8FF;
}
  padding 0 10px;
`;

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Linkey = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 40%;
  white-space: nowrap;
`;

const Right = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // flex: 2;
  margin-left: 33%;
  overflow: hidden;
  flex-wrap: wrap;
  @media screen and (max-width: 1263px) {
    margin-left: 250px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    img:nth-child(n+4) {
      display: none;
    }
  }
  @media screen and (max-width: 418px) {
    display: none;
  }
`;

// const Profile2 = styled(animated.div)`
// background: linear-gradient(
//   0deg,
//   rgba(255, 255, 255, 0.9),
//   rgba(255, 255, 255, 0.5)
// );
// min-height: 80vh;
// min-width: 250px;
// display: flex;
// border-radius: 2rem;
// z-index: 3;
// `;

const Profile = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  // flex: 1;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 33%;
  @media screen and (max-width: 1263px) {
    width: 250px;
  }
  // min-width: 250px;
  height: 100%;
  position: absolute;
`;

const Glass = styled(animated.div)`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3)
  );
  min-height: 80vh;
  // width: 60%;
  min-width: 250px;
  display: flex;
  border-radius: 2rem;
  z-index: 3;
  backdrop-filter: blur(2rem);
`;

const Circle1 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 0, 221, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 2;
  // pos
  top: 10%;
  right: 15%;
  // animation-name: ${breatheAnimation};
  // animation-duration: 8s;
  // animation-iteration-count: infinite;
`;

const Circle2 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 0, 221, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 2;
  // pos
  bottom: 5%;
  left: 15%;
`;

const LinkImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;

const HomeImage = styled(animated.img)`
  cursor: pointer;
  width: 25%;
  height: 25%;
  border-radius: 1rem;
  padding: 2px;
  margin: 1rem;
  @media screen and (max-width: 1263px) {
    width: 33%;
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
  :hover {
    transform: scale(1.1);
  }
`;

const ProfileImage = styled.img`
@media screen and (max-height: 400px) {
  display: none;
}
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
