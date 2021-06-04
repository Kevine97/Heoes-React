import React from "react";
import { Switch, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import HomeScreen from "../components/landing/HomeScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import Navbar from "../components/ui/Navbar";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
   
      <div className="container-fluid mt-5">
        <Switch>
        <Route exact path="/marvel" component={() => <MarvelScreen/>} />
        <Route exact path="/hero/:heroeId" component={() => <HeroScreen/>}/>
        <Route exact path="/dc" component={() =><DcScreen/>} />
        <Route exact path="/" component={() =><HomeScreen/>} />
        <Route exact path="/search" component={() => <SearchScreen/>} />
        <Route exact path="*" component={() => <HomeScreen />} />
        </Switch>
      </div>
    </>
  );
};
