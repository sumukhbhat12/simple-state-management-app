import { useSelector } from 'react-redux';
export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);
    return(
        username === ''?
            <h1>Welcome to Home page!</h1>
         : <h1>Welcome to Home page, {username}</h1>
    )
}