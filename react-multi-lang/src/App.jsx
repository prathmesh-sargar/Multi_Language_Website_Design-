import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const { i18n } = useTranslation();

  const changeLang = (e) => i18n.changeLanguage(e.target.value);

  return (
    <div>
      <select onChange={changeLang} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
      </select>

      <Home />
      <Contact />
    </div>
  );
}

export default App;
