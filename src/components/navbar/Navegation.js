import React from 'react';
import { Navbar, NavItem, Container } from 'react-materialize';
import injectSheet from 'react-jss';
import Colors from '../../utils/colors';

const styles = {
    nav: {
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: Colors.darkPrimaryColor,
        color: Colors.lightPrimaryColor
    }
}

const Navegation = ({ classes }) => {

    return (
        <Navbar brand='MarieDu' right className={classes.nav}>
            <NavItem href='#noivos'>Os Noivos</NavItem>
            <NavItem href='#festa'>A Festa</NavItem>
            <NavItem href='components.html'>A Lua de Mel</NavItem>
        </Navbar>
    );
}

export default injectSheet(styles)(Navegation);