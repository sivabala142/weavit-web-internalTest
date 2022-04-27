import picture from "../images/Avatars.png";

export interface DummyData {
  id: number;
  image: string;
  title: string;
  dateTime: string;
  desc: Array<object>;
  extra: Array<object>;
}

export const Data: DummyData[] = [
  {
    id: 1,
    image: picture,
    title: "Jane Leforti",
    desc: [
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
    ],
    extra: [
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
    ],
    dateTime: " Monday, Nov 22, 2021",
  },
  {
    id: 2,
    image:
      "https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png",
    title: "Netflix & Blockbuster",
    desc: [
      {
        sub: "Netflix Recite what you know you can truly yesterday learn it.",
      },
    ],
    extra: [
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
    ],
    dateTime: "Thursday, Jan 22, 2021",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/800px-Flag_of_NATO.svg.png",
    title: "NATO",
    desc: [
      {
        sub: "NATO Allies agree to further strengthen and sustain support for Ukraine",
      },
    ],
    extra: [
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
    ],
    dateTime: "Thursday, Jan 22, 2021",
  },
  {
    id: 4,
    image:
      "https://yt3.ggpht.com/Ym_5TAhe4-1DON2kALAJfVstTrddNxXcBYzstI51AeOeed-gaYXh0t2aZx1wqCecEJzJkoI1WA=s900-c-k-c0x00ffffff-no-rj",
    title: "Disney",
    desc: [
      {
        sub: "Discover all you need to know about Disney movies, live shows, holidays, parks and the latest products from Disney.",
      },
    ],
    extra: [
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
    ],
    dateTime: "Thursday, Jan 22, 2021",
  },
  {
    id: 5,
    image: "https://miro.medium.com/max/1400/1*Yikr4F6MwXCn6tUWqLgpPA.png",
    title: "Need for Speed",
    desc: [
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series",
      },
    ],
    extra: [
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series.",
      },
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series.",
      },
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series.",
      },
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series.",
      },
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series.",
      },
      {
        sub: "Hit the gas and tear up the roads in this legendary action-driving series.",
      },
    ],
    dateTime: "Thursday, Jan 22, 2021",
  },
];

function getData() {
  return Data;
}

export { getData };
