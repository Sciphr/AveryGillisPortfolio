import React from "react";
import { BsLinkedin } from "react-icons/bs";

const navigation = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/avery-gillis-35a21865/",
		icon: (props) => <BsLinkedin />,
	},
];

const Footer = () => {
	return (
		<footer className="bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500"
							target="_blank"
							rel="noreferrer noopener"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-gray-500">
						&copy; 2023 Avery Gillis content | All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
