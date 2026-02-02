import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import brandoraLogo from "@/assets/brandora-logo.png";

const Footer = () => {
	const socialLinks = [
		{
			name: "Instagram",
			url: "https://www.instagram.com/brandora.lk?igsh=YWx2d3NoazAwYmdr",
			icon: Instagram,
		},
		{
			name: "Facebook",
			url: "https://www.facebook.com/profile.php?id=61583031705757",
			icon: Facebook,
		},
		{
			name: "TikTok",
			url: "https://www.tiktok.com/@brandora.lk?_r=1&_t=ZS-93AWsof5SjK",
			icon: () => (
				<svg
					className="w-5 h-5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#ffffff"
					aria-hidden="true"
					focusable="false"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
							stroke="#ffffff"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			),
		},
	];

	return (
		<footer className="bg-primary text-primary-foreground font-semibold">
			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
					<div>
						<img
							src={brandoraLogo}
							alt="Brandora"
							className="h-20 md:h-24 w-auto mb-4"
						/>
						<p className="text-base md:text-lg text-primary-foreground/80 mb-6">
							Glow up your brand through digital excellence.
						</p>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									className="hover:text-accent transition-colors"
								>
									<social.icon size={20} />
								</a>
							))}
						</div>
					</div>

					<div>
						<h4 className="font-display text-lg md:text-xl font-semibold mb-4">
							Services
						</h4>
						<ul className="space-y-2 text-base md:text-lg text-primary-foreground/80">
							<li>
								<Link
									to="/services/seo"
									className="hover:text-accent transition-colors"
								>
									SEO
								</Link>
							</li>
							<li>
								<Link
									to="/services/web-design"
									className="hover:text-accent transition-colors"
								>
									Web Design
								</Link>
							</li>
							<li>
								<Link
									to="/services/social-media"
									className="hover:text-accent transition-colors"
								>
									Social Media
								</Link>
							</li>
							<li>
								<Link
									to="/services/ads"
									className="hover:text-accent transition-colors"
								>
									Advertising
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-display text-lg md:text-xl font-semibold mb-4">
							Company
						</h4>
						<ul className="space-y-2 text-base md:text-lg text-primary-foreground/80">
							<li>
								<Link
									to="/about"
									className="hover:text-accent transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/case-studies"
									className="hover:text-accent transition-colors"
								>
									Case Studies
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="hover:text-accent transition-colors"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-display text-lg md:text-xl font-semibold mb-4">
							Legal
						</h4>
						<ul className="space-y-2 text-base md:text-lg text-primary-foreground/80">
							<li>
								<Link
									to="/privacy"
									className="hover:text-accent transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="hover:text-accent transition-colors"
								>
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-accent transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-primary-foreground/20 pt-8 text-center text-sm md:text-base text-primary-foreground/60">
					<p>
						&copy; 2026{" "}
						<a href="https://brandora.lk" className="hover:text-accent">
							Brandora.lk
						</a>
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
