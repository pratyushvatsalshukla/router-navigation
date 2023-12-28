import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; 

test('renders login when isAuthenticated is false', () => {
    App.isAuthenticated = false
    render(<App />);
    // Assert that the login component is rendered when isAuthenticated is false
    const subTitle = screen.getAllByText(/Login/i);
    expect(subTitle[0]).toBeInTheDocument();
});