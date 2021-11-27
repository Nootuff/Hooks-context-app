import React, { Component, createContext } from "react";

export const LanguageContext = createContext(); //This const is exported. 

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: "english" }//The default language on page load
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event) {
        this.setState({ language: event.target.value });
    }

    render() {
        return (
            <LanguageContext.Provider
                value={{ ...this.state, changeLanguageFunc: this.changeLanguage /*The state and the function are exported.*/ }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;

//The function below is being used because you can't have two static contextType things in the same class based component. 
export const withLanguageContext = Component => props => ( /*Component and props are parameters, this function takes an entire component as the "component" argument. */
    <LanguageContext.Consumer>
      {value => <Component languageContext={value} {...props} />} 
    </LanguageContext.Consumer>
    /*"Component" is a placeholder, like a parameter, LanguageContext is a prop being passed in  and "value" is passed in, no idea what value actually is though, all the other props of the component are also passed in with "...props" */
  );