import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RepeatIcon from "@mui/icons-material/Book";
import { Paper, Typography, Box } from "@mui/material";

export default function CustomizedTimeline() {
  return (
    <Box sx={{ overflowY: "scroll", width: "80vw" }}>
      <Timeline sx={{ display: 'flex', justifyContent: 'center' }}>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: item.dotColor }}>
                {item.icon}
              </TimelineDot>
              {index !== timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 1.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.company}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.duration}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

const timelineData = [
  { title: "Software Engineering Manager", company: "Gruuw", duration: "2022 - Present", icon: <LaptopMacIcon />, dotColor: "secondary.main" },
  { title: "Software Engineer", company: "PlayBrain", duration: "2020 - 2022", icon: <LaptopMacIcon />, dotColor: "secondary.main" },
  { title: "QA Engineer", company: "Digital Hearts", duration: "2019 - 2020", icon: <LaptopMacIcon />, dotColor: "secondary.main" },
  { title: "Support Engineer (Part-Time)", company: "Planet Works", duration: "2019 - 2020", icon: <LaptopMacIcon />, dotColor: "secondary.main" },
  { title: "ARC Tokyo", company: "Japanese Language School", duration: "2018 - 2019", icon: <RepeatIcon />, dotColor: "#0d89eb" },
  { title: "University of Portsmouth", company: "Research Physicist", duration: "2012 - 2019", icon: <RepeatIcon />, dotColor: "primary.main" },
  { title: "University of Portsmouth", company: "BSc in Physics", duration: "2011 - 2014", icon: <RepeatIcon />, dotColor: "#0d89eb" },
];
