import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useRef, useEffect } from 'react'
import './BgImgScroll.scss'

export const BgImgScroll = () => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	})

	return (
		<div className="bg-img-wrap">
			<motion.img
				className="bg1"
				src={require(`../images/bg/1.jpg`)}
				alt="general zhang zuolin on a postcard"
			/>
			<motion.img src={require(`../images/bg/2-1.jpg`)} alt="" />
			<img src={require(`../images/bg/2-2.jpg`)} alt="" />
			<img src={require(`../images/bg/2-3.jpg`)} alt="" />
			{/* <div className="bg2">
				<motion.img src={require(`../images/bg/2-1.jpg`)} alt="" />
				<img src={require(`../images/bg/2-2.jpg`)} alt="" />
				<img src={require(`../images/bg/2-3.jpg`)} alt="" />
			</div> */}
			<motion.div
				ref={ref}
				style={{ position: 'absolute', top: '200vh', fontSize: 60 }}
				animate={{ scale: inView ? 2 : 1 }}
			>
				1234
			</motion.div>
		</div>
	)
}
