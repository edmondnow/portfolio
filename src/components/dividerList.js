export default [
  {
    name: "All",
    display: "JavaScript",
    color: "rgba(253, 203, 110)",
    open: true,
    logo: "JavaScript",
    classTop: "top1"
  },
  {
    name: "React",
    color: "rgba(116, 185, 255)",
    display: "React",
    open: false,
    logo: `<div class="composed-logo"><img class="logotype2 select-disable" src=${require("./logos/react.png")}/> React </div>`,
    classTop: "top2"
  },
  {
    name: "Redux",
    color: "hsla(244, 98%, 80%)",
    display: "React",
    open: false,
    logo: `<div class="composed-logo"> <img class="logotype2 reduxlogo select-disable" src=${require("./logos/redux.png")}/> Redux </div>`,
    classTop: "top3"
  },
  {
    name: "Express",
    color: "hsla(12, 70%, 61%)",
    display: "Express",
    open: false,
    logo: `<span class='express select-disable'>Express</span>`,
    classTop: "top4"
  },
  {
    name: "MongoDB",
    color: "hsla(168, 100%, 36%)",
    display: "MongoDB",
    open: false,
    logo: `<img class="logotype1 select-disable" src=${require("./logos/mongodb.png")}/>`,
    classTop: "top5"
  },
  {
    name: "jQuery",
    color: "hsla(11, 90%, 80%)",
    display: "jQuery",
    open: false,
    logo: `<img class="logotype1 jquery select-disable" src=${require("./logos/jquery.png")}/>`,
    classTop: "top6"
  }
];
