import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthService} from './AuthService';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if (!AuthService.isLoggedIn()) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} rest={rest} />
    }} />
)