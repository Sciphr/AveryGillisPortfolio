import React from "react";
import { motion } from "framer-motion";

const Datamap = ({ mapData }) => {
	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
			<div className="grid grid-cols-2 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-12">
				{mapData.map((data) => (
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						key={data.id}
						className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
					>
						<div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
							<img
								src={data.image}
								alt={data.description}
								className="h-full w-full object-cover object-center sm:h-full sm:w-full"
							/>
						</div>
						<div className="flex flex-1 flex-col space-y-2 p-4">
							<h3 className="text-sm font-medium text-gray-900">
								<a href={data.url} target="_blank" rel="noreferrer noopener">
									<span aria-hidden="true" className="absolute inset-0" />
									{data.title}
								</a>
							</h3>
							<p className="text-sm text-gray-500">{data.description}</p>
							<div className="flex flex-1 flex-col justify-end">
								<p className="text-sm italic text-gray-500">{data.type}</p>
								<p className="text-base font-medium text-gray-900">
									{data.source}
								</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Datamap;
