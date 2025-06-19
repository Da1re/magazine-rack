import type { Editor } from "@tiptap/react";

type ToolbarProps = { editor: Editor | null };

export function Toolbar({ editor }: ToolbarProps) {
  if (!editor) return null;
  return (
    <div className="flex flex-wrap items-center gap-[7px] p-4 border-b border-solid border- bg-gray-50 rounded-t-lg ">
      {/* Font Family */}
      <select
        onChange={(e) =>
          editor.chain().focus().setFontFamily(e.target.value).run()
        }
        value={editor.getAttributes("fontFamily").fontFamily || ""}
        className="border rounded px-1 py-0.5 text-sm"
      >
        <option value="">폰트</option>
        <option value="Pretendard">Pretendard</option>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times</option>
      </select>
      {/* Font Size */}
      <select
        onChange={(e) =>
          editor.chain().focus().setFontSize(e.target.value).run()
        }
        value={editor.getAttributes("fontSize").fontSize || ""}
        className="border rounded px-1 py-0.5 text-sm"
      >
        <option value="">크기</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
      </select>
      {/* Bold */}
      <button
        className={
          editor.isActive("bold")
            ? "font-bold bg-blue-200 rounded px-1"
            : "font-bold px-1"
        }
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </button>
      {/* Italic */}
      <button
        className={
          editor.isActive("italic")
            ? "italic bg-blue-200 rounded px-1"
            : "italic px-1"
        }
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </button>
      {/* Underline */}
      <button
        className={
          editor.isActive("underline")
            ? "underline bg-blue-200 rounded px-1"
            : "underline px-1"
        }
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </button>
      {/* Strike */}
      <button
        className={
          editor.isActive("strike")
            ? "line-through bg-blue-200 rounded px-1"
            : "line-through px-1"
        }
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        S
      </button>
      {/* Font Color */}
      <input
        type="color"
        value={editor.getAttributes("color").color || "#000000"}
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className="w-6 h-6 border rounded"
      />
      {/* Highlight */}
      <input
        type="color"
        value={editor.getAttributes("highlight").color || "#ffff00"}
        onChange={(e) =>
          editor
            .chain()
            .focus()
            .toggleHighlight({ color: e.target.value })
            .run()
        }
        className="w-6 h-6 border rounded-full"
      />
      {/* Bullet List */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        Toggle
      </button>
      <button
        onClick={() => editor.chain().focus().splitListItem("listItem").run()}
        disabled={!editor.can().splitListItem("listItem")}
      >
        Split
      </button>
      <button
        onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
        disabled={!editor.can().sinkListItem("listItem")}
      >
        Sink
      </button>
      <button
        onClick={() => editor.chain().focus().liftListItem("listItem").run()}
        disabled={!editor.can().liftListItem("listItem")}
      >
        Lift
      </button>
      {/* Blockquote */}
      <button
        className={
          editor.isActive("blockquote") ? "bg-blue-200 rounded px-1" : "px-1"
        }
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        ❝
      </button>
      {/* Align Left */}
      <button
        className={
          editor.isActive({ textAlign: "left" })
            ? "bg-blue-200 rounded px-1"
            : "px-1"
        }
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      >
        ◧
      </button>
      {/* Align Center */}
      <button
        className={
          editor.isActive({ textAlign: "center" })
            ? "bg-blue-200 rounded px-1"
            : "px-1"
        }
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        ◫
      </button>
      {/* Align Right */}
      <button
        className={
          editor.isActive({ textAlign: "right" })
            ? "bg-blue-200 rounded px-1"
            : "px-1"
        }
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      >
        ◨
      </button>
      {/* Link */}
      {/* <button
        className={
          editor.isActive("link") ? "bg-blue-200 rounded px-1" : "px-1"
        }
        onClick={() => {
          const url = window.prompt("URL 입력");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
      >
        🔗
      </button> */}
    </div>
  );
}
