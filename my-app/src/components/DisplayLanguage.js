import React from 'react';
import { LanguageContext } from './LanguageContext';

const DisplayLanguage = () => {
  return (
    <div>
      <h1>Selected Language:</h1>
      
      <LanguageContext.Consumer>
        {(language) => <h1>{language}</h1>}
      </LanguageContext.Consumer>
    </div>
  );
};

export default DisplayLanguage;
