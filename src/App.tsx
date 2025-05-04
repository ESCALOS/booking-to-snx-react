import { useProcessFile } from "./hooks/useProcessFile";
import XmlContent from "./components/XmlContent";
import ZoneDraggingFile from "@components/ZoneDraggingFile";
import SelectTemplate from "@components/SelectTemplate";
import { templateOptions } from "constants";

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
      <div className="w-full max-w-md">
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
        <XmlContent xmlContent={xmlContent} handleDownload={handleDownload} />
      </div>
    </div>
  );
}

export default App;
