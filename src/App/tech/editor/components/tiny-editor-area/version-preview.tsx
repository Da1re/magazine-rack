import type { EditorVersion } from "./type";

type VersionPreviewProps = {
  version: EditorVersion | null;
};

export function VersionPreview({ version }: VersionPreviewProps) {
  return (
    <div className="w-full pr-4 ">
      <div className="font-bold mb-2 text-2xl">버전 관리</div>
      <div className="bg-gray-100 p-2 h-[30rem] overflow-y-auto rounded-lg ">
        {version && (
          <div dangerouslySetInnerHTML={{ __html: version.content }} />
        )}
      </div>
    </div>
  );
}
