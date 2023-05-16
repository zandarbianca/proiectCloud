// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);
    

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}


	return (
		<section className="bg-white dark:bg-gray-900">
            
			<div className="container px-6 py-10 mx-auto">

				<h1 className="w-[1000px] mx-auto text-center text-6xl">Aplicatie pentru gestionarea unui meniu de restaurant </h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">- Meniul curent al restaurantului - </p>

				<div className="grid  gap-8 mt-8  xl:gap-12  xl:grid-cols-1 ">
					{records.map(record => (
						<div
							key={record._id}
							className="block columns-4 bg-red-50 p-6  border border-gray-200  shadow hover:bg-red-100 ">

							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.title}
							</h5>
                        
							<div className="font-normal text-gray-700 dark:text-gray-400  ">
								{record.description}
							</div>
                            <div className="text-lg font-bold text-orange-700 ">
								{record.price}
							</div>
							<div >
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className=" pr-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Sterge
								</button>
                               
							</div>
                           

						</div>
					))}
				</div>
			</div>
		</section>
	)
}
