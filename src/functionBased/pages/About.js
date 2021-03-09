import React from "react";
import {useRouteMatch,Link,Route} from "react-router-dom";
import SinglePage from './SinglePage'


const About = (props) => {
    const {url,path}=useRouteMatch();

    return (
        <div className="about_content">
            <ul className="about_list">
                <li>
                    <Link to={`${url}/about-app`}>about app</Link>
                </li>
                <li>
                    <Link to={`${url}/about-author`}>about author</Link>
                </li>
            </ul>
            <Route path={`${path}/:slug`}>
                <SinglePage/>
            </Route>
        </div>
    )
}

export default About;