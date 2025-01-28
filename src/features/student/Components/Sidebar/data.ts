import dashboard from "../../assets/dashboard.svg";
import Myclass from "../../assets/class.svg";
import subject from "../../assets/subject.svg";
// import quiz from "../../assets/quiz.svg";
import sub from "../../assets/sub.svg";
import trivia from "../../assets/trivia.svg";
// import game from "../../assets/game.svg";
import profile from "../../assets/profile.svg";

export const sidebarItems = [
  {
    link: "/student",
    image: dashboard,
    text: "Dashboard",
  },
  {
    link: "/student/my-class",
    image: Myclass,
    text: "My Class",
  },
  {
    link: "/student/subjects",
    image: subject,
    text: "Subjects",
  },
  // {
  //   link: "/student",
  //   image: quiz,
  //   text: "Take Quiz",
  // },
  {
    link: "/student/subscribe",
    image: sub,
    text: "Subscripitions",
  },
  {
    link: "/student/trivia",
    image: trivia,
    text: "Trivia",
  },
  // {
  //   link: "/student",
  //   image: game,
  //   text: "Games",
  // },
  {
    link: "/student/profile",
    image: profile,
    text: "My Profile",
  },
];
