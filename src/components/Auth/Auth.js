import axios from 'axios'
import React, { Component } from 'react'


class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.username]: e.target.value,
        })
    }

    login = () => {
        const { username, password } = this.state
        axios.post('/auth/login', { username, password }).then((res) => {
            this.props.loginUser(res.data)
        }).catch((err) => {
            alert(err.message)
        })
    }

    register = () => {
        const { username, password } = this.state
        axios.post('/auth/register', { username, password }).then((res) => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
            .catch((err) => {
                alert(err.message)
            })
    }



    render() {
        return (
            <div>
                <input placeholder='Username' onChange={(e) => {
                    this.handleChange(e)
                }}></input>
                <input placeholder='Password' onChange={(e) => {
                    this.handleChange(e)
                }}></input>
                <button onClick={this.login()}>Login</button>
                <button onClick={this.register()}>Register</button>
            </div>
        )
    }
}

export default Auth