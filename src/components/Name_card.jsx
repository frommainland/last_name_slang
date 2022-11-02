import React, {
	useRef,
	useState,
	useLayoutEffect,
	useEffect,
	useCallback,
} from 'react'
import {
	motion,
	useMotionValue,
	useTransform,
	animate,
	useMotionTemplate,
} from 'framer-motion'
import useWindowSize from '../hooks/useWindowSize'
// import useImageColor from 'use-image-color'
import analyze from 'rgbaster'
import './Name_card.scss'

//get mouse pos
function getRelativeCoordinates(event, referenceElement) {
	const position = {
		x: event.pageX,
		y: event.pageY,
	}

	const offset = {
		left: referenceElement.offsetLeft,
		top: referenceElement.offsetTop,
		width: referenceElement.clientWidth,
		height: referenceElement.clientHeight,
	}

	const percent = {
		x: Math.round(((position.x - offset.left) / offset.width) * 100),
		y: Math.round(((position.y - offset.top) / offset.height) * 100),
	}

	let reference = referenceElement.offsetParent
	while (reference) {
		offset.left += reference.offsetLeft
		offset.top += reference.offsetTop
		reference = reference.offsetParent
	}

	return {
		x: position.x - offset.left,
		y: position.y - offset.top,
		width: offset.width,
		height: offset.height,
		centerX:
			(position.x - offset.left - offset.width / 2) / (offset.width / 2),
		centerY:
			(position.y - offset.top - offset.height / 2) / (offset.height / 2),
		percentX: Math.round(50 + percent.x / 4 - 12.5),
		percentY: Math.round(50 + percent.y / 3 - 16.67),
		hyp: Math.sqrt(
			(Math.round(((position.y - offset.top) / offset.height) * 100) -
				50) *
				(Math.round(((position.y - offset.top) / offset.height) * 100) -
					50) +
				((Math.round(
					((position.x - offset.left) / offset.width) * 100
				) -
					50) *
					(Math.round(
						((position.x - offset.left) / offset.width) * 100
					) -
						50)) /
					50
		),
	}
}

