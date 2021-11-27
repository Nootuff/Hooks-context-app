import React, { Component, useContext } from "react"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import '../styles/NavbarStyles.css';
import { ThemeContext } from "../contexts/ThemeContext"; //Imports the ThemeContext const from ThemeContext.
import { LanguageContext } from "../contexts/LanguageContext"; //Imports everything from LanguageContext.

const content = {
    english: {
        title: "App Title",
        search: "Search",
        flag: "english flag"
    },
    french: {
        title: "Appli Titre",
        search: "Chercher",
        flag: "french flag"
    },
    spanish: {
        title: "Aplicación Título",
        search: "Buscar",
        flag: "spanish flag "
    }
};

function Navbar(props) {

    const { isDarkMode, toggleThemeFunc } = useContext(ThemeContext); //Destructured const, contains the value of isDarkMode & toggleThemeFunc.
    const  languageValue  = useContext(LanguageContext).languageValue; //This is non destructured, languageValue is one of the props passed in from LanguageContext. The destructured version would look like: 
    //const { languageValue } = useContext(LanguageContext);
    const { search, flag, title } = content[languageValue];

    return (
        <div>
            <AppBar position="static" color={isDarkMode ? "primary" : "default" /*Ternary operator, looks at the value of isDarkMode in the ThemeContext file*/}>
                <Toolbar>
                    <IconButton color="inherit" >
                        <span>{flag}</span>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                    <Switch color="secondary" onChange={toggleThemeFunc /*Uses the function defined in ThemeContext*/} />
                    <Paper className="container" >
                        <InputBase
                            className="search"
                            placeholder={search + "..."}
                        />
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon className="searchIcon" />
                        </IconButton>
                    </Paper>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Navbar;