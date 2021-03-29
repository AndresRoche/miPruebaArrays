document.addEventListener('DOMContentLoaded', () => {



	const escribir = document.getElementById('prueba1');


	let nombres = ["andres","diego","carolina","oscar","freddy","ronal"] 

	escribir.innerHTML = `<h2>Nuestra array de principio</h2> <br> <p>[${nombres}] </p><br><br>`;


	let re_1 = nombres.pop();

	escribir.innerHTML += `<h3><b>Array.pop() elemina el ultimo dato de la array</h3></b> <br />
							<p>array : <blue>[${nombres}]</blue> </p><br /><br />
							<p>dato eleminado : <red>${re_1}<red>	</p><br /><br /><br />
	`;


	let re_2 = nombres.shift();

	escribir.innerHTML += `<h3><b>Array.shift() elemina el primer dato de la array</h3></b> <br />
							<p>array : <blue>[${nombres}]</blue> </p><br /><br />
							<p>dato eleminado : <red>${re_2}</red>	</p><br /><br /><br />
	`;

	let re_3 = nombres.push('daniela','judith');
	
	escribir.innerHTML += `<h3><b>Array.push() agrega un elemento al final de la array</h3></b> <br />
							<p>array : <blue>[${nombres}]</blue> </p><br /><br />
							<p>dato agrega : <green>${nombres[4]} , ${nombres[5]}</green>	</p><br /><br /><br />
							<p>"re_3 = nombres.push('daniela','judith');" => El re_3 regresa la posicion actual de la array
							 <green>${re_3}</green>	</p><br /><br /><br />
	`;	



	let re_4 = nombres.reverse();
	
	escribir.innerHTML += `<h3><b>Array.reverse() revierte la array</h3></b> <br />
							<p> array revertido : <green>[${re_4}]</green> </p><br /><br />
							<p> array normal : <blue>[${nombres.reverse()}]</blue> </p><br /><br />
	`;							



	let re_5 = nombres.unshift('yerixon','polo');


	
	escribir.innerHTML += `<h3><b>Array.unshift() agrega un elemento al comienzo de la array</h3></b> <br />
							<p>array : <blue>[${nombres}]</blue> </p><br /><br />
							<p>dato agrega : <green>${nombres[0]} , ${nombres[1]}</green>	</p><br /><br /><br />
							<p>"re_5 = nombres.push('yerixon','polo');" => El re_5 regresa la posicion actual de la array
							 <green>${re_5}</green>	</p><br /><br /><br />
	`;							



	let hola = nombres;
	let re_6 = hola.sort();
		


	escribir.innerHTML += `<h3><b>Array.sort() ordena un array, si son numeros en ordena el menor a mayor y string en orden alfabeltico</h3></b> <br />
							<p> array ordenado : <green>[${re_6}]</green> </p><br /><br />
	
	`;		


	
	escribir.innerHTML += `<h3><b>Array.splice() agrega y elemina datos</h3></b> <br />
							<p> splice (indiceDeLaArray, CuantosDatosEleminoDesdeElIndice, CuantosDatosAgregoDesdeElIndice)</p>
							<p> array normal : <blue>[${nombres}]</blue> </p><br /><br />

	`;						

	let re_7 = nombres.splice(2,3);

	escribir.innerHTML += `<p> eleminado datos en array splice(2,3)</p>
							<p> datos eleminado : <red>[${re_7}]</red> </p><br /><br />

							<p> array normal : <blue>[${nombres}]</blue> </p><br /><br />
    `;

	let re_8 = nombres.splice(2,0,'david','nefertiti','amazon');
	escribir.innerHTML += `<p> agregados datos en array splice(2,0,'david','nefertiti','amazon')</p>
							<p> datos agregados : <green>[${nombres[2]},${nombres[3]},${nombres[4]}]</green> </p><br /><br />

							<p> array normal : <blue>[${nombres}]</blue> </p><br /><br />
    `;



	let nombres2 = ["andres","diego","carolina","oscar","freddy","ronal"] 

    let nuevoArrayConString = nombres2.join();

    escribir.innerHTML += `<h3><b>Array.join() este metodo convierte toda la array en string</h3></b> <br />
							<p> array normal : <blue>[${nombres2}]</blue> </p><br /><br />
							<p> array estrayendo nombres[1] : <blue>[${nombres2[0]}]</blue> </p><br /><br />

							<p> array con el nuevoArrayConString : <blue>${nuevoArrayConString}</blue> </p><br /><br />
							<p> array estrayendo nuevoArrayConString[1] : <blue>${nuevoArrayConString[0]}</blue> </p><br /><br />
	`;

	let nuevoArrayConString2 = nombres2.join(' - ');

	escribir.innerHTML += `
							<p> con join(' - '); podemos hacer un separador a todo el string</p>
							<p> array con el nuevoArrayConString : <blue>${nuevoArrayConString2}</blue> </p><br /><br />
	`;




	let nuevoArray = nombres2.slice(1, 3);

    escribir.innerHTML += `<h3><b>Array.slice() devuelve la array de principio a fin para otra array</h3></b> <br />
							<p> array normal : <blue>[${nombres2}]</blue> </p><br /><br />

							<p> array con el nuevoArray : <green>[${nuevoArray}]</green> </p><br /><br />

	`;


    escribir.innerHTML += `<h3><b>Array.filter() recorre todo la array para luego hacer alguna funcion</h3></b> <br />
							<p> array normal : <blue>[${nombres2}]</blue> </p><br /><br />
    `;
	let nuevoArray1 = nombres2.filter(numero => escribir.innerHTML += '<p>'+numero+'Hola Mama :D </p><br>');

	escribir.innerHTML += `<br><p> nombres2.filter(numero => escribir.innerHTML += numero+'Hola Mama :D ')<br></p>
							<p> array con el nuevoArray : <green>[${nuevoArray1}]</green> </p><br /><br />

	`;

	let numeroNOSE = [13,43,2,31,34,5,32,4,2,6,7,4,34,2,2313]

	nuevoArray2 = numeroNOSE.filter(numero => {
		if (numero > 10) {
			escribir.innerHTML += '<p>'+numero+'</p><br>';
		} 
	});

	escribir.innerHTML += `<br><p> let nuevoArray2 = numeroNOSE.filter(numero => numero.legth > 5);</p>
							<p> <h2> luego esta forEach() que es basicamente lo mismo</h2></p><br /><br />

	`;
});