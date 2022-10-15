import React, { useRef, useState, useLayoutEffect } from 'react'
import {
	motion,
	useMotionValue,
	useTransform,
	animate,
	useMotionTemplate,
} from 'framer-motion'
import useWindowSize from '../hooks/useWindowSize'
import './Name_card.scss'

const Name_card = ({ items, index, setIndex }) => {
	const size = useWindowSize()

	const cardRef = useRef()
	const [cardSize, setCardSize] = useState({ width: 0, height: 0 })
	const getCardSize = () => {
		setCardSize({
			width: cardRef.current.clientWidth,
			height: cardRef.current.clientHeight,
		})
	}
	useLayoutEffect(() => {
		getCardSize()
		window.addEventListener('resize', getCardSize)
		return () => window.removeEventListener('resize', getCardSize)
	}, [])

	const x = useMotionValue(cardSize.width / 2)
	const y = useMotionValue(cardSize.height / 2)

	const rotateX = useTransform(y, [0, cardSize.height], [10, -10])
	const rotateY = useTransform(x, [0, cardSize.width], [-30, 30])

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect()
		x.set(event.clientX - rect.left)
		y.set(event.clientY - rect.top)
		console.log(gradientX.current, gradientY.current)
	}

	//card-before-gradient
	const gradientX = useTransform(x, [0, cardSize.height], [82, 18])
	const gradientY = useTransform(y, [0, cardSize.width], [82, 18])
	const backgroundPosition = useMotionTemplate`${gradientX}% ${gradientY}%`

	return (
		<div className="name-card-wrap">
			<motion.div
				className="name-card-cursor-wrap"
				layoutId={items[index]}
				onMouseMove={handleMouse}
				onMouseLeave={() => {
					animate(x, cardSize.width / 2)
					animate(y, cardSize.height / 2)
				}}
			>
				<motion.div
					ref={cardRef}
					className="name-card"
					style={{
						backgroundImage: `url('./${2}.jpg')`,
						rotateX: rotateX,
						rotateY: rotateY,
					}}
					onClick={() => setIndex(false)}
				>
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
						<p className="description">
							{items[index].description}
						</p>
						<div className="sticker"></div>
					</div>
					<motion.div
						className="name-card-before"
						style={{
							backgroundPosition: backgroundPosition,
						}}
					></motion.div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Name_card
