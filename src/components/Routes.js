import React from "react";
import { createHashHistory } from "history";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ******** ComponentRoutes ******** //
import App from "./App";
import Home from './Home'
import GalleryContainer from './GalleryContainer';
// import BlogPage from './BlogPage'
// import AboutPage from './AboutPage'
import ProjectHeader from './Projects/ProjectHeader'
import ProjectContainer from './Projects/ProjectContainer'
// import ContactPage from './ContactPage'
import ContactCard from './ContactCard'

// ******** Project Routes ******** //
import AllProjectsConfig from './PhotoProjects/All_Projects_Config'

const Routes = () => {

  // console.log("ROUTE: " + JSON.stringify(Laruen_Lychee.imageArray))
  return (
    // <BrowserRouter>
    // Switch creates issues in routes, Fixes the issue of not rendering when url changes, maybe not anymore??
    // <Switch>
    <div>
      <Route exact path="/" component={Home} />
      {/* <Route path="/blog" component={BlogPage} />
      <Route path="/testpage" component={TestPage} /> */}
      {/* <Route path="/contact" component={ContactPage}></Route> */}
      <Route path="/contactcard" component={ContactCard}></Route>
      {/* <Route path="/about" component={AboutPage} /> */}
      {/* <Route path="/about" render={() =>
        <ProjectContainer
          imageArray={AboutMeConfig.imageArray}
          headerInfo={AboutMeConfig.projectHeader}
          renderType="aboutme" />
      } */}
      {/* /> */}
      {/* <Route path="/projects" render={() =>
        <ProjectContainer
          imageArray={AllProjectsConfig.imageArray}
          headerInfo={AllProjectsConfig.projectHeader}
          renderType="allprojects" />
      }
    />*/}

    {/* Left these two below as example */}
{/*      
      <Route exact path="/ninasky2019" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Ninasky.projectHeader}
          imageArray={Ninasky.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/scmf19" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Ninasky.projectHeader}
          imageArray={Ninasky.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />  */}
    </div>
  );
}

export default Routes;