import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="Header">
      <section className="Header-Content">
        <section className="Logo">
          <h1>Message Board</h1>
        </section>
        <Link to="/new-note">Post New Note</Link>
      </section>
    </div>
  )
}
