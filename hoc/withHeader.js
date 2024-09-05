import React, { ComponentType, Suspense } from "react";
import LayoutWithHeaderFooter from "../layouts/layout-with-header-footer";
const withHeader = (PageComponent) => {
  const WrappedComponent = (props) => {
    return (
      <LayoutWithHeaderFooter>
        <Suspense fallback={<div>Loading...</div>}>
          <PageComponent {...props} />
        </Suspense>
      </LayoutWithHeaderFooter>
    );
  };

  return WrappedComponent;
};

export default withHeader;
