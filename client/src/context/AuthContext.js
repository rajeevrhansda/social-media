import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {
        "_id": "62c9ccb54c31c8e191ebda26",
        "username": "Rajeev",
        "email": "rajeev@test.com",
        "profilePicture": "person/10.jpeg",
        "coverPicture": "",
        "followers": ["62c9d19d558fdc48c94ee5f8", "62c9cca24c31c8e191ebda24"],
        "followings": ["62c9cca24c31c8e191ebda24", "62c9d19d558fdc48c94ee5f8"],
        "isAdmin": false,
        "createdAt": "2022-07-09T18:45:09.827+00:00",
        "updatedAt": "2022-07-12T08:36:38.293+00:00",
        "city": "Jharkhand",
        "desc": "Hey i am Rajeev",
        "from": "India",
        "relationship": 1
    },
    isFetching: false,
    error: false,

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}