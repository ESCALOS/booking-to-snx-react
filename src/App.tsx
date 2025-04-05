import { FileUp, Loader2 } from "lucide-react";

import { useDragging } from "./hooks/useDragging";
import { useProcessFile } from "./hooks/useProcessFile";
import XmlContent from "./components/XmlContent";

function App() {
  const { processFile, isLoading, fileName, xmlContent, handleDownload } =
    useProcessFile();
  const {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
  } = useDragging(processFile);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#651b1b] to-[#d35f5f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div
          className={`
            relative border-2 border-dashed rounded-lg p-8 mb-4
            ${
              isDragging
                ? "border-[#CAE9FF] bg-[#1B4965]/40"
                : "border-[#CAE9FF]/50 bg-[#1B4965]/20"
            }
            transition-all duration-200 ease-in-out
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".xlsx,.xls"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileInput}
          />

          <div className="flex flex-col items-center justify-center text-center">
            {isLoading ? (
              <>
                <Loader2 className="w-12 h-12 text-[#ffcaca] animate-spin mb-4" />
                <p className="text-[#CAE9FF]">Procesando {fileName}...</p>
              </>
            ) : (
              <>
                <FileUp className="w-12 h-12 text-[#ffcaca] mb-4" />
                <p className="text-[#CAE9FF] text-lg font-medium mb-2">
                  Arrastra tu archivo Excel aquí
                </p>
                <p className="text-[#CAE9FF]/80 text-sm">
                  o haz clic para seleccionar
                </p>
              </>
            )}
          </div>
        </div>
        <XmlContent xmlContent={xmlContent} handleDownload={handleDownload} />
      </div>
    </div>
  );
}

export default App;
