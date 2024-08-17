"use client";
// pages/feature.tsx
import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import HeaderResume from "@/components/Pdf/HeaderResume";
import { userData } from "@/lib/UserData";

const FeaturePage = () => {
  const pdfContentRef = useRef<HTMLDivElement>(null);

  const handlePDF = async () => {
    if (pdfContentRef.current) {
      const canvas = await html2canvas(pdfContentRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      console.log(imgData);
      const doc = new jsPDF("p", "mm", "a4");
      doc.addImage(imgData, "PNG", 10, 0, 190, 0); // Adjust position and size as needed
      doc.save("mypdf.pdf");
    }
  };

  return (
    <div>
      <h1>Feature Page</h1>
      <Button onClick={handlePDF}>Generate PDF</Button>
      <div className="m-4 border">
        <div ref={pdfContentRef} className="bg-white text-black">
          <HeaderResume userData={userData} />
          <hr className="w-4/5 m-auto mb-2" />
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
