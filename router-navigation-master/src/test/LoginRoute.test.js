import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; 
test('renders Login component for /login route', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText(/Login/i)[0]);
    const subTitle = screen.getAllByText(/Login/i);
    expect(subTitle[0]).toBeInTheDocument();
});