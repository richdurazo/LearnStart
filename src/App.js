import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import Landing from './pages/Landing';
import Stories from './pages/Stories';

const App = () => {
    const routes = (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/stories" exact component={Stories} />
            <Redirect to="/" />
        </Switch>
    )
    return (
        <Layout>
           {routes}
        </Layout>
    );
}

export default App;
