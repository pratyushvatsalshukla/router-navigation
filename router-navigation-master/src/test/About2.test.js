import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders About StackRoute when StackRoute is sent as url parameter', () => {
    App.isAuthenticated = true
    render(<App />);
    fireEvent.click(screen.getByText(new RegExp('About StackRoute', 'i')));
    // Assert that the child component is rendered when isAuthenticated is true
    const subTitle = screen.getAllByText(/About StackRoute/i);
    expect(subTitle[0]).toBeInTheDocument();
});