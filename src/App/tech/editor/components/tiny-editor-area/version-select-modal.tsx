import { useState } from "react";
import { EditorVersion } from "./type";
import { VersionList } from "./version-list";
import { VersionPreview } from "./version-preview";

type VersionModalProps = {
  versions: EditorVersion[];
  onApply: (content: string) => void;
  onClose: () => void;
};

export function VersionSelectModal({
  versions,
  onApply = () => {},
  onClose = () => {},
}: VersionModalProps) {
  const [selected, setSelected] = useState<EditorVersion | null>(null);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[80rem] min-h-72 flex flex-col p-10 gap-4 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          type="button"
          aria-label="닫기"
        >
          ×
        </button>
        <div className="flex">
          <VersionPreview version={selected} />
          <VersionList
            versions={versions}
            onSelect={(v) => setSelected(v)}
            selectedId={selected?.id}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            className="w-[20%] px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-colors duration-200 mt-4 h-10 font-medium text-base"
            onClick={() => selected && onApply(selected.content)}
            type="button"
            disabled={!selected}
          >
            선택한 버전으로 적용
          </button>
        </div>
      </div>
    </div>
  );
}
