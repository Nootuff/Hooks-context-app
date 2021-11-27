import React, { createContext, useState } from "react";

export const LanguageContext = createContext(); //This const is exported, name has to be the same as the provider below? 

function LanguageProvider(props){
    
    const [language, changeLanguage] = useState("english") //language initially set to language, changeLanguage is the function that changes it.
        
    const setLanguage = (event) => changeLanguage(event.target.value); 

        return (
            <LanguageContext.Provider
                value={{ languageValue:language, setLanguageFunc: setLanguage /*The state of language and the function to change it are passed as props in this opening element*/ }} >
                {props.children} {/*props.children is a placeholder, like a parameter. */}
            </LanguageContext.Provider>
        );
}

export default LanguageProvider;

