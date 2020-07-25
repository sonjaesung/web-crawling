import React, { Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";

import Search from "./component/Search";

const App = () => {

    return (
        <Fragment>
            <HashRouter>
                <Route path="/" component={Search} exact={true} />
            </HashRouter>
        </Fragment>
    );
};

export default App;
