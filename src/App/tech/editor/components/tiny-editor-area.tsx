import { useState } from "react";
import { sampleVersionList } from "./tiny-editor-area/sample-version-list";
import { VersionSelectModal } from "./tiny-editor-area/version-select-modal";
import { TinyEditor } from "./tiny-editor/tiny-editor";

export function TinyEditorArea() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const handleContentApply = (newContent: string) => {
    console.log("선택한 버전의 내용:", newContent);
    setContent(newContent);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full items-center justify-center flex flex-col ">
      <div className="flex items-center justify-center w-[80rem] ">
        <TinyEditor content={content} setContent={setContent} />
      </div>
      <button
        className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200 mt-4"
        onClick={() => setIsModalOpen(true)}
        type="button"
      >
        버전 관리
      </button>
      {isModalOpen && (
        <VersionSelectModal
          versions={sampleVersionList}
          onApply={handleContentApply}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
