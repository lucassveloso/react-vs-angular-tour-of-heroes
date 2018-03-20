import React from 'react';
import { Link } from 'react-router-dom';

export default ({ to, children, className }) => (
  <Link to={to} className={className}>{children}</Link>
);
