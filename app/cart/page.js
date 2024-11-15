'use client'
import React from "react";
import WizardForm from './components/WizardForm';
import withHeader from "../../hoc/withHeader";

const page = () => {
  return (
    <div>
      <WizardForm />
    </div>
  );
};

export default withHeader(page);
