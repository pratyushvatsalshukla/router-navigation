import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; 

test('renders Login component for initial route', () => {
    render(<App />);
    const subTitle = screen.getAllByText(/Login/i);
    expect(subTitle[0]).toBeInTheDocument();
});