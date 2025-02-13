import React from "react";
import { FileFormat, TypeLanguage } from "src/enums/file.enum";
import { TypegenWrapper } from "src/layout/TypeLayout/TypegenWrapper";

const TypePage = () => {
  return <TypegenWrapper from={FileFormat.JSON} to={TypeLanguage.TypeScript} />;
};

export default TypePage;
