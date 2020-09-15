import React, { Component } from 'react'


class Nav extends Component {
    constructor() {
        super()
        this.state = {}
    }



    render() {
        return (
            <div>
               <button>Home</button>
               <button>New Post</button>
               <button>Logout</button>
            </div>
        )
    }
}

export default Nav