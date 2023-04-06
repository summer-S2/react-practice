import React, { useState } from 'react';
import useDarkSide from '../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState( colorTheme === 'light' ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked);
  }
  return (
    <div className='relative'>
      <div className='absolute left-4 top-5'>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
    </div>
  );
}

