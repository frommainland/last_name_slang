import { motion} from 'framer-motion'
import React from 'react'
import './Name_tiles.scss'

const whileHover = {
    backgroundColor: '#F6EAD3',
	scale: 1.05,
	boxShadow:
		'0px 81px 33px rgba(42, 31, 9, 0.01), 0px 46px 27px rgba(42, 31, 9, 0.05), 0px 20px 20px rgba(42, 31, 9, 0.09), 0px 5px 11px rgba(42, 31, 9, 0.1), 0px 0px 0px rgba(42, 31, 9, 0.1)',
}

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
						whileHover={whileHover}
					>
						<p>{item.chineseName}</p>
					</motion.div>
				)
			})}
		</div>
	)
}
