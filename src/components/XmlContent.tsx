import { Download } from "lucide-react";

type Props = {
  xmlContent: string | null;
  handleDownload: () => void;
};

export default function XmlContent({ handleDownload, xmlContent }: Props) {
  return (
    xmlContent && (
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
        <pre className="bg-[#1B4965]/40 p-4 rounded-md overflow-auto text-[#CAE9FF] text-sm max-h-96">
          {xmlContent}
        </pre>
      </div>
    )
  );
}