//sticker

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

	const [cardHover, setCardHover] = useState(false)

	const x = useMotionValue(cardSize.width / 2)
	const y = useMotionValue(cardSize.height / 2)

	const rotateX = useTransform(y, [0, cardSize.height], [10, -10])
	const rotateY = useTransform(x, [0, cardSize.width], [-30, 30])

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect()
		x.set(event.clientX - rect.left)
		y.set(event.clientY - rect.top)
		setCardHover(true)
		// console.log(x.current, y.current)
	}
	// card-shine
	const posx = useTransform(x, [0, cardSize.width], [37, 63])
	const posy = useTransform(y, [0, cardSize.height], [33, 66])
	const backgroundX = useMotionTemplate`${posx}%`
	const backgroundY = useMotionTemplate`${posy}%`

	//card-flare
	const mx = useTransform(x, [0, cardSize.width], [0, 100])
	const my = useTransform(y, [0, cardSize.height], [0, 100])
	const mouseXPercent = useMotionTemplate`${mx}%`
	const mouseYPercent = useMotionTemplate`${my}%`

	//card-before-gradient
	// const gradientX = useTransform(x, [0, cardSize.height], [82, 18])
	// const gradientY = useTransform(y, [0, cardSize.width], [82, 18])
	// const backgroundPosition = useMotionTemplate`${gradientX}% ${gradientY}%`

	//card-before-gradient-color
	// const [color, setColor] = useState('')
	// const fetchColor = useCallback(async () => {
	// 	const colorData = await analyze(`./${index}.jpg`, { scale: 0.45 })
	// 	setColor(colorData[0].color)
	// }, [])

	// useEffect(() => {
	// 	fetchColor()
	// }, [])
	const [mousePosition, setMousePosition] = useState({})
	const boxRef = useRef()
	const handleMouseMove = (e) => {
		setMousePosition(getRelativeCoordinates(e, boxRef.current))
	}

	const sticker = (
		<svg
			width="74"
			height="74"
			viewBox="0 0 74 74"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="37" cy="37" r="37" fill={items[index].textColor} />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.9983 22C16.7526 22.3272 16.5146 22.6606 16.2848 23C14.847 25.1233 13.7271 27.4794 12.9934 30H15.0842C15.7569 27.8919 16.7254 25.9164 17.9409 24.1214C17.9683 24.0808 17.9959 24.0404 18.0237 24H27.6025C27.1047 25.8549 26.7102 27.8686 26.4372 30H28.4542C28.7419 27.8431 29.1579 25.8275 29.6773 24H44.323C44.8424 25.8275 45.2584 27.8431 45.5462 30H47.5632C47.2902 27.8686 46.8957 25.8549 46.3979 24H55.9767C56.0008 24.0351 56.0248 24.0703 56.0487 24.1055L56.0595 24.1214C57.275 25.9164 58.2435 27.8919 58.9161 30H61.0069C60.2732 27.4794 59.1533 25.1233 57.7155 23C57.4857 22.6606 57.2478 22.3272 57.002 22C52.441 15.9278 45.1793 12 37.0002 12C28.8211 12 21.5594 15.9278 16.9983 22ZM15.9549 50.5C14.6751 48.5089 13.67 46.3244 12.9934 44H15.0842C15.6999 45.9295 16.5634 47.7479 17.6373 49.4185L17.6899 49.5H27.4718C27.0353 47.785 26.6858 45.9413 26.4372 44H28.4542C28.7159 45.962 29.0838 47.8071 29.5391 49.5H44.4613C44.9165 47.8071 45.2844 45.962 45.5462 44H47.5632C47.3145 45.9413 46.9651 47.785 46.5286 49.5H56.3104L56.363 49.4185C57.4369 47.7479 58.3004 45.9295 58.9161 44H61.0069C60.3303 46.3244 59.3253 48.5089 58.0454 50.5C57.8275 50.839 57.6016 51.1725 57.368 51.5C52.8352 57.8558 45.4016 62 37.0002 62C28.5987 62 21.1652 57.8558 16.6324 51.5C16.3987 51.1725 16.1729 50.839 15.9549 50.5ZM32.1979 14.5019C27.1916 15.5651 22.7868 18.2569 19.5639 22H28.1994C29.2461 18.833 30.616 16.2493 32.1979 14.5019ZM30.3131 22C30.5457 21.3435 30.7927 20.7185 31.0526 20.1278C31.9813 18.0173 33.0353 16.4342 34.1045 15.4065C35.1638 14.3882 36.1391 14 37.0002 14C37.8612 14 38.8366 14.3882 39.8958 15.4065C40.965 16.4342 42.0191 18.0173 42.9477 20.1278C43.2076 20.7185 43.4546 21.3435 43.6872 22H30.3131ZM28.0383 51.5H19.1455C22.4003 55.503 26.9714 58.3881 32.1979 59.498C30.5335 57.6596 29.1038 54.8954 28.0383 51.5ZM41.8025 59.498C47.029 58.3881 51.6001 55.503 54.8549 51.5H45.962C44.8965 54.8954 43.4668 57.6596 41.8025 59.498ZM43.8595 51.5C43.5777 52.3408 43.2728 53.1333 42.9477 53.8722C42.0191 55.9827 40.965 57.5658 39.8958 58.5935C38.8366 59.6118 37.8612 60 37.0002 60C36.1391 60 35.1638 59.6118 34.1045 58.5935C33.0353 57.5658 31.9813 55.9827 31.0526 53.8722C30.7275 53.1333 30.4226 52.3408 30.1408 51.5H43.8595ZM45.801 22H54.4365C51.2135 18.2569 46.8087 15.5651 41.8025 14.5019C43.3843 16.2493 44.7543 18.833 45.801 22ZM16.332 36.377L15.4664 36.5654V35.4031H16.4087V33.9267H15.4664V32H13.8337V33.9267H12.5516V35.4031H13.8337V36.9215C13.3077 37.0262 12.8256 37.1204 12.4092 37.1937L12.7379 38.7539L13.8337 38.5026V40.2827C13.8337 40.4503 13.7789 40.5026 13.5926 40.5026C13.4282 40.5026 12.8804 40.5026 12.4311 40.4817C12.6393 40.8901 12.8475 41.5288 12.9023 41.9267C13.7789 41.9372 14.4144 41.8953 14.8747 41.6544C15.3239 41.4241 15.4664 41.0366 15.4664 40.2932V38.1257L16.5293 37.8639L16.332 36.377ZM18.1839 37.6544C18.4907 38.4817 18.8742 39.2356 19.3454 39.8848C19.0167 40.178 18.6222 40.4398 18.1839 40.6597V37.6544ZM20.8357 37.4241C20.7151 37.8743 20.5398 38.2932 20.3316 38.6806C20.0467 38.2932 19.8056 37.8743 19.6193 37.4241H20.8357ZM21.6027 36.0314L21.3288 36.0733H18.1839V33.7801H20.7261C20.6932 34.2199 20.6494 34.4607 20.5617 34.5445C20.4521 34.6387 20.3426 34.6492 20.1344 34.6492C19.8933 34.6492 19.3454 34.6387 18.7646 34.5969C18.9619 34.9215 19.1482 35.4555 19.1591 35.822C19.8166 35.8429 20.4521 35.8429 20.8466 35.8115C21.263 35.7696 21.6684 35.6859 21.9533 35.3822C22.2273 35.0785 22.3478 34.3979 22.3916 32.9215C22.4026 32.7435 22.4136 32.377 22.4136 32.377H16.606V41.8953H18.1839V41.1832C18.4469 41.445 18.6989 41.7487 18.8633 42C19.4331 41.7277 19.9371 41.3927 20.3754 41.0052C20.8137 41.3822 21.3068 41.6963 21.8657 41.9476C22.1067 41.5497 22.5889 40.9424 22.9505 40.6492C22.3697 40.4398 21.8657 40.1571 21.4164 39.801C22.041 38.8482 22.4355 37.6859 22.6218 36.3141L21.6027 36.0314ZM34.7848 33.7487H36.3627V33.5079H38.4118V33.7487H40.0007V33.5079H42.258V32.3665H40.0007V32H38.4118V32.3665H36.3627V32H34.7848V32.3665H32.5385V33.5079H34.7848V33.7487ZM34.4451 37.4974H35.4423V37.8848H34.4451V37.4974ZM36.8887 37.4974H37.8968V37.8848H36.8887V37.4974ZM39.3432 37.4974H40.3732V37.8848H39.3432V37.4974ZM32.9658 38.5654H41.9292V36.8168H32.9658V38.5654ZM39.6939 34.8691H35.004V34.5969H39.6939V34.8691ZM39.6939 35.8325H35.004V35.5602H39.6939V35.8325ZM33.5685 33.8639V36.5654H41.206V33.8639H33.5685ZM38.7953 39.822C38.4118 40 37.9625 40.1466 37.4804 40.2723C36.9763 40.1466 36.5271 40 36.1436 39.822H38.7953ZM40.4828 38.7749L40.2308 38.8377H32.933V39.822H34.8615L34.4342 40.0105C34.7191 40.2304 35.0368 40.4398 35.3875 40.6178C34.4561 40.712 33.437 40.7539 32.396 40.7644C32.6042 41.0785 32.8124 41.6126 32.8891 41.9581C34.5657 41.8953 36.1655 41.7487 37.5571 41.4136C38.8392 41.7277 40.2965 41.8953 41.8744 41.9686C42.0388 41.6335 42.3675 41.0995 42.6415 40.8063C41.6224 40.7853 40.6253 40.733 39.7158 40.6387C40.3842 40.2932 40.943 39.8534 41.3813 39.2984L40.4828 38.7749ZM58.0809 39.6963V32.4503H59.7026V39.7068C59.7026 40.2723 59.7245 40.3455 59.9766 40.3455H60.5683C60.8422 40.3455 60.897 39.9372 60.9408 38.377C61.3134 38.6492 61.9818 38.9424 62.4092 39.0366C62.2777 41.0157 61.9051 41.801 60.7327 41.801H59.6917C58.4425 41.801 58.0809 41.2984 58.0809 39.6963ZM54.2238 35.7801V32.4503H55.8236V35.7906C55.8236 37.9791 55.5058 40.4503 52.9308 41.9581C52.7007 41.5916 52.1528 40.9948 51.8021 40.7225C53.9608 39.4974 54.2238 37.5079 54.2238 35.7801Z"
				fill={items[index].imageColor1}
			/>
		</svg>
	)
	return (
		<div className="name-card-wrap">
			<motion.div
				className="name-card-cursor-wrap"
				layoutId={items[index]}
				onMouseMove={(e) => {
					handleMouse(e)
					handleMouseMove(e)
				}}
				ref={boxRef}
				onMouseLeave={() => {
					animate(x, cardSize.width / 2)
					animate(y, cardSize.height / 2)
					setCardHover(false)
				}}
			>
				<motion.div
					ref={cardRef}
					className="name-card"
					style={{
						rotateX: rotateX,
						rotateY: rotateY,
					}}
					onClick={() => {
						setIndex(false)
					}}
				>
					<img
						src={require(`../images/${items[index].id}.jpg`)}
						alt="photo"
					/>
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
						<div className="sticker">{sticker}</div>
					</div>
					{/* <motion.div
						className="name-card-before"
						style={{
							backgroundPosition: backgroundPosition,
							'--color1': items[index].imageColor1,
							'--color2': items[index].imageColor2,
						}}
					></motion.div> */}
					{/* <motion.div
						className="name-card-shine"
						style={{
							'--posx': backgroundX,
							'--posy': backgroundY,
						}}
						// animate={{ opacity: cardHover ? 1 : 0 }}
					/>
					<motion.div
						className="name-card-shine-after"
						style={{
							'--posx': backgroundX,
							'--posy': backgroundY,
						}}
						// animate={{ opacity: cardHover ? 1 : 0 }}
					/> */}
					<motion.div
						className="name-card-shine-texture"
						style={{
							'--posx': backgroundX,
							'--posy': backgroundY,
							'--hyp': mousePosition.hyp / 100,
						}}
						animate={{ opacity: cardHover ? 0.5 : 0 }}
					/>
					<motion.div
						className="name-card-flare"
						style={{
							'--mx': mouseXPercent,
							'--my': mouseYPercent,
						}}
						animate={{ opacity: cardHover ? 1 : 0 }}
					/>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Name_card
