import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import type { Editor as TinyMCEEditor } from "tinymce";

export function TinyEditor() {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      // getContent()로 HTML 가져오기
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-3xl font-bold mb-10 text-blue-500">TinyMCE Editor</p>
      <div className="relative w-full  p-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
        <Editor
          tinymceScriptSrc={`${process.env.PUBLIC_URL}/tinymce/tinymce.min.js`}
          onInit={(_, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "insertdatetime",
              "media",
              "table",
              "fontfamily",
              "fontsize",
            ],
            toolbar:
              "fontfamily fontsize  bold italic underline strikethrough subscript superscriptforecolor backcolor " +
              "bullist numlist  | table blockquote link  image media code |alignleft aligncenter alignright alignjustify outdent indent| removeformat undo redo ",

            branding: false,
            promotion: false,
            resize: false,
            statusbar: false,
          }}
        />

        <button
          onClick={log}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          로그 확인
        </button>
      </div>
    </div>
  );
}
