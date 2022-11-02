import React from 'react'
import { useEffect } from 'react'
import './BotFilter.scss'

export const BotFilter = ({
	original,
	setFiltered,
	activeCards,
	setActiveCards,
}) => {
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
				<li onClick={() => setActiveCards('所有')}>所有</li>
				<li onClick={() => setActiveCards('联想')}>联想</li>
				<li onClick={() => setActiveCards('补充')}>补充</li>
				<li onClick={() => setActiveCards('谐音')}>谐音</li>
				<li onClick={() => setActiveCards('方言')}>方言</li>
				<li onClick={() => setActiveCards('拆字')}>拆字</li>
				<li onClick={() => setActiveCards('八卦')}>八卦</li>
			</ul>
		</div>
	)
}
