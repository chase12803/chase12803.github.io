import { motion } from "framer-motion"
import { evaluate } from "mathjs"

const firstArr = [
    { id: 1, letter: "W" },
    { id: 2, letter: "o" },
    { id: 3, letter: "r" },
    { id: 4, letter: "k" },
    { id: 5, letter: " " },
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

const letterAnimation = {
    x: [evaluate('250*cos(90 deg)-250'), evaluate('250 * cos(75 deg)-250'), evaluate('250 * cos(60 deg)-250'), evaluate('250 * cos(45 deg)-250'), evaluate('250 * cos(30 deg)-250'), evaluate('250 * cos(15 deg)-250'), evaluate('250 * cos(0 deg)-250')],
    y: [evaluate('-250 * sin(90 deg)'), evaluate('-250 * sin(75 deg)'), evaluate('-250 * sin(60 deg)'), evaluate('-250 * sin(45 deg)'), evaluate('-250 * sin(30 deg)'), evaluate('-250 * sin(15 deg)'), 0],
    scale: [0, 1]
}

const letterTransition = (letter) => ({ duration: 0.1, delay: letter.id * 0.08 });

const Name = () => (
    <div className="absolute inset-0
                    table p-3
                    top-24 left-36">
        <div className="flex flex-col">
            <div className="flex flex-row">
                {firstArr.map((letter, i) => (
                    <motion.div
                        animate={letterAnimation}
                        transition={letterTransition(letter)}>
                        <Letter letter={letter.letter} />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {lastArr.map((letter, i) => (
                    <motion.div
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
    <div className="name-letter">
        {letter}
    </div>
);

export default Name;