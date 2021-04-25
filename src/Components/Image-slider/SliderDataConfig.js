import {
  FamilyHub, HomeSamsung, S10, newPhone, QLED,
} from '../../assets';
// "https://images.samsung.com/is/image/samsung/p5/in/Familyhub_Home_KV_PCcomp.jpg?$ORIGIN_JPG$"
export const SliderData = [
  {
    ImageLink: newPhone,
    content: [
      {
        contentType: 'text',
        text: 'A Galaxy Event',
        SubContent: [
          {
            text: 'Watch here on April 10, 2019',
            style: {
              Color: 'black',
              fontSize: '14px',
            },
          },
          {
            text: '5:30PM',
            style: {
              Color: 'black',
              fontSize: '14px',
            },
          },
        ],
        style: {
          Color: 'black',
          fontSize: '52px',
        },
      },
    ],
    position: {
      left: '60%',
      top: '30%',
    },
  },
  {
    ImageLink: S10,
    content: [
      {
        contentType: 'text',
        text: 'Galaxy S10+',
        SubContent: [
          {
            text: 'Galaxy S10 || Galaxy S10+',
            style: {
              Color: 'white',
              fontSize: '14px',
            },
          },
        ],
        style: {
          Color: 'white',
          fontSize: '52px',
        },
      },
    ],
    position: {
      left: '60%',
      top: '30%',
    },
  },
  {
    ImageLink: HomeSamsung,
    content: [
      {
        contentType: 'text',
        text: 'Galaxy M30',
        SubContent: [
          {
            text: '#IM3XPOWERD',
            style: {
              Color: 'white',
              fontSize: '14px',
            },
          },
          {
            text: 'Next sale on 9th Apr, 12 noon',
            style: {
              Color: 'white',
              fontSize: '14px',
            },
          },
        ],
        style: {
          Color: 'white',
          fontSize: '52px',
        },
      },
    ],
    position: {
      left: '60%',
      top: '30%',
    },
  },
  {
    ImageLink: QLED,
    content: [
      {
        contentType: 'text',
        text: 'QLED TV',
        SubContent: [
          {
            text: 'See nothing else',
            style: {
              Color: 'white',
              fontSize: '14px',
            },
          },
        ],
        style: {
          Color: 'white',
          fontSize: '52px',
        },
      },
    ],
    position: {
      left: '60%',
      top: '30%',
    },
  },
  {
    ImageLink: FamilyHub,
    content: [
      {
        contentType: 'text',
        text: 'Family Hub™',
        SubContent: [
          {
            text: "It's more than a fridge. It's the Family Hub™.",
            style: {
              Color: 'black',
              fontSize: '14px',
            },
          },
        ],
        style: {
          Color: 'black',
          fontSize: '52px',
        },
      },
    ],
    position: {
      left: '8%',
      top: '15%',
    },
  },
];
