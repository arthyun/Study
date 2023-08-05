import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';


const NavUl = styled.ul`
    display: flex;
    gap: 1rem;
    width: 100%;
    list-style: none;
`;
const NavLi = styled.li`
    width: 33.33%;
`;
const NavLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: #fff;
    transition: all .3s;
    &:hover {
        background: blue;
        color: #fff;
    }
`;


const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavUl>
                        <NavLi>
                            <NavLink to='/'>1번탭</NavLink>
                        </NavLi>
                        <NavLi>
                            <NavLink to='/2'>2번탭</NavLink>
                        </NavLi>
                        <NavLi>
                            <NavLink to='/3'>3번탭</NavLink>
                        </NavLi>
                    </NavUl>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export default Layout