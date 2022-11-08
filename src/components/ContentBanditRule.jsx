import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { rules } from '../data/rule_data'

export const ContentBanditRule = () => {
	function Content({ details }) {
		return (
			<motion.div
				className="details"
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<p>{details}</p>
			</motion.div>
		)
	}

	function Item({ title, details }) {
		const [isOpen, setIsOpen] = useState(false)
		const toggle = () => {
			setIsOpen(!isOpen)
		}

		return (
			<motion.li
				layout
				onClick={toggle}
				initial={{ borderRadius: 50 }}
				whileHover={{ backgroundColor: '#E9DBC2' }}
			>
				<motion.div className="title" layout>
					<p>{title}</p>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						animate={{
							rotate: isOpen ? 45 : 0,
						}}
					>
						<rect width="32" height="32" fill="#F4E6CB" rx="16" />
						<path
							stroke="#524C47"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M16 9v14M9 16h14"
						/>
					</motion.svg>
				</motion.div>
				<AnimatePresence initial={false}>
					{isOpen && <Content details={details} />}
				</AnimatePresence>
			</motion.li>
		)
	}

	return (
		<div className="content-wrap">
			<h3 className="title">道上规矩</h3>
			<cite>
				内容来源：
				<a
					href="https://zhuanlan.zhihu.com/p/538925697"
					target="_blank"
				>
					《你不知道的土匪规矩：“七不夺，八不抢”》- Lousd
				</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="15"
					fill="none"
				>
					<g clip-path="url(#a)">
						<path
							fill="#524C47"
							d="M7.5 14.993c4.103 0 7.5-3.403 7.5-7.497C15 3.396 11.596 0 7.493 0 3.397 0 0 3.395 0 7.496c0 4.094 3.404 7.497 7.5 7.497Zm2.375-5.615c-.338 0-.559-.235-.559-.596v-1.3l.11-1.184-1.095 1.169-2.772 2.778a.616.616 0 0 1-.441.176c-.331 0-.56-.22-.56-.566 0-.146.074-.3.185-.411l2.786-2.778 1.184-1.103-1.125.118H6.221c-.368 0-.603-.22-.603-.551 0-.338.228-.559.588-.559h3.588c.39 0 .64.177.64.625v3.572c0 .353-.228.61-.559.61Z"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" d="M0 0h15v15H0z" />
						</clipPath>
					</defs>
				</svg>
			</cite>
			<p>
				土匪遵从祖师爷留下的“规矩”是奉行“七不夺，八不抢”的原则。那么何谓“七不夺，八不抢”？这里的“七、八”是概数。
			</p>
			<AnimateSharedLayout>
				<motion.ul>
					{rules.map((item) => {
						return (
							<Item
								key={item.id}
								title={item.title}
								details={item.details}
							/>
						)
					})}
				</motion.ul>
			</AnimateSharedLayout>
		</div>
	)
}
