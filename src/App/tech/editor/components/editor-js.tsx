import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect, useRef } from "react";

export function EditorJs() {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: ["link"],
        },
        list: {
          class: List as unknown as ToolConstructable,
          inlineToolbar: true,
        },
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.isReady
          .then(() => {
            editorRef.current?.destroy();
            editorRef.current = null;
          })
          .catch((err) => {
            editorRef.current = null;
          });
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[500px] w-1/2 items-center justify-center">
      <p className="text-3xl font-bold mb-10 text-blue-500">Editor.js</p>
      <div className="relative w-full max-w-2xl p-8 bg-white rounded-2xl shadow-xl ring-1 h-96 ring-gray-200">
        <div className="w-full overflow-auto max-h-96 px-20">
          <div id="editorjs" className="" />
        </div>
      </div>
    </div>
  );
}
