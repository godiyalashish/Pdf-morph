// PdfEditor.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PdfPage from '../PdfPage/PdfPage';

const PdfEditor = () => {
  const pages = useSelector((store) => store.file.pages);

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl pb-4 text-secondary font-bold">Select Pages to remove</p>
      <div
        className="border-4 border-dashed border-bor p-6 bg-primary mx-auto flex flex-wrap gap-2 justify-center"
      >
        {pages.map((page, index) => (
          <PdfPage
            page={page.imageData}
            key={index}
            pageNo={page.pageNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default PdfEditor;
