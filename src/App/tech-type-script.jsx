import { JsxArea } from "./tech/type-script/jsx-area";
import { TsxArea } from "./tech/type-script/tsx-area.tsx";

export function TechTypeScript() {
  const title = "Tech 발표";
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4">
      <div className="w-full h-[200px]" />

      <div className="w-full h-fit min-h-[50rem] flex flex-row p-10 mb-36">
        {/* jsx */}
        <div className="w-1/2 border-r border-solid border-gray-300">
          <JsxArea title={title + " JSX"} />
        </div>
        {/* tsx */}
        <div className="w-1/2">
          <TsxArea title={title + " TSX"} />
        </div>
      </div>
    </div>
  );
}
