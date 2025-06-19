import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";

import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FontSize } from "./tiptap-editor/font-size";
import { Toolbar } from "./tiptap-editor/tool-bar";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent";

export function Tiptap() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Configure an included extension
        heading: {
          levels: [1, 2],
        },
      }),
      TextStyle,
      FontFamily,
      FontSize,
      Underline,
      Color,
      Highlight,
      TextAlign,
      Link,
    ],
    content,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="flex flex-col h-screen w-1/2  items-center justify-center">
      <p className="text-3xl font-bold mb-10 text-blue-500">TipTab</p>
      <div className="relative w-full max-w-2xl  p-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200  ">
        {/* 툴바 */}
        <div className="border border-solid border-gray-400 rounded-xl overflow-hidden">
          <Toolbar editor={editor} />

          {/* 에디터 본문 */}
          <EditorContent
            editor={editor}
            className="max-w-none overflow-auto px-2 min-h-[320px]  max-h-[320px]"
          />
        </div>
        {/*   <FloatingMenu editor={editor}>
          <div className="flex gap-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
            <button className="px-2 py-1 rounded hover:bg-blue-100 text-sm font-medium">
              + 블록
            </button>
            <button className="px-2 py-1 rounded hover:bg-blue-100 text-sm font-medium">
              이미지
            </button>
          </div>
        </FloatingMenu>


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
        </BubbleMenu> */}
      </div>
    </div>
  );
}
