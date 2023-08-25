const getData = async () => {
	const response = await fetch("http://localhost:3000/api/tester", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 10,
		},
	});
	const data = await response.json();
	return data;
};

export default getData;

// "http://localhost:3000/api/tester"
// "https://avery-gillis-portfolio.vercel.app/api/tester"
