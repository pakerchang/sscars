import { atom } from "recoil";

export const memberDataState = atom({
  key: "memberDataState",
  default: {
    teamMember: [
      {
        name: "喬伊",
        role: "Chairman",
        img: "/assets/members/136097321_846383366095715_215085181768770236_n.jpg",
      },
      {
        name: "小施",
        role: "Founder & CEO",
        img: "/assets/members/23844388_1672606132761635_293302366728784636_n.jpg",
      },
      {
        name: "科p",
        role: "Co-founder",
        img: "/assets/members/277577563_520233172802348_3578784958336157970_n.jpg",
      },
      {
        name: "阿呆",
        role: "Director",
        img: "/assets/members/redhungdai0306-20211030_175442-249803213_1270430643369956_8681504931267478033_n.jpeg",
      },
      {
        name: "泰山",
        role: "Cinematographer",
        img: "/assets/members/V4RvoL7h.jpeg",
      },
      {
        name: "苦瓜",
        role: "Video editor",
        img: "/assets/members/kikkooo666-20190923_014208-68688626_171732720621509_594731114856797913_n.jpeg",
      },
    ],
  },
});
