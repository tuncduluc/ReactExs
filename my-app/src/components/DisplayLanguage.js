import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h2>Selected Language: {language}</h2>
    </div>
  );
};

export default DisplayLanguage;
