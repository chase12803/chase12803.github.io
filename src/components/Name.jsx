import { motion } from "framer-motion"

const firstArr = [
    { id: 1, letter: "W" },
    { id: 2, letter: "o" },
    { id: 3, letter: "r" },
    { id: 4, letter: "k" },
    { id: 5, letter: "\u00A0" },
    { id: 6, letter: "i" },
    { id: 7, letter: "n" },
]
const lastArr = [
    { id: 8, letter: "p" },
    { id: 9, letter: "r" },
    { id: 10, letter: "o" },
    { id: 11, letter: "g" },
    { id: 12, letter: "r" },
    { id: 13, letter: "e" },
    { id: 14, letter: "s" },
    { id: 15, letter: "s" },
]

// const firstArr = [
//     { id: 1, letter: "C" },
//     { id: 2, letter: "h" },
//     { id: 3, letter: "a" },
//     { id: 4, letter: "s" },
//     { id: 5, letter: "e" },
// ]
// const lastArr = [
//     { id: 6, letter: "C" },
//     { id: 7, letter: "a" },
//     { id: 8, letter: "r" },
//     { id: 9, letter: "s" },
//     { id: 10, letter: "t" },
//     { id: 11, letter: "e" },
//     { id: 12, letter: "n" },
//     { id: 13, letter: "s" },
//     { id: 14, letter: "e" },
//     { id: 15, letter: "n" },
// ]

// Functions to find the relative x and y positions of a letter given an angle
const xPos = (ang) => (250 * Math.cos(ang)-250)
const yPos = (ang) => (-250 * Math.sin(ang))

// Maps these angles in degrees to radians
const angles = [90, 75, 60, 45, 30, 15, 0].map((theta) => Math.PI * theta / 180)

// Creates the animations for the letters
const letterAnimation = {
    x: angles.map(ang => xPos(ang)),
    y: angles.map(ang => yPos(ang)),
    scale: [0, 1]
}

// Transition for the letters
const letterTransition = (letter) => ({ duration: 0.1, delay: letter.id * 0.08, type: "tween" });


const Name = () => (
    <div className="h-min w-min p-1">
        <div className="name-letter flex flex-col">
            <div className="flex flex-row">
                {firstArr.map((letter, id) => (
                    <motion.div
                        key = {id}
                        animate={letterAnimation}
                        transition={letterTransition(letter)}>
                        <Letter letter={letter.letter} />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {lastArr.map((letter, id) => (
                    <motion.div
                        key = {id}
                        animate={letterAnimation}
                        transition={letterTransition(letter)}>
                        <Letter letter={letter.letter} />
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

const Letter = ({ letter }) => (
    <div>
        {letter}
    </div>
);

export default Name;