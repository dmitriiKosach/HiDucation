import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import {
    PATH_ABOUT,
    PATH_CONTACT,
    PATH_DASHBOARD,
    PATH_HOME, PATH_LOGIN, PATH_LOGOUT,
    PATH_PRODUCTS, PATH_PROFILE, PATH_REGISTRATION,
    PATH_TEAM
} from "../../../config/config-routes";
import Home from "./home/Home";
import Products from "./products/Products";
import About from "./about/About";
import Team from "./team/Team";
import Contact from "./contact/Contact";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import style from './Body.module.css'
import Registration from "./registration/Registration";
import Profile from "./profile/Profile";
import {useSelector} from "react-redux";
import store from "../../../store/store";
import {getProductsByCategory, getProductsByName} from "../../../actions/productsAction";

const Body = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const updateProductsByCategory = (category) => {
        store.dispatch(getProductsByCategory(category))
    }

    const updateProductsByName = (name) => {
        store.dispatch(getProductsByName(name))
    }

    return <React.Fragment>
        <div className={style.body}>
            <div className={style.container}>
                    
                    <Routes>
                        <Route path={PATH_HOME} exact element={<Home />}/>
                        <Route path={PATH_PRODUCTS} exact element={<Products updateProductsByCategory={updateProductsByCategory} updateProductsByName={updateProductsByName}/>}/>
                        <Route path={PATH_ABOUT} exact element={<About />}/>
                        <Route path={PATH_TEAM} exact element={<Team />}/>
                        <Route path={PATH_CONTACT} exact element={<Contact />}/>
                        <Route path={PATH_DASHBOARD} exact element={<Dashboard />}/>
                        <Route path={PATH_LOGIN} exact element={<Login />}/>
                        <Route path={PATH_LOGOUT} exact element={() => {
                        return isAuthenticated
                            ? <Logout />
                            : <Home />
                        }}>
                        </Route>
                        <Route path={PATH_REGISTRATION} exact element={<Registration />}/>
                        <Route path={PATH_PROFILE} exact element={<Profile />}/>
                    </Routes>

            </div>
        </div>
    </React.Fragment>
}

export default Body;