import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import RepeatIcon from "@material-ui/icons/Book";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  blueDot: {
    backgroundColor: '#0d89eb',
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div style={{ overflowY : 'scroll', width: '80vw'}}>
      <Timeline align="alternate">
      <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
              Software Engineering Manager
              </Typography>
              <Typography>Gruuw</Typography>
              <Typography variant="body2" color="textSecondary">
                2022 - Present
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Software Engineer
              </Typography>
              <Typography>PlayBrain</Typography>
              <Typography variant="body2" color="textSecondary">
                2020 - 2022 
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Code Chrysalis
              </Typography>
              <Typography>Software Bootcamp</Typography>
              <Typography variant="body2" color="textSecondary">
                2020 July - 2020 September
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem> */}
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                QA Engineer
              </Typography>
              <Typography>Digital Hearts</Typography>
              <Typography variant="body2" color="textSecondary">
                2019 - 2020
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Support Engineer (Part-Time)
              </Typography>
              <Typography>Planet Works</Typography>
              <Typography variant="body2" color="textSecondary">
                2019 - 2020
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                ARC Tokyo
              </Typography>
              <Typography>Japanese Language School</Typography>
              <Typography variant="body2" color="textSecondary">
                2018 - 2019
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Southampton University
              </Typography>
              <Typography>BA Education</Typography>
              <Typography variant="body2" color="textSecondary">
                2016 September - 2017 July
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem> */}
                <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                University of Portsmouth
              </Typography>
              <Typography>Research Physicist</Typography>
              <Typography variant="body2" color="textSecondary">
                2012 - 2019
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                University of Portsmouth
              </Typography>
              <Typography>BSc in Physics</Typography>
              <Typography variant="body2" color="textSecondary">
                2011 - 2014
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
