import React from "react";
import { DotLoader } from "react-spinners";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <DotLoader color="#059669" />
    </div>
  );
};

export default Spinner;
