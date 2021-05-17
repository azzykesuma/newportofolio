import React from 'react'
import { MainContainer } from './MainContainer'
import FormContainer from './Form/FormContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import PrivateRoute from '../PrivateRoute'
import SignUp from '../Pages/SignUp'
import forgotPassword from '../Pages/forgotPassword'
import Dashboard from '../Pages/Dashboard'
import UpdateProfile from '../Pages/UpdateProfile'

const Main = () => {
    return (
            <MainContainer>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path='/' component={Dashboard} />
                            <PrivateRoute path='/update-profile' component={UpdateProfile} />
                            <Route path='/login' component={FormContainer} />
                            <Route path='/sign-up' component={SignUp} />
                            <Route path='/forgot-password' component={forgotPassword} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </MainContainer>  
    )
}

export default Main
