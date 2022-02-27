import React from 'react';
import { setTheme, getTheme } from '../../features/home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

export function ThemeSwitch() {
    
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();

    function handleThemeChange(e){
        dispatch(setTheme(e.target.value));
      }

    return (
        <div className="theme-container">
          <div className="switch">
            <input className="hidden-input" id="radio-a" type="radio" name="theme" value="light" onChange={e => handleThemeChange(e)}/>
            <label className="switch-button label-left" htmlFor="radio-a"></label>
            <input className="hidden-input" id="radio-b" type="radio" name="theme" value="dark" onChange={e => handleThemeChange(e)}/>
            <label className="switch-button label-right" htmlFor="radio-b"></label>
            <span className={"theme-indicator " + (theme === 'light' ? 'left' : 'right')}></span>
          </div>
        </div>
  );
}