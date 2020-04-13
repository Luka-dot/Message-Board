import React from 'react';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="Error-Message">
      <section className="Error-Content">
        <h1>Page Not Found</h1>
        <NavLink to="/">Return to Homepage</NavLink>
      </section>
    </div>
  )
}