import { useSetRecoilState } from "recoil";
import "./App.css";
import { NodeAtom } from "./store/NodeCounterAtom";
import { CreateNode } from "./components/CreateNode";

function App() {
  const setNodeArray = useSetRecoilState(NodeAtom);
  const addNode = () => {
    const value: number = Math.floor(Math.random() * 100);
    const next: string = "demo";
    setNodeArray((prev) => {
      const updatedArray = [
        ...prev,
        {
          data: value,
          next: next,
        },
      ];
      return updatedArray;
    });
  };
  return (
    <div className="bg-zinc-800 h-screen w-full relative overflow-hidden">
      <CreateNode />
      <button onClick={addNode} className="text-black bg-white rounded-lg p-4 absolute bottom-0">Create Node</button>
    </div>
  );
}

export default App;
