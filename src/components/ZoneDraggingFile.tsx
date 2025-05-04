import { useDragging } from "hooks/useDragging";
import { FileUp, Loader2 } from "lucide-react";

type Props = {
  processFile: (file: File) => void;
  isLoading: boolean;
  fileName: string | null;
};

export default function ZoneDraggingFile({
  processFile,
  isLoading,
  fileName,
}: Props) {
  const {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
  } = useDragging(processFile);
  return (
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
  );
}
