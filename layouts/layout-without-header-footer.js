// src/app/frontend/layout-without-header-footer.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LayoutWithoutHeaderFooter = ({ children }) => (
  <main>{children}</main>
);

export default LayoutWithoutHeaderFooter;
