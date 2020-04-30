import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const history = useHistory();
    const username = localStorage.getItem("username") ? localStorage.getItem("username") : "";
    const logout = () => {
        localStorage.clear("token");
        localStorage.clear("username");
        history.push('/');
    }
    return (
        <NavContainer>
            <GroupsContainer>
                <NavGroup>
                    <p style={{ paddingBottom: '3px', marginRight: '10px' }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">RentTracker</Link>
                    </p>
                    <Button><Link style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">Home</Link></Button>
                </NavGroup>
                <NavGroup>
                    <Button>Signed In As {username}</Button>
                    <Button onClick={logout} style={{ marginLeft: '10px' }}>Sign Out</Button>
                </NavGroup>
            </GroupsContainer>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    background-color: white;
`;

const GroupsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-left: 10%;
`;

const NavGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

const Button = styled.button`
    background-color: white;
    border: none;
    font-size: 14px;
    &:hover {
        background-color: #eee;
    }
  }
`;

export default Navbar;