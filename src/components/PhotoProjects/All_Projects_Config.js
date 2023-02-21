// {/*********
// Date:        Project: 
// -----------------------------------------
// 08.05.18     Lauren & Lychee

// **********/ }
import { CONSTANT_TRAVEL,CONSTANT_PETS,CONSTANT_HOME,CONSTANT_MISC } from '../configs/constants'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/backgrounds/header.jpg'),
  title: "All Projects",
  date: "2017 - Present",
  desc: "Snapshots through the Years",
  // style: "TEST"
};

// {/************************** Project Data *************************/ }

const imageArray = [
  {
    title: "test",
    date: "February 2023",
    coverImage: require('../../images/pets/pets-1.jpg'),
    link: "t23",
    category: CONSTANT_PETS,
    bannerStyle: "light",
    style: "ap-mobile-cover-Ninaky"
  }
]
// Left this in for sample for later
// const imageArray = [
//   {
//     title: "Santa Cruz Music Fest",
//     date: "October 2019",
//     coverImage: require('../../images/09.01.19_Ninasky/Ninasky-18.jpg'),
//     link: "/scmf19", 
//     category: CONSTANT_CONCERT,
//     bannerStyle: "light",
//     style: "ap-mobile-cover-Ninasky"
//   }, { 
//     title: "Nina Sky",
//     date: "September 2019",
//     coverImage: require('../../images/09.01.19_Ninasky/Ninasky-18.jpg'),
//     link: "/ninasky2019", 
//     category: CONSTANT_CONCERT,
//     bannerStyle: "dark",
//     style: "ap-mobile-cover-Ninasky"
//   }, {
//     title: "New Orleans 2019",
//     date: "February 2019",
//     coverImage: require('../../images/02.02.19_Nola/Nola-8.jpg'),
//     link: "/nola2019", 
//     category: CONSTANT_TRAVEL,
//     bannerStyle: "light"
//   },  
// ];

// {/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: imageArray,
  projectHeader: headerData
}

export default projectData;