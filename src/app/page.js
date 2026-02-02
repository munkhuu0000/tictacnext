"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const checkWinner = () => {
      if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
        setWinner(board[0]);
      } else if (
        board[3] === board[4] &&
        board[4] === board[5] &&
        board[3] !== ""
      ) {
        setWinner(board[3]);
      } else if (
        board[6] === board[7] &&
        board[7] === board[8] &&
        board[6] !== ""
      ) {
        setWinner(board[6]);
      } else if (
        board[0] === board[3] &&
        board[3] === board[6] &&
        board[0] !== ""
      ) {
        setWinner(board[0]);
      } else if (
        board[1] === board[4] &&
        board[4] === board[7] &&
        board[1] !== ""
      ) {
        setWinner(board[1]);
      } else if (
        board[2] === board[5] &&
        board[5] === board[8] &&
        board[2] !== ""
      ) {
        setWinner(board[2]);
      } else if (
        board[0] === board[4] &&
        board[4] === board[8] &&
        board[0] !== ""
      ) {
        setWinner(board[0]);
      } else if (
        board[2] === board[4] &&
        board[4] === board[6] &&
        board[2] !== ""
      ) {
        setWinner(board[2]);
      }
    };
    if (!board.includes("") && !winner) {
      setWinner("Draw");
    }

    checkWinner();
  }, [board]);

  const handleclick = (index) => () => {
    const newBoard = [...board];
    if (newBoard[index] !== "") return;
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
  };

  if (winner) {
    return (
      <div className="w-full min-h-screen flex justify-center flex-col bg-neutral-700">
        <div className="text-[24px] flex flex-col gap-2 justify-center text-white w-full items-center">
          {winner === "Draw" ? "Draw" : `${winner} won`}
          <Button
            variant="outline"
            className="text-black"
            onClick={restartGame}
          >
            Restart
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen flex justify-center flex-col bg-neutral-700">
      <p className="text-[64px] font-bold text-white p-5 flex justify-center">
        Tic Tac Toe
      </p>
      <div className="w-[680px] h-[680px] grid grid-cols-3 grid-rows-3 gap-5 border-4 border-white self-center p-5 text-white">
        {board.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-white text-[72px] flex justify-center items-center"
              onClick={handleclick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
