import React, { ComponentType, Suspense } from "react";
import LayoutWithHeaderFooter from "../layouts/layout-with-header-footer";
import LoginOffCanvas from "../components/LoginOffCanvas"
const withHeader = (PageComponent) => {
  const WrappedComponent = (props) => {
    return (
      <LayoutWithHeaderFooter>
        <Suspense fallback={<div>Loading...</div>}>
          <PageComponent {...props} />
        </Suspense>
        <LoginOffCanvas /> 
      </LayoutWithHeaderFooter>
    );
  };

  return WrappedComponent;
};

export default withHeader;
