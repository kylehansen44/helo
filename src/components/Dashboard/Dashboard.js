import axios from 'axios'
import React, { Component } from 'react'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount() {
        this.props.getUser().catch((err) => {
            this.props.history.push('/')
        })
        this.getPosts()
    }

    getPosts = () => {
        axios.get('/api/posts').then((res) => {
            this.setState({
                posts: res.data
            })
        })
    }





    render() {
        return (
            <div>
                Dashboard.js
            </div>
        )
    }
}
export default Dashboard