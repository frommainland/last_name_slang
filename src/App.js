import './App.css';
import './font.css'
import "the-new-css-reset/css/reset.css"
import Nav from './components/Nav';
import Header from './components/Header';
import { Bot_filter } from './components/Bot_filter';
import { Name_tiles } from './components/Name_tiles';
import { names } from './data/name_data'
import { useState, useEffect } from 'react';
import Name_card from './components/Name_card';
import { motion, AnimatePresence } from 'framer-motion';


function App() {

    // React: Prevent scroll when modal is open
    // useEffect(() => {
    //     document.body.style.overflow = index ? 'hidden' : 'unset'
    //     document.body.style.paddingRight = index ? '15px' : '0px'
    // }, [index])

    //card-before-gradient-color
    // const { colors } = useImageColor(`./${index}.jpg`, { cors: true, colors: 2 })

    const [index, setIndex] = useState(false);
    const [original, setOriginal] = useState(names)
    const [filtered, setFiltered] = useState(names)
    const [activeCards, setActiveCards] = useState('所有')


    return (
        <div className="App">
            <Nav />
            <Header />
            <Bot_filter original={original} setFiltered={setFiltered} activeCards={activeCards} setActiveCards={setActiveCards} />
            <Name_tiles items={filtered} setIndex={setIndex} index={index} />
            <AnimatePresence wait>
                {index !== false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: [0.4, 0, 0.2, 1],
                            duration: 0.5,
                        }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="overlay"
                        onClick={() => setIndex(false)}
                    />
                )}
                {index !== false && (
                    <Name_card initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} items={names} index={index} setIndex={setIndex} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
