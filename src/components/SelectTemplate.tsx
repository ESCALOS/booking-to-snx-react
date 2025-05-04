import { ListFilter } from "lucide-react";
import { TemplateOption, TemplateValue } from "types";

type Props = {
  templateOptions: TemplateOption[];
  setSelectedTemplate: (template: TemplateValue) => void;
  selectedTemplate: TemplateValue;
};

export default function SelectTemplate({
  templateOptions,
  setSelectedTemplate,
  selectedTemplate,
}: Props) {
  return (
    <div className="bg-[#1B4965]/20 rounded-lg p-4 mb-4 border border-[#CAE9FF]/30">
      <div className="flex items-center gap-2 text-[#CAE9FF] mb-2">
        <ListFilter className="w-5 h-5" />
        <label htmlFor="template" className="font-medium">
          Seleccionar Plantilla
        </label>
      </div>
      <select
        id="template"
        value={selectedTemplate}
        onChange={(e) => setSelectedTemplate(e.target.value as TemplateValue)}
        className="w-full bg-[#651b1b] text-[#ffcaca] rounded-md p-2 border border-[#ffcaca]/30 focus:outline-none focus:border-[#ffcaca]"
      >
        {templateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
