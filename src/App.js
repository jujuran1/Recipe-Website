import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Toolbar from "./components/Navigation/Toolbar/Toolbar"
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer"
import CreateRecipe from "./conteiners/CreateRecipe/CreateRecipe"
import RecipesCollection from "./conteiners/RecipesCollection/RecipesCollection"
import Aux from "./hoc/Auxiliary"

class App extends Component {

  state = {
    showSideDrawer: false,
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggle={this.toggleSideDrawerHandler} />
        <SideDrawer
          sdState={this.state.showSideDrawer}
          drawerToggle={this.toggleSideDrawerHandler} />
        <main>
          <Switch>
            <Route path="/create-recepy" component={CreateRecipe} />
            <Route path="/collection" component={RecipesCollection} />
          </Switch>
        </main>
      </Aux>
    );
  }

}

export default App;
