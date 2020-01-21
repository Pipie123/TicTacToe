import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native'
import Home from "./Home"
import Play from "./Play"
import Ai from "./Ai"
import Pvp from "./Pvp"
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/play" component={Play}/>
                    <Route exact path="/pvp" component={Pvp}/>
                    <Route exact path="/ai" component={Ai}/>
                </Switch>
            </NativeRouter>
        )
    }
}
