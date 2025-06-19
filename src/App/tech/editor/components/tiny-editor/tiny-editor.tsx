import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import type { Editor as TinyMCEEditor } from "tinymce";

// HTML 이스케이프 함수
function escapeHtml(html: string): string {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// HTML 언이스케이프 함수
function unescapeHtml(escaped: string): string {
  return escaped.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

export function TinyEditor() {
  const [isHtmlMode, setIsHtmlMode] = useState<boolean>(false);
  const [content, setContent] = useState<string>("<p>안녕하세요</p>");
  const editorRef = useRef<TinyMCEEditor | null>(null);

  // 모드 전환 함수
  const toggleMode = (): void => {
    const editor: TinyMCEEditor | null = editorRef.current;
    if (!editor) return;

    if (!isHtmlMode) {
      // 위즈윅 → HTML
      const html: string = editor.getContent();
      setContent(html);
      editor.setContent(`<pre>${escapeHtml(html)}</pre>`);
      setIsHtmlMode(true);
    } else {
      // HTML → 위즈윅
      const code: string = editor.getContent({ format: "text" });
      const html: string = unescapeHtml(code.replace(/^<pre>|<\/pre>$/g, ""));
      setContent(html);
      editor.setContent(html);
      setIsHtmlMode(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-3xl font-bold mb-10 text-blue-500">TinyMCE Editor</p>
      <div className="relative w-full p-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
        <Editor
          tinymceScriptSrc={`${process.env.PUBLIC_URL}/tinymce/tinymce.min.js`}
          onInit={(_: unknown, editor: TinyMCEEditor) => {
            editorRef.current = editor;
            editor.setContent(content);
          }}
          init={{
            language: "ko_KR",
            language_url: `${process.env.PUBLIC_URL}/tinymce/langs/ko_KR.js`,
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
              "fontfamily fontsize bold italic underline strikethrough subscript superscript forecolor backcolor " +
              "bullist numlist | table blockquote link image media code | alignleft aligncenter alignright alignjustify outdent indent | removeformat undo redo ",
            branding: false,
            promotion: false,
            resize: false,
            statusbar: false,
          }}
        />

        <div className="flex gap-2 mt-4">
          <button
            onClick={toggleMode}
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-full"
            type="button"
          >
            {isHtmlMode ? "위즈윅 모드로 전환" : "HTML 코드로 전환"}
          </button>
        </div>
      </div>
    </div>
  );
}
