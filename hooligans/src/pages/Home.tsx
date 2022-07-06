import { useAuth0 } from '@auth0/auth0-react';

export const Home = () => {
    const { user } = useAuth0<{ nickname: string }>();
    const { isAuthenticated } = useAuth0();
    return (
        <h1>Welcome {isAuthenticated && user?.nickname} {!isAuthenticated && 'Home'}</h1>
    )
}