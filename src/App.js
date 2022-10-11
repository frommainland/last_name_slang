import './App.css';
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

    const [index, setIndex] = useState(false);

    // React: Prevent scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = index ? 'hidden' : 'unset'
        document.body.style.paddingRight = index ? '15px' : '0px'
    }, [index])



    return (
        <div className="App">
            <Nav />
            <Header />
            <Name_tiles items={names} setIndex={setIndex} />
            <AnimatePresence>
                {index !== false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="overlay"
                        onClick={() => setIndex(false)}
                    />
                )}
                {index !== false && (<Name_card items={names} index={index} />)}
            </AnimatePresence>

            <Bot_filter />
        </div>
    );
}

export default App;
