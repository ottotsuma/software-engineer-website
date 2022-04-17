import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Levelup(props) {
  const [spanCSS, SetSpanCSS] = useState(false);
  const [accept, setAccept] = useState(false);
  const [stats, setStats] = useState([]);

  const species = {
    normal: {
      stat: 2,
    },
    rare: {
      stat: 3,
    },
    epic: {
      stat: 4,
    },
    legendary: {
      stat: 5,
    },
  };

  const type = {
    fighter: {
        skillName: `Skill`,
        skillsName: `skills`,
        Level10: 'Spirit eating',
        Level70: 'Advanced Spirit',
      },
      rogue: {
          skillName: `Skill`,
          skillsName: `skills`,
          Level10: 'Job',
          Level70: 'Advanced jobs',
        },
      mage: {
        skillName: `Spell`,
        skillsName: `spells`,
        Level10: 'Element',
        Level70: 'Second element',
      },
  }

  const classes = {
    normal: {
      skill: 1,
    },
    rare: {
      skill: 2,
    },
    epic: {
      skill: 3,
    },
    legendary: {
      skill: 4,
    },
  };

  function HP(key) {
    if (key === 1) {
      return "HP +110. ";
    } else {
      return "HP +10. ";
    }
  }

  function MP(key) {
    if (key === 1) {
      return "MP +5. ";
    } else {
      return "MP +5. ";
    }
  }

  useEffect(() => {
    const array = [];
    let skill = 0;
    let stat = 0;
    array.push(HP(props.level));
    array.push(MP(props.level));
    if (props.level < 100) {
      if ((props.level / 10) % 1 === 0) {
        array.push(
          `${type[props.type].skillName || "Skill"} cap increased by 1. `
        );
        stat = stat + 1;
      }
      if (props.level === 50) {
        array.push(`Familia unlocked. `);
      }
      if (props.level === 80) {
        array.push(
          `Advanced ${type[props.type].skillsName || "skills"} unlocked. `
        );
      }
      if (props.level === 70) {
        array.push(`${type[props.type].Level70} unlocked. `);
      }
      if (props.level === 30) {
        array.push(
          `Intermediate ${
            type[props.type].skillsName || "skills"
          } unlocked. `
        );
      }
      if (props.level === 10) {
        array.push(`${type[props.type].Level10} unlocked. `);
      }
      if (props.level === 1) {
        array.push(
          `${type[props.type].skillName || "Skill"} cap increased by 1. `
        );
        array.push(
          `Basic ${type[props.type].skillsName || "skills"} unlocked. `
        );
        stat = stat + 1;
      }
    } else {
      array.push(`Advanced classes unlocked. `);
    }

    if (species[props.species].skill) {
      skill = skill + species[props.species].skill;
    }
    if (species[props.species].stat) {
      stat = stat + species[props.species].stat;
    }
    if (classes[props.class].skill) {
      skill = skill + classes[props.class].skill;
    }
    if (classes[props.class].stat) {
      stat = stat + classes[props.class].stat;
    }
    array.push(
      `${type[props.type].skillName || "Skill"} Points: +${skill} `
    );
    array.push(`Stat Points: +${stat} `);
    setStats(array);
  }, [props]);

  return (
    <Main>
      <CardNoImage>
        <Title>Congratulations you leveled up!</Title>
        {!spanCSS && <Name>You are now level {props.level}.</Name>}
        {!spanCSS && <Stats>{stats}</Stats>}
        {spanCSS && <Span>{props.details}</Span>}
        <ButtonWrapper>
          {props.details ? (
            <ButtonDetails onClick={() => SetSpanCSS(!spanCSS)}>
              More Details
            </ButtonDetails>
          ) : (
            <div></div>
          )}
          {accept ? (
            <Accepted>Applied!</Accepted>
          ) : (
            <Button onClick={() => setAccept(true)}>Okay</Button>
          )}
        </ButtonWrapper>
      </CardNoImage>
    </Main>
  );
}

const Accepted = styled.div`
  color: white;
  background: #54cc4f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  margin: 10px;
  cursor: default;
  white-space: nowrap;
  &:hover {
    // background: #2CA8FF;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonDetails = styled.div`
  color: white;
  background: #f92b00;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #ff5745;
  }
`;

const Button = styled.div`
  color: white;
  background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  margin: 10px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #2ca8ff;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: black 3px solid;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  font-size: 28px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  color: ${(props) => props.color || "white"};
`;

const SingleStat = styled.li`
  text-transform: capitalize;
  border-radius: 6px;
  padding: 1px;
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const BottomText = styled.div`
  width: ${(props) => props.width || "300px"};
  border-radius: 3px;
  overflow: hidden;
  position: absolute; /* important */
  bottom: 0; /* important */
  max-height: 0; /* important */
  overflow: hidden; /* important */
  transition: max-height 300ms ease-in; /* important */
  font-weight: bold;
`;

const Span = styled.div`
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  z-index: 2;
  top: 0;
`;

const Card = styled.div`
  position: relative; /* important */
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "300px"};
  background-image: url(${(props) =>
    props.src ||
    "http://assets.stickpng.com/thumbs/5a461418d099a2ad03f9c999.png"});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border-radius: 3px;
  margin-bottom: 10px;
  &:hover ${BottomText} {
    max-height: 50%; /* important */
  }
`;

const CardNoImage = styled.div`
  position: relative; /* important */
  width: 300px;
  height: auto;
  border-radius: 3px;
  margin-bottom: ${(props) => props.bottom || "10px"};
  &:hover ${BottomText} {
    max-height: 50%; /* important */
  }
`;
