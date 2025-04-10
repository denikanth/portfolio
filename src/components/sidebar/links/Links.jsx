import React from 'react'
import { motion } from 'framer-motion'

const variants = {
	open: {
		transition: { staggerChildern: 0.1, }


	},
	closed: {
		transition: {
			staggerChildern: 0.05,
			staggerDirection: -1,
		}
	}
}

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 40,
		opacity: 0,
	}
}

const Links = () => {

	const items = ["HomePage",
		"About",
		"Skills",
		"Services",
		"Portfolio",
		"Contact",

	]
	return (
		<motion.div className='links' variants={variants}>
			{items.map((item, i) => (
				<motion.a href={`#${item}`} key={i} variants={itemVariants}
					whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{item}</motion.a>
			))}

		</motion.div>
	)
}

export default Links
