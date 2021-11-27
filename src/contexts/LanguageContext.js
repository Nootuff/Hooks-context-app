import React, { createContext, useState } from "react";

export const LanguageContext = createContext(); //This const is exported. 

function LanguageProvider(props){
    
    const [language, changeLanguage] = useState("english") //language initially set to language, changeLanguage is the function that changes it.
        
    const setLanguage = (event) => changeLanguage(event.target.value); 

        return (
            <LanguageContext.Provider
                value={{ languageValue:language, setLanguageFunc: setLanguage /*The state of language and the function to change it are exported.*/ }} >
                {props.children} {/*props.children is a placeholded */}
            </LanguageContext.Provider>
        );
}

export default LanguageProvider;

