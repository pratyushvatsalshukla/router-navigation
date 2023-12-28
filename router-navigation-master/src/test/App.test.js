import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; 

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Add assertions as needed
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
