import React from "react";

const header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg border-b-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold text-yellow-500">Twingle</h1>
        <p className="text-gray-300 text-sm mt-2">
          The Gold Standard for Premium Services
        </p>
      </div>
    </header>
  );
};

export default header;
