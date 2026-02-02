import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import brandoraLogo from "@/assets/brandora logo.png";

const MotionLink = motion(Link);

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: "Home", to: "/" },
		{ name: "About", to: "/about" },
		{ name: "Services", to: "/services" }, // link to Services page
		{ name: "Case Studies", to: "/case-studies" },
		{ name: "Blog", to: "/blog" },
		{ name: "Contact", to: "/contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
		>
			<div className="container mx-auto px-6 py-2">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<MotionLink to="/" className="flex items-center gap-2" whileHover={{ scale: 1.03 }}>
						<img src={brandoraLogo} alt="Brandora" className="w-32 h-20 object-contain flex-shrink-0" />
					</MotionLink>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<MotionLink
								key={item.name}
								to={item.to}
								className="text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
								whileHover={{ y: -2 }}
							>
								{item.name}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
							</MotionLink>
						))}
					</div>

					{/* CTA Button */}
					<div className="hidden md:flex">
						<MotionLink to="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
							<Button className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium">
								Get Started
							</Button>
						</MotionLink>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden pt-6 pb-4"
					>
						{navItems.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.06 }}
								className="block"
							>
								<Link
									to={item.to}
									className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							</motion.div>
						))}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
							<Link to="/contact" onClick={() => setIsOpen(false)}>
								<Button className="mt-4 w-full px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium">
									Get Started
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navigation;
