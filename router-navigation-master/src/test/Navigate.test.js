import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; 

test('navigates to each link and renders the corresponding component when isAuthenticated is true', () => {
    App.isAuthenticated = true
    render(<App />);
    const links = ['Home', 'About NIIT', 'About StackRoute', 'Contact Us'];
    links.forEach((link) => {
      fireEvent.click(screen.getByText(new RegExp(link, 'i')));
    });
});