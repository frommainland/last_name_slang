import { motion, useInView } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useRef, useEffect } from 'react'
import './BgImgScroll.scss'

export const BgImgScroll = () => {
	const bg2Ref = useRef(null)
	const isInView = useInView(bg2Ref)

	useEffect(() => {
		console.log('Element is in view: ', isInView)
	}, [isInView])

	return (
		<div className="bg-img-wrap">
			<motion.img
				className="bg1"
				src={require(`../images/bg/1.jpg`)}
				alt="general zhang xueliang on a postcard"
			/>
			<div className="bg2">
				<motion.img
					src={require(`../images/bg/2-1.jpg`)}
					alt=""
					ref={bg2Ref}
					animate={{
						scale: 2,
					}}
				/>
				<img src={require(`../images/bg/2-2.jpg`)} alt="" />
				<img src={require(`../images/bg/2-3.jpg`)} alt="" />
			</div>
		</div>
	)
}
