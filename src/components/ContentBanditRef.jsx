import React from 'react'
import { motion } from 'framer-motion'
import { smooth, flow, bouncy } from '../helper/easing'
import { refs } from '../data/ref_data'

export const ContentBanditRef = () => {
	const whileHover = {
		backgroundColor: '#F6EAD3',
		scale: 1.05,
		boxShadow:
			'0px 81px 33px rgba(42, 31, 9, 0.01), 0px 46px 27px rgba(42, 31, 9, 0.05), 0px 20px 20px rgba(42, 31, 9, 0.09), 0px 5px 11px rgba(42, 31, 9, 0.1), 0px 0px 0px rgba(42, 31, 9, 0.1)',
	}
	function Item({ bg, href, logo, icon, iconName }) {
		return (
			<motion.div
				className="ref-wrap"
				whileHover={whileHover}
				transition={{ ease: smooth, duration: 0.5 }}
				style={{ backgroundImage: `url(/images/ref/${bg}.jpg)` }}
			>
				<a href={href} target="_blank">
					<div className="content">
						<div className="mask"></div>
						<div className="ref-group">
							<img
								className="ref-logo"
								src={require(`../images/ref/${logo}.svg`)}
							/>
							<div className="ref-type">
								<img
									src={require(`../images/ref/${icon}.svg`)}
									alt=""
									className="ref-icon"
								/>
								<p>{iconName}</p>
							</div>
						</div>
					</div>
				</a>
			</motion.div>
		)
	}
	return (
		<div className="content-wrap">
			<h3 className="title">推荐资料</h3>
			<div className="reference-container">
				{refs.map((item) => {
					return (
						<Item
							key={item.id}
							bg={item.id}
							href={item.href}
							logo={item.logo}
							icon={item.icon}
							iconName={item.iconName}
						/>
					)
				})}
			</div>
		</div>
	)
}
