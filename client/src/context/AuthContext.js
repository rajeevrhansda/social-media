import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: null,
    isFecthing: false,
    error: false,

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dipatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFecthing: state.isFecthing,
                error: state.error,
                dipatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}