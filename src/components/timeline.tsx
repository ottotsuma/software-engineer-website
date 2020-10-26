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
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="primary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Code Chrysalis
            </Typography>
            <Typography>Software bootcamp</Typography>
            <Typography variant="body2" color="textSecondary">
            Software bootcamp
           </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Video Game Debugger
            </Typography>
            <Typography>Digital Hearts</Typography>
            <Typography variant="body2" color="textSecondary">
            Software bootcamp
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>

        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Tech support
            </Typography>
            <Typography>Planet Works</Typography>
            <Typography variant="body2" color="textSecondary">
            Software bootcamp
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="primary">
        <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              ARC Tokyo
            </Typography>
            <Typography>Japanese langauge School</Typography>
            <Typography variant="body2" color="textSecondary">
            Software bootcamp
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Science Teacher
            </Typography>
            <Typography>Wiltshire education Departemnt</Typography>
            <Typography variant="body2" color="textSecondary">
            Software bootcamp
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="primary">
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
            Software bootcamp
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Teaching Assistant
            </Typography>
            <Typography>Wiltshire education Departemnt</Typography>
            <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Technical Sales Engineer
            </Typography>
            <Typography>Simplex-Turbulo</Typography>
            <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className="timelineTitle">
              Technical Assistant
            </Typography>
            <Typography>Serum Hydraulics</Typography>
            <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
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
            <Typography>BSc in Physics</Typography>
            <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
