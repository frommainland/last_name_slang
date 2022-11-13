import './App.css';
import './font.css'
import "the-new-css-reset/css/reset.css"
import Nav from './components/Nav';
import Header from './components/Header';
import { BotFilter } from './components/BotFilter';
import { NameTiles } from './components/NameTiles';
import { names } from './data/name_data'
import { useState, useEffect } from 'react';
import NameCard from './components/NameCard';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ContentBanditStart } from './components/ContentBanditStart';
import { ContentBanditCode } from './components/ContentBanditCode'
import { ContentBanditEnd } from './components/ContentBanditEnd';
import { ContentBanditRef } from './components/ContentBanditRef';
import { ContentBanditRule } from './components/ContentBanditRule';
import { ContentStarter } from './components/ContentStarter';
import { ContentBanditCodeInName } from './components/ContentBanditCodeInName';
import { BgImgScroll } from './components/BgImgScroll';


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
            <BgImgScroll />
            <Header />
            <ContentStarter />
            <ContentBanditStart />
            <ContentBanditCode />
            <ContentBanditCodeInName />
            <BotFilter original={original} setFiltered={setFiltered} activeCards={activeCards} setActiveCards={setActiveCards} />
            <NameTiles items={filtered} setIndex={setIndex} index={index} />
            <AnimatePresence>
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
                    <NameCard initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} items={filtered} index={index} setIndex={setIndex} />
                )}
            </AnimatePresence>
            <ContentBanditRule />
            <ContentBanditEnd />
            <ContentBanditRef />
        </div>
    );
}

export default App;
