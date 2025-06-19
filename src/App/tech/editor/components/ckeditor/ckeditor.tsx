import { CKEditor } from "ckeditor4-react";
import { useEffect, useRef } from "react";

type CKEditorProps = {
  content: string;
  setContent: (value: string) => void;
};

export function CkEditor({ content, setContent }: CKEditorProps) {
  const editorRef = useRef<CKEDITOR.editor | null>(null);
  // 내부에서 입력 중인 값과 외부 content가 다를 때만 setData
  const lastContentRef = useRef<string>(content);

  useEffect(() => {
    if (
      editorRef.current &&
      content !== lastContentRef.current // 외부에서만 바뀔 때
    ) {
      editorRef.current.setData(content);
      lastContentRef.current = content;
    }
  }, [content]);

  return (
    <div className="flex flex-col items-center justify-center h-fit w-full">
      <p className="text-3xl font-bold mb-10 text-blue-500">CKEditor</p>
      <div className="relative w-full p-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
        <CKEditor
          initData={content}
          config={{
            toolbar: [
              [
                "Font",
                "FontSize",
                "Bold",
                "Italic",
                "Underline",
                "Strike",
                "Subscript",
                "Superscript",
                "TextColor",
                "BGColor",
              ],
              [
                "BulletedList",
                "NumberedList",
                "Table",
                "Blockquote",
                "Link",
                "Unlink",
                "Image",
                "MediaEmbed",
              ],
              [
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
                "Outdent",
                "Indent",
                "Source",
                "RemoveFormat",
                "Undo",
                "Redo",
              ],
            ],
            extraPlugins: "font,colorbutton,justify",
            resize_enabled: false,
            removePlugins: "elementspath",
            versionCheck: false,
            height: 500,
          }}
          onInstanceReady={(event: { editor: CKEDITOR.editor }) => {
            editorRef.current = event.editor;
            event.editor.setData(content);
            lastContentRef.current = content;
          }}
          onChange={(event: { editor: CKEDITOR.editor }) => {
            const html = event.editor.getData();
            lastContentRef.current = html; // 내부 입력값 최신화
            setContent(html);
          }}
        />
      </div>
    </div>
  );
}
