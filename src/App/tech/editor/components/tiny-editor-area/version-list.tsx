import type { EditorVersion } from "./type";

type VersionListProps = {
  versions: EditorVersion[];
  onSelect: (v: EditorVersion) => void;
  selectedId?: string;
};

export function VersionList({
  versions,
  onSelect,
  selectedId,
}: VersionListProps) {
  return (
    <div className="w-1/2 min-h-96 max-h-96 overflow-y-auto pl-4">
      <ul>
        {versions.map((v) => (
          <li
            key={v.id}
            className={`p-2 cursor-pointer ${
              selectedId === v.id ? "bg-blue-100" : ""
            }`}
            onClick={() => onSelect(v)}
          >
            <div className="font-bold">{v.title}</div>
            <div className="text-xs text-gray-500">{v.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
