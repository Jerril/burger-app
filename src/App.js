import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './containers/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';

const App = props => (<Layout>
    <Switch>
        <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/' component={BurgerBuilder} />
    </Switch>
</Layout>);

export default App;