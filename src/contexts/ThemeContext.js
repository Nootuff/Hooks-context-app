import React, { Component, createContext } from "react";

export const ThemeContext = createContext(); //This const is exported. 

class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { isDarkMode: true }
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({isDarkMode: !this.state.isDarkMode}) //Changes isDarkMode's value to the oposite of what it is currently. 
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleThemeFunc: this.toggleTheme }}>{/*All components that fall inside this.props.children will have access to the value. You can only have 1 value in here though but it is a value and you can put multiple items in it. */}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;