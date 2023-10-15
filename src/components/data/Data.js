import React from "react"

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "developer",
    path: "/developer",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
]

export const featured = [
  {
    cover: "../images/hero/dev1.png",
    name: "John Doe",
    stack: "Full Stack Developer",
  },
  {
    cover: "../images/hero/dev2.png",
    name: "Andrew Gao",
    stack: "Backend Developer",
  },
  // ... More developers
]

export const awards = [
  {
    icon: <i className='fa-solid fa-trophy'></i>,
    num: "5",
    name: "Best Software Engineering Practices",
  },
  {
    icon: <i className='fa-solid fa-lightbulb'></i>,
    num: "3",
    name: "Innovative Solutions Award",
  },
  // ... More awards
]

export const team = [
  {
    list: "5 Years",
    cover: "../images/team/dev1.jpg",
    address: "New York, USA",
    name: "John Smith",
    stack: "React, Node.js",
    icon: [
      <i key="linkedin-1" className='fa-brands fa-linkedin'></i>, 
      <i key="github-1" className='fa-brands fa-github'></i>
    ],
  },
  {
    list: "3 Years",
    cover: "../images/team/dev2.jpg",
    address: "San Francisco, USA",
    name: "Jane Smith",
    stack: "Python, Django",
    icon: [
      <i key="linkedin-2" className='fa-brands fa-linkedin'></i>, 
      <i key="github-2" className='fa-brands fa-github'></i>
    ],
  },
  // ... More team members
]

export const price = [
  {
    plan: "Basic",
    price: "50",
    ptext: "per hour",
    list: [
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "Code Review",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "UI/UX Design",
      },
      // ... More pricing features
    ],
  },
  // ... More pricing plans
]

export const footer = [
  {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "Developer Page" }, { list: "Pricing Page" }, { list: "Contact Page" }],
  },
  {
    title: "ALL SECTIONS",
    text: [{ list: "Headers" }, { list: "Developers" }, { list: "Pricing" }, { list: "Contact" }],
  },
]
export const tiles = [
  {
    title: "Tile 1",
    image: "../images/ad1.png",
    alt: "Description for Tile 1"
  },
  {
    title: "Tile 2",
    image: "../path/to/image2.jpg",
    alt: "Description for Tile 2"
  },
  // ... Add all 8 tiles
];