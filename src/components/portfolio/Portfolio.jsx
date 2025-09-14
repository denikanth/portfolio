import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import weather from '../../assets/weather.png'
import spotify from '../../assets/spotify.png'
import youtube from '../../assets/youtube.png'
import chatApp from '../../assets/chatApp.png'
import real from  '../../assets/real.jpg'
const items = [
	{
		id: 1,
		title: "Real Estate",
		img: real,
		desc: "Real Estate Web App – A full-stack MERN application that allows users to browse, filter, and post property listings. It features secure authentication with JWT, responsive UI, advanced search functionality, and a seamless user experience for both buyers and sellers.",
		link:"https://real-estate-r5qq.onrender.com/"
	},
	{
		id: 2,
		title: "Spotify Clone",
		img: spotify,
		desc: "Developed a Spotify clone featuring a sleek and responsive user interface with React.js. Implemented key functionalities such as music playback, playlist creation, and search capabilities. Utilized HTML and CSS for styling and layout, ensuring a visually appealing and user-friendly design.",
		link:"https://spotify-clone-111.netlify.app"
	},
	{
		id: 3,
		title: "Youtube Clone",
		img: youtube,
		link:"https://vidtube-app-1.netlify.app",
		desc: "Developed a YouTube clone with a responsive and interactive user interface using React.js. Integrated the YouTube API to fetch and display real-time video content, including search functionality and video playback. Utilized HTML and CSS for styling and layout, ensuring a visually appealing and user-friendly design. ",
	},
	{
		id: 4,
		title: "Chat App",
		img: chatApp,
		link:"https://chat-app-112.netlify.app",
		desc: "Developed a real-time chat application with a responsive and intuitive user interface using React.js. Integrated Firebase for real-time database, authentication, and backend services, ensuring secure and efficient data management. Utilized HTML and CSS for styling and layout, creating a visually appealing and user-friendly design.",
	},
	{
		id: 5,
		title: "Weather app",
		img: weather,
		link:"https://weather-app-113.netlify.app",
		desc: "Developed a weather application with a clean and responsive user interface using React.js. Integrated the OpenWeather API to fetch and display real-time weather data, including temperature, humidity, and weather conditions for various locations. Utilized HTML and CSS for styling and layout, ensuring a visually appealing and user-friendly design. ",
 
    
	},
	
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		
		<section >
			<div className="container">
				<div className="wrapper">
					<motion.div className="imageContainer"
						whileHover={{
							scaleX: 1.02, scaleY: 1.02,
							transition: { duration: 0.5 },border:"3px solid orange"
						}} ref={ref}>

						<motion.img src={item.img} alt=""  />

					</motion.div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<a href={item.link} target="_blank"  >
							
						</a>
						
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1 className="my_projects">My Projects</h1>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>

			<motion.div className="down">
				<motion.a href="#Contact">
					<motion.img src="./arrow.png" alt="" animate={
						{
							y: 10,
							opacity: 0.2,
							transition: {
								duration: 2,
								repeat: Infinity,
							}
						}
					}
					/>
				</motion.a>

			</motion.div>

			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;




