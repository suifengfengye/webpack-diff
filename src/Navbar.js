import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { match } from 'path-to-regexp'

const { useState, useEffect } = React

const NavBar = () => {
    const location = useLocation()

    const mathCurPath = ({ path }) => {
        const matchInst = match(path)
        const matchResult = matchInst(location.pathname)
        return matchResult
    }

    const isMathHome = mathCurPath({ path: '/' })
    const isMathUsers = mathCurPath({ path: '/users' })

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        {
                            isMathHome ? 'Home' : <Link to="/">Home</Link>
                        }
                    </li>
                    <li>
                        {
                            isMathUsers ? 'Users' : <Link to="/users">Users</Link>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
