import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import NavBar from '../Nav/NavBar';


test('should render Navbar component',() =>{
    render(<NavBar/>);
    const NavBarElement = screen.getByTestId('test-1'); 
    expect(NavBarElement).toBeInTheDocument();
})