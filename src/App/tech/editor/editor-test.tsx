import { EditorJs } from "./components/editor-js";
import { TinyEditorArea } from "./components/tiny-editor-area";
import { Tiptap } from "./components/tiptap";

export function EditorTest() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 ">
      <div className="h-72" />
      <TinyEditorArea />
      <div className="flex items-center justify-center w-full h-fit gap-4">
        <Tiptap />
        <EditorJs />
      </div>
    </div>
  );
}
