import {
  BubbleMenu,
  EditorContent,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];
const content = "<p>Hello World! 🌍</p>";

export function Tiptap() {
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) return null;

  return (
    <div className="flex flex-col h-screen w-1/2  items-center justify-center">
      <p className="text-3xl font-bold mb-10 text-blue-500">TipTab</p>
      <div className="relative w-full max-w-2xl p-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200  ">
        {/* 에디터 본문 */}
        <EditorContent
          editor={editor}
          className="prose prose-lg max-w-none focus:outline-none overflow-auto  max-h-[320px]"
        />

        {/* FloatingMenu */}
        <FloatingMenu editor={editor}>
          <div className="flex gap-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
            <button className="px-2 py-1 rounded hover:bg-blue-100 text-sm font-medium">
              + 블록
            </button>
            <button className="px-2 py-1 rounded hover:bg-blue-100 text-sm font-medium">
              이미지
            </button>
          </div>
        </FloatingMenu>

        {/* BubbleMenu */}
        <BubbleMenu editor={editor}>
          <div className="flex gap-2 bg-black/80 rounded-lg px-3 py-2 shadow-lg">
            <button
              className="text-white hover:text-yellow-300 font-bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              B
            </button>
            <button
              className="text-white hover:text-blue-300 italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              I
            </button>
          </div>
        </BubbleMenu>
      </div>
    </div>
  );
}
