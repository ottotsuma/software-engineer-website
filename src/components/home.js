// Import statements
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Munchify from "./../assets/512x512.png";
// import Secret from "./../assets/Group1.png";
// import Food from "./../assets/foodlogo.png";
import Jobcado from "./../assets/jobcado.png";
import JodGig from "./../assets/jod_square_logo.webp";
import JodPro from "./../assets/Logo copy.png";
import JodBoard from "./../assets/jodboard.webp";
import styled, { keyframes, css } from "styled-components";
import { useSpring, animated } from "@react-spring/web";

import Modal from "./elements/modal";
import Tech from "./tech";

import Modal2 from "./elements/modal2";
import Timeline from "./timeline";
import { getTranslation } from "./../translation/translation";
import { imageError } from "./color";

// Embed video player of your youtube video!
const YouTubeUrl = "https://www.youtube.com/embed/m86uLnh7OfU";
// 「保存」、「登録」、「完了」、「キャンセル」

// Main function
function Home() {
  const [circle1Animate, setCircle1Animate] = useState(false);
  const [circle2Animate, setCircle2Animate] = useState(false);


  const projects = [
    {
      src: Jobcado,
      alt: "Jobcado",
    },
    {
      src: JodGig,
      alt: "JodGig",
    },
    {
      src: JodPro,
      alt: "JodPro",
    },
    {
      src: JodBoard,
      alt: "JodBoard",
    },
    {
      src: "https://yt3.ggpht.com/ytc/AAUvwni9DJA2UfBnLyffWzkPZp7yLUJG0RHSf1WXqTEEvg=s176-c-k-c0x00ffffff-no-rj",
      alt: "CGPC",
    },
    {
      src: "https://dekki-production.s3.ap-northeast-1.amazonaws.com/SiteClosureAssets/fix.png",
      alt: "Dekki",
    },
  ];
  {/* https://gig.jodapp.com/login */ }
  {/* https://jodpro.jod.com.sg/login */ }
  {/* https://jobs.jodapp.com/sg/jobs */ }
  {/*
    pubgnoc https://pubgnoc.com/static/53b73d6ef9cc0945598a9e490e0d4c22/ed7f8/NOClogo_220119ver-04.png
    Munchify          
    Secret
    Recipes          
 */}

  const handleClickCircle1 = () => {
    setCircle1Animate(true);
    setTimeout(() => setCircle1Animate(false), 600); // Reset animation
  };
  const [scrollAmount, setScrollAmount] = useState(0);
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleWheel = (event) => {
      event.preventDefault();
      setScrollAmount((prev) => prev + event.deltaY); // Adjust `deltaY` to detect scroll direction and distance
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
  const Circle2SpringProps = useSpring({
    // Animating scale and opacity based on scroll amount
    transform: `scale(${1 + scrollAmount / 1000}) rotate(${scrollAmount / 10}deg)`,
    // opacity: 1 - scrollAmount / 500,
    config: { tension: 300, friction: 15 },

    // Conditionally set from/to based on circle2Animate
    rotate: circle2Animate ? '360deg' : '0deg',

    // Ensuring this only happens when `circle2Animate` is updated
    // reset: circle2Animate, // Reset the animation when `circle2Animate` changes
    // reverse: circle2Animate, // Optional: Reverse the animation if needed when switching states
  });

  const handleClickCircle2 = () => {
    setCircle2Animate(true);
    setTimeout(() => setCircle2Animate(false), 600); // Reset animation
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggleGlass = () => {
    setIsOpen(prevState => !prevState);
  };
  const [playSpring, setPlaySpring] = useState(window.innerWidth > 590);
  React.useEffect(() => {
    const handleResize = () => setPlaySpring(window.innerWidth > 590);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const closeGlass = useSpring({
    // from: { width: isOpen ? (playSpring ? "60%" : "250px") : (playSpring ? "0%" : "0px") },
    // to: { width: isOpen ? (playSpring ? "60%" : "250px") : (playSpring ? "0%" : "0px") },
    width: isOpen ? (playSpring ? "60%" : "250px") : (playSpring ? "0%" : "0px"),
    config: { clamp: true, mass: 2, tension: 60, friction: 20 },
  });
  const [lang, setLang] = useState("en");
  function updateLang() {
    if (lang === "en") {
      setLang("ja");
    } else {
      setLang("en");
    }
  }
  const [showTimeline, setShowTimeline] = useState(false);
  function updateTimeline() {
    setShowTimeline(!showTimeline);
  }

  const [showItem, setShowItem] = useState(null);
  function updateShowItem(item = null) {
    if (item !== showItem) {
      setShowItem(item);
    }
    else {
      setShowItem(null);
    }
  }

  return (
    <GlassWrapper>
      {showTimeline && (
        <Modal2
          title={getTranslation(lang, "experience")}
          insert={<Timeline />}
          close={updateTimeline}
          cancel={getTranslation(lang, "Close")}
        />
      )}
      {showItem && getTranslation(lang, `${showItem}Title`) && (
        <Modal2
          title={getTranslation(lang, `${showItem}Title`)}
          url={getTranslation(lang, `${showItem}URL`)}
          insert={`${getTranslation(lang, `${showItem}Disc`)}\n Made with: ${getTranslation(lang, `${showItem}Tech`)}`}
          close={updateShowItem}
          cancel={getTranslation(lang, "Close")}
        />
      )}
      <Wrap>
        <Profile borderRadiusRight={window.innerWidth > 590 && isOpen}>
          <NameWrap>
            <div>{getTranslation(lang, "name")}</div>
            <HiWrapper>
              <iframe
                title="PWA"
                width="220"
                height="115"
                src={YouTubeUrl}
                loading="lazy"
              ></iframe>
              <Hi>{getTranslation(lang, "hi")}</Hi>
            </HiWrapper>

            <StyledButton onClick={() => updateLang()}>
              {getTranslation(lang, "lang")}
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
                GitHub<span>⧉</span>
              </AStyled>
            </Linkey>
            <Linkey>
              <div style={{ marginRight: "1rem" }}>🏢</div>
              <Link2 onClick={() => updateTimeline()}>
                {getTranslation(lang, "experience")}
                {/* ⛶ */}
              </Link2>
            </Linkey>
            <Linkey>
              <div style={{ marginRight: "1rem" }}>⚙️</div>
              <Link2
                onClick={() =>
                  Modal({
                    insert: Tech(),
                    cancel: `${getTranslation(lang, "Close")}`,
                    title: `${getTranslation(lang, "tech")}`,
                  })
                }
              >
                {getTranslation(lang, "tech")}
              </Link2>
            </Linkey>
            <Linkey>
              <div style={{ marginRight: "1rem" }}>📖</div>
              <Anchor to="/Monad/1">
                <p style={{ margin: 0 }}>
                  {'Light Novel'}
                  {/* 📖 */}
                </p>
              </Anchor>
            </Linkey>
          </List>
          <Anchor2 to="/Blackjack">
            <div>🃏</div>
            <p to="/Blackjack" style={{ color: "white" }}>
              {getTranslation(lang, "blackjack")}
            </p>
          </Anchor2>
        </Profile>
        <Glass style={closeGlass} key={playSpring}>
          <Right>
            {projects.map((project, index) => (
              <HomeImage
                onError={imageError}
                key={project.alt + index}
                src={project.src}
                alt={project.alt}
                onClick={() => updateShowItem(project.alt)}
              />
            ))}
          </Right>
          <GlassButton onClick={toggleGlass}>
            {isOpen ? "<" : ">"}
          </GlassButton>
        </Glass>
      </Wrap>
      <Circle1 animate={circle1Animate} onClick={handleClickCircle1} />
      <Circle2 style={Circle2SpringProps} onClick={handleClickCircle2} />
    </GlassWrapper>
  );
}
export default Home;

const GlassWrapper = styled.div`
overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Yusei Magic", sans-serif;
      font-size: 1vw;
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
  right: 15%;
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
position: relative;
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

const Anchor = styled(NavLink).attrs(() => ({
  activeClassName: 'active',
}))`
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

const Anchor2 = styled(NavLink).attrs(() => ({
  activeClassName: 'active',
}))`
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

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2) rotate(45deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
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

const Right = styled(animated.div)`
  display: flex;
  // flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // flex: 2;
  // margin-left: 33%;
  overflow: hidden;
  flex-wrap: wrap;
  @media screen and (max-width: 1263px) {
    // margin-left: 250px;
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
z-index: 3;
  transition: ${({ borderRadiusRight }) => (borderRadiusRight ? 'none' : 'border-radius 3s ease')};
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.5)
  );
  border-top-right-radius: ${({ borderRadiusRight }) => (borderRadiusRight ? '0' : '2rem')};
  border-bottom-right-radius: ${({ borderRadiusRight }) => (borderRadiusRight ? '0' : '2rem')};
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
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
  font-size: 1rem;

  min-width: 250px;
  height: 100%;
  height: auto;
`;

const Glass = styled(animated.div)`
position: relative;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3)
  );
  min-height: 80vh;
  display: flex;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  z-index: 3;
  backdrop-filter: blur(2rem);
    @media screen and (max-width: 590px) {
    display: none;
  }
`;

const GlassButton = styled.button`
  height: 50px;
  width: 50px;
  align-self: center;
  border-radius: 50%;
  position: absolute;
  right: -30px;
  background: none; 
  // linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)); /* Glass effect */
  border: none; 
  // 2px solid rgba(255, 255, 255, 0.3); /* Subtle border */
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px); /* Soft blur effect for a frosted glass appearance */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3)); /* Change on hover */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3); /* Slightly stronger shadow */
    transform: scale(1.05); /* Slightly grow on hover */
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 590px) {
    display: none;
  }
`;


const Wrap = styled(animated.div)`
  min-height: 80vh;
  min-width: 250px;
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  // z-index: 3;
  // backdrop-filter: blur(2rem);
  
  width: 60%;
  min-width: 250px;
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
  ${({ animate }) =>
    animate &&
    css`
      animation: ${clickAnimation} 0.6s ease-out;
    `}
`;

const Circle2 = styled(animated.div)`
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
