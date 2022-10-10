import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import React from 'react'
import './Name_tiles.scss'

export const Name_tiles = ({ items, setIndex }) => {
	return (
		<div className="tile-wrap">
			{items.map((item, i) => {
				return (
					<motion.div
						className="title-item"
						key={i}
						onClick={() => setIndex(i)}
						layoutId={item}
					>
						<p>{item.chineseName}</p>
					</motion.div>
				)
			})}
		</div>
	)
}
