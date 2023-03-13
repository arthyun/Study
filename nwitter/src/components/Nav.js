import React from 'react';
import { NavLink } from 'react-router-dom';

//Material UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Masonry from '@mui/lab/Masonry';

const preventDefault = (event) => event.preventDefault();
const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Nav = () => {

    return (
        <nav>
            <ul>
                <li>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        typography: 'body1',
                        '& > :not(style) + :not(style)': {
                        ml: 2,
                        },
                    }}
                    onClick={preventDefault}>
                    <Link to="/Profile" href="#" underline="none">
                        {'underline="none"'}
                    </Link>
                    <Link href="#" underline="hover">
                        {'underline="hover"'}
                    </Link>
                    <Link href="#" underline="always">
                        {'underline="always"'}
                    </Link>
                    {/* <Masonry columns={4} spacing={2}>
                        {heights.map((height, index) => (
                        <Item key={index} sx={{ height }}>
                            {index + 1}
                        </Item>
                        ))}
                    </Masonry> */}
                </Box>
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/Profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/EditProfile'>EditProfile</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;