"use client";
// pages/feature.tsx
import React, { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import HeaderResume from "@/components/Pdf/HeaderResume";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";
import ExperienceComponent from "@/components/Pdf/ExperienceResume";

const FeaturePage = () => {
  const { data: session } = useSession();
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

  return (
    <div>
      <div className="flex justify-between mt-2 mx-5">
        <h1 className="text-center text-3xl">Preview Resume</h1>
        <Button onClick={handlePDF}>Generate PDF</Button>
      </div>
      <div className="m-4 border rounded-md">
        <div ref={pdfContentRef} className="bg-white text-black p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader className="w-24 h-24 animate-spin" />
            </div>
          ) : userAllData ? (
            <>
              <HeaderResume userData={userAllData.user} />
              {userAllData.experiences &&
                userAllData.experiences.map((experience: any, idx: number) => (
                  <ExperienceComponent experience={experience} />
                ))}
            </>
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
