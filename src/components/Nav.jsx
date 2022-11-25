import { motion } from 'framer-motion'
import React from 'react'
import './Nav.scss'
import { smooth, flow, bouncy } from '../helper/easing'
import { useState } from 'react'

const Nav = ({ navClick, setNavClick }) => {
	const [isOpen, setIsOpen] = useState(false)

	const hover = {
		backgroundColor: 'rgba(220,207,183,1)',
	}
	const clickHandle = () => {
		setIsOpen(!isOpen)
	}

	const LinkIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			fill="none"
		>
			<g clipPath="url(#a)">
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
	)

	return (
		<>
			<div className="nav">
				<img
					className="logo"
					src={require(`../images/website-logo.svg`).default}
					alt="website logo"
				/>
				<motion.div
					className="about"
					style={{
						backgroundColor: 'rgba(244,230,203,0.5)',
						backdropFilter: 'blur(5px)',
					}}
					whileHover={hover}
					transition={{ ease: smooth, duration: 0.5 }}
					onClick={clickHandle}
				>
					关于网站&nbsp;©2022
				</motion.div>
			</div>
			<motion.div
				className="about-mask"
				initial={{ y: '100vh' }}
				animate={{
					y: isOpen ? '0' : '100vh',
					backdropFilter: isOpen ? 'blur(10px)' : 'blur(0px)',
				}}
				transition={{ ease: flow, duration: 0.5 }}
			>
				<div className="flex">
					<div className="about-content">
						<h1>关于内容</h1>
						<p>
							一开始只是一系列简单设计练习中的第二个
							-《怎样展示一个简单的列表信息》。
							<a
								href="https://new-jargon.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								查看第一个练习{LinkIcon}
							</a>
						</p>
						<p>
							在找资料的时候看到了更多的土匪相关的信息，所以也顺道把土匪历史上简单的来龙去脉添加了进去。如果有时间，推荐先听一下推荐内容里小宇宙中跑题大会一期关于土匪的播客，对于土匪的历史文化有相当详细的补充。
						</p>
						<p>
							如果你已经读到这里，
							<a
								href="https://youtu.be/nJPERZDfyWc"
								target="_blank"
								rel="noreferrer"
							>
								Everything is a Remix Remastered (2015 HD)
								{LinkIcon}
							</a>
							&nbsp;不会让你失望。
						</p>
					</div>
					<div className="about-website">
						<h1>关于网站</h1>
						<p>
							<a
								href="https://github.com/frommainland/last_name_slang.git"
								target="_blank"
								rel="noreferrer"
							>
								网站源码github{LinkIcon}
							</a>
						</p>
						<p>
							<a
								href="https://frommainland.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								曾经及未来的项目{LinkIcon}
							</a>
						</p>
						<p>
							<a href="mailto:caihehuang@gmail.com">
								欢迎建议，请发邮件联系{LinkIcon}
							</a>
						</p>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Nav
