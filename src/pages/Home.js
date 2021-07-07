import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import AppsIcon from "material-ui/icons/Apps"
import Avatar from 'material-ui/Avatar';

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                
                    <Link to='about'>About</Link>
                    <Link to='about'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='about'>Gmail</Link>
                    <Link to='about'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">

            </div>
        </div>
    )
}

export default Home
