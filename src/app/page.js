"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const cells = ["", "", "", "", "", "", "", "", ""];

  const [text, setText] = useState("playerO");

  return (
    <div className="flex justify-center flex-col">
      <p className="text-[64px] font-bold text-black p-5 flex justify-center">
        Tic Tac Toe
      </p>
      <div className="w-[680px] h-[680px] grid grid-cols-3 grid-rows-3 gap-5 border-4 border-black self-center p-5 text-black">
        {cells.map((cell, index) => {
          return (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-black "
            ></div>
          );
        })}
      </div>
    </div>
  );
}

// onClick={() => {
//   setText("playerX");
//   count++;
//   console.log(setText);
//   console.log(count);
// }}
