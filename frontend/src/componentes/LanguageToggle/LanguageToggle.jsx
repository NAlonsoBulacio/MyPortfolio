import React from 'react';
import { useLanguage } from '../Language/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <button 
    onClick={handleToggle}
    style={{
      backgroundColor: '#4d5964a7',
      color: '#fff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s ease',
    }}>
      {language === 'es' ? 'English' : 'Español'}
    </button>
  );
};

export default LanguageToggle;