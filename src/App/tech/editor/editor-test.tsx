import { EditorJs } from "./components/editor-js";
import { TinyEditor } from "./components/tiny-editor/tiny-editor";
import { Tiptap } from "./components/tiptap";

export function EditorTest() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="flex items-center justify-center w-[80rem] h-fit gap-4 ">
        <TinyEditor />
      </div>
      <div className="flex items-center justify-center w-full h-fit gap-4">
        <Tiptap />
        <EditorJs />
      </div>
    </div>
  );
}
