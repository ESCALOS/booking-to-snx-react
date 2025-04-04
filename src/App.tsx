import { FileUp, Loader2, Download } from "lucide-react";

import { useDragging } from "./hooks/useDragging";
import { useProcessFile } from "./hooks/useProcessFile";

function App() {
  const {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
  } = useDragging();
  const { isLoading, fileName, xmlContent, handleDownload } = useProcessFile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B4965] to-[#5FA8D3] flex items-center justify-center p-4">
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
                <Loader2 className="w-12 h-12 text-[#CAE9FF] animate-spin mb-4" />
                <p className="text-[#CAE9FF]">Procesando {fileName}...</p>
              </>
            ) : (
              <>
                <FileUp className="w-12 h-12 text-[#CAE9FF] mb-4" />
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

        {xmlContent && (
          <div className="bg-[#1B4965]/20 rounded-lg p-4 border border-[#CAE9FF]/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#CAE9FF] font-medium">XML Generado</h3>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-[#1B4965] text-[#CAE9FF] px-4 py-2 rounded-md hover:bg-[#1B4965]/80 transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar XML
              </button>
            </div>
            <pre className="bg-[#1B4965]/40 p-4 rounded-md overflow-x-auto text-[#CAE9FF] text-sm">
              {xmlContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
