const AuthGuard = ({children}) => {
    console.log("Auth guard")
    return  children;
}

export default AuthGuard;