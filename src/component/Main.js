import React from 'react'
import { MainContainer } from './MainContainer'
import FormContainer from './Form/FormContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import PrivateRoute from '../PrivateRoute'
import SignUp from '../Pages/SignUp'
import forgotPassword from '../Pages/forgotPassword'
import Dashboard from '../Pages/dashboard/Dashboard'
import Profile from '../Pages/Profile/Profile'
import Contact from '../Pages/Contact/Contact'
import UpdateProfile from '../Pages/UpdateProfile'
import { Background,BcgContainer } from '../Background'
import bcg from '../assets/bcg.svg'

const Main = () => {
    return (
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path='/' component={Dashboard} />
                            <PrivateRoute exact path='/profile' component={Profile} />
                            <PrivateRoute exact path='/contact' component={Contact} />
                            <PrivateRoute path='/update-profile' component={UpdateProfile} />
                            <BcgContainer>
                                <Background src={bcg} />
                            <MainContainer>
                                <Route path='/Login' component={FormContainer} />
                                <Route path='/sign-up' component={SignUp} />
                                <Route path='/forgot-password' component={forgotPassword} />
                            </MainContainer>
                            </BcgContainer>
                        </Switch>
                    </AuthProvider>
                </Router>            
    )
}

export default Main
