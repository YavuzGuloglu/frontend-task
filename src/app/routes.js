import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListPage from '../component/list.page'
import Main from '../component/main.page'

function Routes() {
    return (
        <Switch>
            <Route path="/listPage/:paramValue" exact component={ListPage} />
            <Route path="/" exact component={Main} />

        </Switch>
    )
}
export default Routes