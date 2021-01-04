import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Navbars } from "./util/Navbars";
import { PlayerList } from "./views/playerList/PlayerList";
import { GroupList } from "./views/groupList/GroupList";
import { PerformTest } from "./views/performTest/comp/PerformTest";
import { TestResults } from './views/testResults/TestResults';


function App() {



    return (
        <Provider store={store} >
            <Router>
                <Navbars />


                <Switch>
                    <Route path="/player-list" >
                        <PlayerList />
                    </Route>
                    <Route path="/group-list" >
                        <GroupList />
                    </Route>
                    <Route path="/perform-test" >
                        <PerformTest />
                    </Route>
                    <Route path="/test-results" >
                        <TestResults />
                    </Route>

                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
