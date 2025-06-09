import { ChangeEvent, KeyboardEvent, useState } from "react";

type TsxAreaProps = {
  title: string;
};

export function TsxArea({ title }: TsxAreaProps) {
  // 카운터 상태 (number 타입 명시)
  const [count, setCount] = useState<number>(0);

  // 투두 상태 (string 배열, string 타입 명시)
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  // 투두 삭제 함수
  const removeTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 text-gray-900">
      <p className="text-3xl font-bold text-left">{title}</p>
      <p>이 컴포넌트는 타입스크립트로 작성되었습니다.</p>

      {/* 카운터 */}
      <div className="flex flex-col items-start gap-5 my-10">
        <p className="font-bold text-2xl ">🗨️ 카운트</p>

        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <span className="text-center font-bold text-xl text-blue-400  min-w-16">
            {count}
          </span>
          <button
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <p className="text-base -ml-5">
          현재 카운트는{" "}
          <span className="font-bold text-xl text-blue-400">{count}</span>{" "}
          입니다.
        </p>
      </div>

      {/* 투두앱 */}
      <div>
        <div className="flex flex-col items-start gap-5 my-10">
          <p className="font-bold text-2xl ">🗨️ TODO</p>
          <div className="flex items-center gap-2 mb-4">
            <input
              className="border-2 px-4 py-1 rounded-full min-w-80 focus:border-blue-400 focus:border-2 focus:outline-none"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="할 일 입력"
            />
            <button
              className="bg-blue-400 text-white px-3 py-1 rounded-full hover:bg-blue-500 "
              onClick={addTodo}
            >
              추가
            </button>
          </div>
        </div>
        <ul className="max-w-[250px]">
          {todos.map((todo, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="min-w-80">{todo}</span>
              <button
                className=" rounded-full "
                onClick={() => removeTodo(idx)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
