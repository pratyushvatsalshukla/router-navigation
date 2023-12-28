import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // Make sure to import your App component

test('renders About NIIT when NIIT is sent as url parameter', () => {
    App.isAuthenticated = true
    render(<App />);
    fireEvent.click(screen.getByText(new RegExp('About NIIT', 'i')));
    // Assert that the child component is rendered when isAuthenticated is true
    const subTitle = screen.getAllByText(/About NIIT/i);
    expect(subTitle[0]).toBeInTheDocument();
});