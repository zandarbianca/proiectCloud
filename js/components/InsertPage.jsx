// js/components/InsertPage.jsx
export default function InsertPage() {
	const insertRecord = (event) => {
		event.preventDefault();
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
		const data = {title, description, price};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("title").value = "";
			document.getElementById("description").value = "";
            document.getElementById("price").value = "";
		});
	}

	return (
	
			<div className="container px-6 py-10 mx-auto mt-40">
				<h1 className="w-[500px] mx-auto text-center text-6xl">Adauga in meniu</h1>
				<p className="w-[1000px] mx-auto  text-center mt-10 text-l">* Toate campurile sunt obligatorii</p>

				<form className="mt-20">
					<div className="mb-10">
						<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titlul felului de mancare</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="ex: Platou Carnuri" required/>
					</div>
					<div className="mb-10">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrierea felului de mancare</label>
						<textarea id="description"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required
                               placeholder="ex: 1buc Frigaruie Pui, 1buc Frigaruie Vita, 2buc Cotlet Miel, 2buc Cafta, 4 Aripioare De Pui La Gratar"/>
					</div>
                    <div className="mb-10">
						<label htmlFor="price"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pretul felului de mancare</label>
						<textarea id="price"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required
                               placeholder="199 Lei"/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="pr-4 text-white  mb-80 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Adauga in meniu
					</button>
				</form>
			</div>
	
	)
}