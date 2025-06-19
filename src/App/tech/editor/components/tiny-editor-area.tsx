import { useState } from "react";
import { CkEditor } from "./ckeditor/ckeditor";
import { sampleVersionList } from "./tiny-editor-area/sample-version-list";
import { VersionSelectModal } from "./tiny-editor-area/version-select-modal";
import { TinyEditor } from "./tiny-editor/tiny-editor";

export function TinyEditorArea() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const handleContentApply = (newContent: string) => {
    setContent(newContent);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full items-center justify-center flex flex-col px-10 gap-12">
      <div className="flex items-center justify-center w-[90rem] ">
        <TinyEditor content={content} setContent={setContent} />
      </div>
      <button
        className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 mt-4 w-48 h-20"
        onClick={() => setIsModalOpen(true)}
        type="button"
      >
        버전 관리
      </button>
      <div className="flex items-center justify-center w-[90rem] ">
        <CkEditor content={content} setContent={setContent} />
      </div>
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
