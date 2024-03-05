import React from "react";
import { BackForm, FooterButtons, Options } from "../formButtons";

const FormMenu = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row justify-between items-center px-5 py-10">
      <BackForm title={title} />

      <Options />

      <FooterButtons />
    </div>
  );
};

export default FormMenu;
