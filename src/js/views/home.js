import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
	const [lista, setLista] = useState([
		{
			"address": "",
			"agenda_slug": "juana",
			"email": "",
			"full_name": "",
			"id": 11048897850,
			"phone": ""
		},
		{
			"address": "",
			"agenda_slug": "juana",
			"email": "",
			"full_name": "",
			"id": 20656686233,
			"phone": ""
		}
	])
	return (
		<div className= "text-center mt-5">
			<ul>
				{lista.map((element, index) => <li key = {index}>{element.full_name}</li>)}
			</ul>

		</div>
		
	)
};
