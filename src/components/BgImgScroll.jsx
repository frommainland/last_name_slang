import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useInView,
} from 'framer-motion'
import React, { useState, useLayoutEffect } from 'react'

import './BgImgScroll.scss'
import useWindowSize from '../hooks/useWindowSize'
import { useRef } from 'react'

const Parallax = ({ offsetStart, offsetEnd, src, rotate = 0 }) => {
	const windowsize = useWindowSize()
	const { scrollY } = useScroll()
	const [elementTop, setElementTop] = useState(0)
	const [clientHeight, setClientHeight] = useState(0)
	const ref = useRef(null)
	const initial = elementTop - clientHeight
	const final = elementTop + Math.abs(offsetEnd)

	const y = useSpring(
		useTransform(scrollY, [initial, final], [offsetStart, offsetEnd]),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		}
	)
	useLayoutEffect(() => {
		const element = ref.current
		// save our layout measurements in a function in order to trigger
		// it both on mount and on resize
		const onResize = () => {
			// use getBoundingClientRect instead of offsetTop in order to
			// get the offset relative to the viewport
			setElementTop(
				element.getBoundingClientRect().top + window.scrollY ||
					window.pageYOffset
			)
			setClientHeight(window.innerHeight)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [ref])
	return (
		<motion.div
			className={`all img${src}`}
			ref={ref}
			style={{
				y: y,
				backgroundImage: `url(/images/bg/${src}.jpg)`,
				rotate: rotate,
			}}
		></motion.div>
	)
}

const ParallaxOld = ({ offsetStart, offsetEnd, src, alt, rotate }) => {
	const windowsize = useWindowSize()
	const { scrollY } = useScroll()

	const ref = useRef(null)
	const isInView = useInView(ref)
	const y = useSpring(
		useTransform(scrollY, [0, windowsize.height], [offsetStart, offsetEnd]),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		}
	)
	return (
		<motion.img
			ref={ref}
			src={require(`../images/bg/${src}.jpg`)}
			alt={alt}
			style={{ y: isInView ? y : 0, rotate: rotate }}
		/>
	)
}

export const BgImgScroll = () => {
	return (
		<div className="bg-img-wrap">
			<Parallax offsetStart={0} offsetEnd={-200} src={1} rotate={10} />
			<Parallax offsetStart={50} offsetEnd={-50} src="2-1" rotate={3} />
			<Parallax offsetStart={100} offsetEnd={-100} src="2-2" />
			<Parallax offsetStart={20} offsetEnd={-20} src="2-3" />
			<Parallax offsetStart={80} offsetEnd={-80} src={3} rotate={6} />
			<Parallax offsetStart={200} offsetEnd={-200} src={4} rotate={-11} />
			<Parallax offsetStart={50} offsetEnd={-50} src={5} rotate={7} />
			<Parallax offsetStart={150} offsetEnd={-150} src={6} />
		</div>
	)
}
