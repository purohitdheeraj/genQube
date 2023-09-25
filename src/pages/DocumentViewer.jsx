// import React from "react";
import { useLocation } from "react-router-dom";
import DocViewer from "react-doc-viewer";

export const DocumentViewer = () => {
  const location = useLocation();
  const { downloadURL } = location.state;

  const documents = [{ uri: downloadURL }];

  return (
    <div className="document-viewer">
      Document
      <DocViewer documents={documents} />
    </div>
  );
};
