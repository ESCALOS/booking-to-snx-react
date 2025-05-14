import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { useProcessFile } from "./hooks/useProcessFile";
import { templateOptions } from "constants";

const XmlContent = lazy(() => import("./components/XmlContent"));
const ZoneDraggingFile = lazy(() => import("@components/ZoneDraggingFile"));
const SelectTemplate = lazy(() => import("@components/SelectTemplate"));

function App() {
  const {
    processFile,
    isLoading,
    fileName,
    xmlContent,
    selectedTemplate,
    setSelectedTemplate,
    handleDownload,
  } = useProcessFile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#651b1b] to-[#d35f5f] flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center py-10">
              <Loader2 className="w-12 h-12 text-[#ffcaca] animate-spin mb-4" />
              <p className="text-white text-lg">Cargando componentes...</p>
            </div>
          }
        >
          <SelectTemplate
            templateOptions={templateOptions}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
          <ZoneDraggingFile
            processFile={processFile}
            isLoading={isLoading}
            fileName={fileName}
          />
          <XmlContent
            xmlContent={xmlContent}
            handleDownload={handleDownload}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
