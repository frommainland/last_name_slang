import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './BotFilter.scss'
import { motion } from 'framer-motion'

export const BotFilter = ({
	original,
	setFiltered,
	activeCards,
	setActiveCards,
}) => {
	const filterText = ['所有', '联想', '补充', '谐音', '方言', '拆字', '八卦']
	const [selected, setSelected] = useState(0)

	useEffect(() => {
		if (activeCards == '所有') {
			setFiltered(original)
			return
		}
		//? return 没有return 不一样
		// const filtered = original.filter((item) => {
		// 	return item.method.includes(activeCards)
		// })
		const filtered = original.filter((item) =>
			item.method.includes(activeCards)
		)
		setFiltered(filtered)
	}, [activeCards])

	return (
		<div className="filter-wrap">
			<ul>
				{filterText.map((item, i) => {
					return (
						<li
							className={`${i === selected && 'selected'}`}
							key={i}
							onClick={() => {
								setActiveCards(item)
								setSelected(i)
							}}
						>
							{i === selected && (
								<motion.div
									className="indicator"
									layoutId="indicator"
								/>
							)}
							<div
								className={`${
									i === selected && 'selected'
								} label`}
							>
								{item}
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
