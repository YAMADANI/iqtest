"use client";
import { item } from "./data";
import { useState } from "react"
import { Button, Transition } from "@headlessui/react";


const Content = () => {
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    
    const now = item[index];
    const max = Math.floor((item.length * 3) / 12);

    const handleNextQuestion = () => {
        setIndex(Math.floor(Math.random() * item.length));
        setCount(count + 1);
    };
    

    return (
        <>
            <Transition show={count < max}>
                <div className="space-y-4">
                    <h2 style={{ whiteSpace: "pre-line" }} className="text-3xl">{now.Question}</h2>
                    <div className="flex flex-col space-y-2">
                        {now.choices.map((choice, i) => (
                            <Button key={i}  onClick={handleNextQuestion} className="text-start rounded shadow-md px-5 py-2 bg-teal-600 text-gray-50">
                                {choice}
                            </Button>
                        ))}
                    </div>
                </div>
            </Transition>
            <Transition show={count === max}>
                <h2 className="text-center">
                    <span className="text-4xl">あなたのIQは</span>
                    <span className="text-red-500 text-9xl block">3</span>
                </h2>
            </Transition>
        </>
    )
};
export default Content;