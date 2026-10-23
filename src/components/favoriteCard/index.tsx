"use client";

import { MdAdd, MdClose } from "react-icons/md";
import { useState } from "react";

export default function FavoriteCard() {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  function handleButton() {
    setShowInput(!showInput);
  }

  return (
    <div className="bg-[#111827] p-4 h-46 rounded-lg flex flex-col justify-between grow ">
      <div className="flex items-center gap-2 ">
        {showInput && (
          <input
            type="text"
            name="jogo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-white text-black rounded-lg p-1 outline-none"
          />
        )}
        <button onClick={handleButton} className="text-white outline-none">
          {showInput === false ? <MdAdd size={24} /> : <MdClose size={24} />}
        </button>
      </div>

      <p className="font-bold text-lg text-white">
        {input && input}
        {!input && "Adicionar jogo"}
      </p>
    </div>
  );
}
