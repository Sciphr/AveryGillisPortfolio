"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import getData from "./components/getData";
import Datamap from "./components/datamap";
import Footer from "./components/Footer";

const filtersVar = {
	source: [
		{ value: "SoundCloud", label: "SoundCloud", checked: false },
		{ value: "Backyard Boss", label: "Backyard Boss", checked: false },
		{ value: "LHSC", label: "LHSC", checked: false },
		{ value: "Diply", label: "Diply", checked: false },
	],
	type: [
		{ value: "Article", label: "Article", checked: false },
		{ value: "Video", label: "Video", checked: false },
		{ value: "Audio", label: "Audio", checked: false },
		{ value: "Text Interview", label: "Text Interview", checked: false },
	],
};

const sortOptions = [{ name: "Alphabetical", href: "#", current: true }];

const bio =
	"Thanks for stopping by! I've lived in the digital space for 7+ with a history in copywriting, copyediting, social commerce, brand alignment, social media management, page growth, and everything in between.";

const linkedIn = "https://www.linkedin.com/in/avery-gillis-35a21865";
const email = "mailto:averygillis13@gmail.com";
const avatarLink =
	"https://res.cloudinary.com/dcigheskg/image/upload/v1692822255/Avery%20Portfolio/slackpic_jvrxzu.png";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Home() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [filters, setFilters] = useState(filtersVar);
	const [filtersCount, setFiltersCount] = useState(0);

	useEffect(() => {
		if (data.length <= 0) {
			const dataFetch = async () => {
				await getData().then((data) => {
					setData(data);
				});
			};
			dataFetch();
		}

		setFiltersCount(
			filters.source.filter((x) => x.checked).length +
				filters.type.filter((x) => x.checked).length
		);

		if (filtersCount > 0) {
			const filteredStuff = data.filter((x) => {
				let source = false;
				let type = false;

				filters.source.forEach((y) => {
					if (y.checked && x.source === y.value) {
						source = true;
					}
				});

				filters.type.forEach((y) => {
					if (y.checked && x.type === y.value) {
						type = true;
					}
				});

				if (source || type) {
					return true;
				} else {
					return false;
				}
			});

			setFilteredData(filteredStuff);
		} else if (filtersCount === 0) {
			setData(data);
			setFilteredData([]);
		}
	}, [filters]);

	const clearAllFilters = () => {
		const newFilters = { ...filters };
		newFilters.source.forEach((x) => (x.checked = false));
		newFilters.type.forEach((x) => (x.checked = false));
		setFilters(newFilters);
		setFiltersCount(0);
	};

	return (
		<main className="flex min-h-screen flex-col justify-between pt-6">
			<div className="pb-10 mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-5xl lg:px-8">
				<div className="flex flex-col items-center justify-center text-4xl font-bold text-gray-900 gap-6 sm:flex-row">
					<div className="flex flex-col gap-4">
						<img
							className="inline-block h-30 w-30 rounded-full"
							src={avatarLink}
							alt="Avery Portait"
						/>
						<div className="flex justify-center space-x-6 md:order-2">
							<div className="rounded-xl p-1 bg-gray-300">
								<a
									target="_blank"
									rel="noreferrer noopener"
									key="LinkedIn"
									href={linkedIn}
									className="text-gray-600 hover:text-gray-400"
								>
									<span className="sr-only">LinkedIn</span>
									<BsLinkedin className="h-4 w-4" />
								</a>
							</div>
							<div className="rounded-xl p-1 bg-gray-300">
								<a
									target="_blank"
									rel="noreferrer noopener"
									key="Email"
									href={email}
									className="text-gray-600 hover:text-gray-400"
								>
									<span className="sr-only">LinkedIn</span>
									<MdEmail className="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2 items-center sm:items-stretch">
						<h1>Avery Gillis</h1>
						<div className="flex flex-row justify-between">
							<p className="text-sm text-gray-500 md:text-lg lg:text-xl">
								Social Content Manager | Communications Consultant
							</p>

							<div className="hidden lg:flex lg:flex-row">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
								<p className="text-sm text-gray-500">Canada</p>
							</div>
						</div>

						<div className="relative pt-8">
							<div
								className="absolute inset-0 flex items-center"
								aria-hidden="true"
							>
								<div className="w-full border-t border-gray-300" />
							</div>
						</div>
						<p className="text-sm text-black-500 pt-3">{bio}</p>
					</div>
				</div>
			</div>
			<Disclosure
				as="section"
				aria-labelledby="filter-heading"
				className="grid items-center border-b border-t border-gray-200"
			>
				<h2 id="filter-heading" className="sr-only">
					Filters
				</h2>
				<div className="relative col-start-1 row-start-1 py-4">
					<div className="mx-auto flex lg:max-w-6xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8 sm:max-w-2xl">
						<div>
							<Disclosure.Button className="group flex items-center font-medium text-gray-700">
								<FunnelIcon
									className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
									aria-hidden="true"
								/>
								{filtersCount} Filters
							</Disclosure.Button>
						</div>
						<div className="pl-6">
							<button
								onClick={clearAllFilters}
								type="button"
								className="text-gray-500"
							>
								Clear all
							</button>
						</div>
					</div>
				</div>
				<Disclosure.Panel className="border-t border-gray-200 py-10">
					<div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
						<div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
							<fieldset>
								<legend className="block font-medium">Source</legend>
								<div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
									{filters.source.map((option, optionIdx) => (
										<div
											key={option.value}
											className="flex items-center text-base sm:text-sm"
										>
											<input
												id={`source-${optionIdx}`}
												name="source"
												defaultValue={option.value}
												type="checkbox"
												className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
												onChange={(e) => {
													const newFilters = { ...filters };
													newFilters.source[optionIdx].checked =
														e.target.checked;
													setFilters(newFilters);
													setFiltersCount(
														newFilters.source.filter((x) => x.checked).length +
															newFilters.type.filter((x) => x.checked).length
													);
												}}
												checked={option.checked}
											/>
											<label
												htmlFor={`source-${optionIdx}`}
												className="ml-3 min-w-0 flex-1 text-gray-600"
											>
												{option.label}
											</label>
										</div>
									))}
								</div>
							</fieldset>
							<fieldset>
								<legend className="block font-medium">Type</legend>
								<div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
									{filters.type.map((option, optionIdx) => (
										<div
											key={option.value}
											className="flex items-center text-base sm:text-sm"
										>
											<input
												id={`type-${optionIdx}`}
												name="type"
												defaultValue={option.value}
												type="checkbox"
												className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
												onChange={(e) => {
													const newFilters = { ...filters };
													newFilters.type[optionIdx].checked = e.target.checked;
													setFilters(newFilters);
													setFiltersCount(
														newFilters.type.filter((x) => x.checked).length +
															newFilters.source.filter((x) => x.checked).length
													);
												}}
												checked={option.checked}
											/>
											<label
												htmlFor={`type-${optionIdx}`}
												className="ml-3 min-w-0 flex-1 text-gray-600"
											>
												{option.label}
											</label>
										</div>
									))}
								</div>
							</fieldset>
						</div>
					</div>
				</Disclosure.Panel>
				<div className="col-start-1 row-start-1 py-4">
					<div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
						<Menu as="div" className="relative hidden">
							{/* inline block */}
							<div className="flex">
								<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
									Sort
									<ChevronDownIcon
										className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										{sortOptions.map((option) => (
											<Menu.Item key={option.name}>
												{({ active }) => (
													<a
														href={option.href}
														className={classNames(
															option.current
																? "font-medium text-gray-900"
																: "text-gray-500",
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm"
														)}
													>
														{option.name}
													</a>
												)}
											</Menu.Item>
										))}
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</Disclosure>
			{filtersCount === 0 ? (
				<Datamap mapData={data} />
			) : (
				<Datamap mapData={filteredData} />
			)}
			<Footer />
		</main>
	);
}
