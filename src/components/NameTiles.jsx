import { motion } from 'framer-motion'
import React from 'react'
import './NameTiles.scss'

const whileHover = {
	backgroundColor: '#F6EAD3',
	scale: 1.05,
	boxShadow:
		'0px 81px 33px rgba(42, 31, 9, 0.01), 0px 46px 27px rgba(42, 31, 9, 0.05), 0px 20px 20px rgba(42, 31, 9, 0.09), 0px 5px 11px rgba(42, 31, 9, 0.1), 0px 0px 0px rgba(42, 31, 9, 0.1)',
}

export const NameTiles = ({ items, setIndex, index }) => {
	return (
		<motion.div
			className="tile-wrap"
			animate={{
				scale: index == false ? 1 : 0.99,
			}}
			transition={{
				ease: [0.4, 0, 0.2, 1],
				duration: 0.5,
			}}
		>
			{items.map((item, i) => {
				return (
					<motion.div
						className="title-item"
						key={item.id}
						onClick={() => {
							setIndex(i)
						}}
						layoutId={item}
						whileHover={whileHover}
					>
						<p>{item.chineseName}</p>
					</motion.div>
				)
			})}
		</motion.div>
	)
}
