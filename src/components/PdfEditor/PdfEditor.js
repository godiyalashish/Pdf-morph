// PdfEditor.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PdfPage from "../PdfPage/PdfPage";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

const PdfEditor = () => {
  const pages = useSelector((store) => store.file.pages);
  const removedPages = useSelector((store) => store.file.pagesToDelete);
  const file = useSelector((store) => store.file.file);
  const [modifiedPdfData, setModifiedPdfData] = useState(null);

  const downloadModifiedPDF = async () => {
    if (!file || removedPages.size === 0) return;

    const pdfDoc = await PDFDocument.load(await file.arrayBuffer());

    removedPages.forEach((pageNumber) => {
      if (pageNumber >= 0 && pageNumber < pdfDoc.getPageCount()) {
        pdfDoc.removePage(pageNumber);
      }
      // console.log(pageNumber)
    });

    const modifiedPdfBytes = await pdfDoc.save();
    const modifiedPdfBlob = new Blob([modifiedPdfBytes], {
      type: "application/pdf",
    });

    setModifiedPdfData(modifiedPdfBlob);
    saveAs(modifiedPdfBlob, "modified.pdf");
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl pb-4 text-secondary font-bold">
        Select Pages to remove
      </p>
      {removedPages.size > 0 ? (
        <p
          className="p-2 bg-secondary mb-2 cursor-pointer text-primary rounded-md transition-opacity duration-300 hover:opacity-70"
          onClick={downloadModifiedPDF}
        >
          Download Modified Pdf
        </p>
      ) : null}
      <div className="border-4 border-dashed border-bor p-6 bg-primary mx-auto flex flex-wrap gap-2 justify-center">
        {pages.map((page, index) => (
          <PdfPage page={page.imageData} key={index} pageNo={page.pageNumber} />
        ))}
      </div>
    </div>
  );
};

export default PdfEditor;
