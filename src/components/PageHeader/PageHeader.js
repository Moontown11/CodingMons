import { StyledHeader } from "./StyledPageHeader";
import React from 'react';

const PageHeader = ({ className, title, description, children }) => (
  <StyledHeader className={className}>
    {title && <h1>{title}</h1>}
    {description && <p>{description}</p>}
    {children}
  </StyledHeader>
);

export default PageHeader;