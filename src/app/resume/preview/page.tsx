"use client";
// pages/feature.tsx
import React, { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";
import FullPdf from "@/components/Pdf/FullPdf";
const FeaturePage = () => {
  const { data: session } = useSession();

  const [userAllData, setUserAllData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/user/${session?.user._id}/resume`
        );
        const data = response.data;
        if (data.success) {
          setUserAllData(data.data); // Set the fetched data to state
        } else {
          toast({
            title: "Education fetch failed",
            description: data.message || "Failed to fetch education details",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An error occurred while fetching education details.",
          variant: "destructive",
        });
        console.error("Failed to fetch education details:", error);
      }
      setLoading(false);
    };

    if (session?.user._id) {
      fetchData();
    }
  }, [session?.user._id]);

  const constextRef = useRef(null);
  const handlePDF = async () => {
    try {
      if (constextRef.current) {
        const inputData = constextRef.current;

        // Generate canvas from the input data
        const canvas = await html2canvas(inputData, { scale: 2 });

        // Get image data from the canvas
        const imgData = canvas.toDataURL("image/png");

        // Create a new jsPDF document
        const doc = new jsPDF({
          orientation: "portrait", // or "landscape" if needed
          unit: "px",
          format: [canvas.width, canvas.height], // Match the canvas size to the PDF size
        });

        // Calculate the maximum dimensions of the PDF page
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // Calculate scaling to fit the image to the PDF page size
        const scaleX = pageWidth / canvas.width;
        const scaleY = pageHeight / canvas.height;
        const scale = Math.min(scaleX, scaleY); // Fit image while maintaining aspect ratio

        // Calculate the new dimensions of the image
        const imgWidth = canvas.width * scale;
        const imgHeight = canvas.height * scale;

        // Calculate position to center the image on the page
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        // Add the image to the PDF
        doc.addImage(imgData, "PNG", x, 0, imgWidth, imgHeight);

        // Save the PDF
        doc.save("mypdf.pdf");
      }
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between mt-2 mx-5">
        <h1 className="text-center text-3xl">Preview Resume</h1>
        <Button onClick={handlePDF}>Generate PDF</Button>
      </div>
      <div className="m-4 rounded-md">
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader className="w-24 h-24 animate-spin" />
            </div>
          ) : userAllData ? (
            <div ref={constextRef} className="p-8 grid  border rounded-xl">
              <FullPdf userAllData={userAllData} />
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-600">No data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
