import axios from 'axios'

const initialState = {
    username: '',
    profile: '',
    userId: 0
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'


export function updateUser(username) {
    return {
        type: UPDATE_USER,
        payload: username
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER,
        payload: null
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, username: action.payload }
        case CLEAR_USER:
            return initialState
    }
}