import React from 'react'
import { motion } from 'framer-motion'
import './Name_card.scss'

const Name_card = ({ items, index }) => {
	return (
		<div className="name-card-wrap">
			<motion.div className="name-card" layoutId={items[index]}>
				<div className="header">
					<div className="slang-wrap">
						<p className="slang">{items[index].slang}</p>
						<p className="englishName">
							{items[index].englishName}
						</p>
					</div>
					<p className="name-card-number">{index + 1}</p>
				</div>
				<div className="footer">
					<p className="description">{items[index].description}</p>
					<div className="sticker"></div>
				</div>
			</motion.div>
		</div>
	)
}

export default Name_card
