import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import Home from '@Views/pages/guess/home';
import Login from '@Views/pages/guess/login';
import Profil from '@Views/pages/admin/Profil'
import BaseDesign from '@Views/pages/guess/base-design';
import ERROR404 from '@Views/pages/error/error404';
import MainLayoutRoute from '@Views/layout/main-layout';
import MyAssets from '@Views/pages/user/my-assets';
import { Provider } from "react-redux"
import store from "./redux/Store"

  
const App = () => {
    return (
        <Provider store={store}>
        <main>
            <Switch>
                {/* <Redirect from="/" to="/"/> */}
                <Route path="/" component={Home} exact />
                <MainLayoutRoute exact path="/login" component={ Login } />
                <MainLayoutRoute exact path="/admin/profil" component={ Profil } />
                <Route path="/logina" component = { Login } exact />
                <Route path="/base-design" component = { BaseDesign } exact />
                <Route path="/asset" component = { MyAssets } exact />
                <Route component = { ERROR404 } />
            </Switch>
        </main>
        </Provider>
    )
}
export default App