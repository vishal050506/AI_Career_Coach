import { useState } from "react";
import { assets } from "../assets/assets";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(true); // Show dialog by default

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Always visible dialog box */}
      {showDialog && (
        <div className="absolute bottom-20 right-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-gray-800">Hello! 👋</h4>
          </div>
          <p className="text-sm text-gray-600"> Career guidance? I can help!</p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-3 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition-colors"
          >
            Open Me
          </button>
        </div>
      )}

      {/* AI Assistant toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-white shadow-[0_4px_6px_-1px_rgba(249,115,22,0.3),0_2px_40px_-2px_rgba(249,115,22,0.3)] flex items-center justify-center hover:bg-gray-50  transition-colors"
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
      >
        <img
          src={assets.ai}
          alt="AI Assistant"
          className={`w-20 h-20 object-contain transition-transform ${
            isOpen ? "rotate-180" : "hover:scale-110"
          }`}
        />
      </button>

      {/* AI Assistant iframe (when opened) */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[600px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://aakash1402-clearolivekoi.web.val.run/"
            title="AI Assistant"
            className="w-full h-full border-0"
          />
        </div>
      )}
    </div>
  );
}
