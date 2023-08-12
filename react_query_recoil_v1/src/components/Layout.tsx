import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    background: #ccc;
`
const NavComponent = styled.nav`
    background: #ddd;
`
const UlComponent = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
`
const LiComponent = styled.li`
    border: 1px solid blue;
    a {
        display: block;
        padding: 1rem 1.25rem;
        text-decoration: none;
        color: #333;
    }
    a:hover {
        background: blue;
        color: #fff;
    }
    .active {
        text-decoration: none;
        font-weight: bold;
    }
`

const Layout = () => {
    return (
        <>
            <HeaderComponent>
                <NavComponent>
                    <UlComponent>
                        <LiComponent>
                            <NavLink to='/'>Home</NavLink>
                        </LiComponent>
                        <LiComponent>
                            <NavLink to='/about'>About</NavLink>
                        </LiComponent>
                    </UlComponent>
                </NavComponent>
            </HeaderComponent>

            <Outlet />
        </>
    )
}

export default Layout