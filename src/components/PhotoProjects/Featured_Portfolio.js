{/*********
ProjectName: 2018_Europe
Date: 2018_Europe
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

import home_data from '../../image-details/home'
import travel_data from '../../image-details/travel'
import pets_data from '../../image-details/pets'
import misc_data from '../../image-details/misc'


{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/backgrounds/header.jpg'),
  title: "portfolio",
  date: "2017 - Present",
  desc: "everything",
  style: "featured-header-mobile"
};

{/************************** Gallery Data *************************/ }
let imageArray = [];


{/************************** Travel Data *************************/ }
const travelArray = [];
const featTravel = [1,2,3,4,5,6,7,8,9,10,11,12];

for (var i = 1; i <= 12; i++) {
  const obj = {
    src: require('../../images/travel/travel-' + i + '.jpg'),
    thumbnail: require('../../images/travel/travel-' + i + '.jpg'),
    caption: travel_data[i-1],
    category: ["travel"]
  }
  if(featTravel.includes(i)){
    obj['category'].push('*')
  }
  travelArray.push(obj);
}

{/************************** pets Data *************************/ }
const petsArray = [];
const featPets = [1,2,3,4];

for (var i = 1; i <= 4; i++) {
  const obj = {
    src: require('../../images/pets/pets-' + i + '.jpg'),
    thumbnail: require('../../images/pets/pets-' + i + '.jpg'),
    caption: pets_data[i-1],
    category: ["pets"]
  }
  if(featPets.includes(i)){
    obj['category'].push('*')
  }
  petsArray.push(obj);
}
{/************************** home Data *************************/ }
const homeArray = [];
const featHome = [1,2,3];

for (var i = 1; i <= 3; i++) {
  const obj = {
    src: require('../../images/home/home-' + i + '.jpg'),
    thumbnail: require('../../images/home/home-' + i + '.jpg'),
    caption: home_data[i-1],
    category: ["home"]
  }
  if(featHome.includes(i)){
    obj['category'].push('*')
  }
  homeArray.push(obj);
}

{/************************** Misc Data *************************/ }
const miscArray = [];
const featMisc = [1];

for (var i = 1; i <= 1; i++) {
  const obj = {
    src: require('../../images/misc/misc-' + i + '.jpg'),
    thumbnail: require('../../images/misc/misc-' + i + '.jpg'),
    caption: misc_data[i-1],
    category: ["misc"]
  }
  if(featMisc.includes(i)){
    obj['category'].push('*')
  }
  miscArray.push(obj);
}


{/*********************** Return Object Data ***********************/ }
imageArray = [...shuffle(travelArray), ...shuffle(petsArray), ...homeArray, ...shuffle(miscArray)];

const projectData = {
  imageArray: (imageArray),
  projectHeader: headerData
}

export default projectData;
