import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../components/Home';

test('renders Home when isAuthenticated is true', () => {
    render(
      <Router>
        <PrivateRoute isAuthenticated={true}><Home/></PrivateRoute>
      </Router>
    );
    // Assert that the child component is rendered when isAuthenticated is true
    const subTitle = screen.getAllByText(/Welcome/i);
    expect(subTitle[0]).toBeInTheDocument();
});