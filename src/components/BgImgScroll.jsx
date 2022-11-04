import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useInView,
} from 'framer-motion'
import React from 'react'
// import { useInView } from 'react-intersection-observer'

import './BgImgScroll.scss'
import useWindowSize from '../hooks/useWindowSize'
import { useRef } from 'react'

export const BgImgScroll = () => {
	const windowsize = useWindowSize()
	const { scrollY } = useScroll()

	const ref = useRef(null)
	const isInView = useInView(ref)

	const y = useSpring(
		useTransform(
			scrollY,
			[0, windowsize.height],
			[0, windowsize.height / -2]
		),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		}
	)

	return (
		<div className="bg-img-wrap">
			<motion.img
				className="bg1"
				src={require(`../images/bg/1.jpg`)}
				alt="general zhang zuolin on a postcard"
				style={{ y: y }}
			/>
			<motion.img src={require(`../images/bg/2-1.jpg`)} alt="" />
			<img src={require(`../images/bg/2-2.jpg`)} alt="" />
			<img src={require(`../images/bg/2-3.jpg`)} alt="" />
			{/* <div className="bg2">
				<motion.img src={require(`../images/bg/2-1.jpg`)} alt="" />
				<img src={require(`../images/bg/2-2.jpg`)} alt="" />
				<img src={require(`../images/bg/2-3.jpg`)} alt="" />
			</div> */}
			{/* <motion.div
				className="test"
				ref={ref}
				style={{ y: inView ? y : 0 }}
				animate={{ scale: inView ? 2 : 1 }}
			></motion.div> */}
			<motion.div
				ref={ref}
				style={{
					position: 'absolute',
					top: '200vh',
					fontSize: 60,
					y: isInView ? y : 0,
				}}
				animate={{ scale: isInView ? 2 : 1 }}
				transition={{ duration: 1 }}
			>
				1234
			</motion.div>
		</div>
	)
}
