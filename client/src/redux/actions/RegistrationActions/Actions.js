export const handleLogIn = (data) => {
    return{
        type: 'LOG_IN',
        payload:data
    }
}
export const handleLogOut = () => {
    return{
        type:'LOG_OUT'
    }
}