const getData = async () => {
	const response = await fetch(
		"https://avery-gillis-portfolio.vercel.app/api/tester",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		}
	);
	const data = await response.json();
	return data;
};

export default getData;
