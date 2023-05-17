import React, { createContext, useState} from "react"

const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <LanguageContext.Provider value={language}>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
      {children}
    </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider };