import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import ResultTable from "../../components/ResultTable";
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";

const ElectionResult = () => {
  const { id } = useParams();
  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);
  const electionData = useOutletContext();

  useEffect(() => {
    setPreLoader(true);
    const getBallot = async () => {
      try {
        const { data } = await axios.get(`/api/v1/ballot/election/${id}`);
        setPreLoader(false);
        setBallots(data);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setPreLoader(false);
        toast.error(message);
      }
    };
    getBallot();
  }, [id]);

  if (preLoader) {
    return <Loader />;
  }

  // Function to generate and download the Word document
  const generateWordDoc = () => {
    const doc = new Document();

    // Title
    doc.addSection({
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: `Election Results for ${electionData?.title}`,
              bold: true,
              size: 28,
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Blank line
      ],
    });

    // Create table rows
    const tableRows = [
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph("Ballot Title")],
          }),
          new TableCell({
            children: [new Paragraph("Voting Option")],
          }),
          new TableCell({
            children: [new Paragraph("Votes")],
          }),
          new TableCell({
            children: [new Paragraph("Percentage")],
          }),
        ],
      }),
    ];

    // Populate table with data
    ballots.forEach((ballot) => {
      ballot.votingOptions.forEach((option) => {
        const totalVotes = ballot.votingOptions.reduce(
          (sum, opt) => sum + opt.votes.length,
          0
        );
        const percentage = ((option.votes.length / totalVotes) * 100).toFixed(
          2
        );

        tableRows.push(
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph(ballot.title)] }),
              new TableCell({ children: [new Paragraph(option.name)] }),
              new TableCell({
                children: [new Paragraph(`${option.votes.length}`)],
              }),
              new TableCell({ children: [new Paragraph(`${percentage}%`)] }),
            ],
          })
        );
      });
    });

    // Add table to the document
    doc.addSection({
      children: [
        new Table({
          rows: tableRows,
        }),
      ],
    });

    // Save the document as a .docx file
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${electionData?.title}_results.docx`);
      toast.success("Document downloaded successfully!");
    });
  };

  return (
    <div className="p-6">
      {ballots.length > 0 ? (
        <>
          <h2 className="text-center capitalize text-lg mb-5 font-medium text-gray-700">
            Track real-time result of{" "}
            <span className="text-blue-500">{electionData?.title}</span>{" "}
            Election
          </h2>

          {/* Download Button for Word Document */}
          <div className="flex justify-center mb-5">
            <button
              onClick={generateWordDoc}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Download Election Data
            </button>
          </div>

          <div className="flex flex-col gap-10">
            <div className="w-[60%] mx-auto">
              {ballots.map((ballot) => {
                return <ResultTable key={ballot?._id} ballot={ballot} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center min-h-[70vh] items-center h-full w-full">
          <p className="text-center text-gray-500 col-span-full">
            No ballots available.
          </p>
        </div>
      )}
    </div>
  );
};

export default ElectionResult;
