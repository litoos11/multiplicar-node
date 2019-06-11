const fs = require('fs');


let listarTabla = (base, limite) => {
	return new Promise((resolve, reject) => {
		if(!Number(base) || !Number(limite)){
			reject(`Verifica que los parametos base y limite sean un numero`);
			return;
		}

		let data = '';

		for(let i = 1; i <= limite; i++){
			data += `${base} X ${i} = ${base * i} \n`;
		}

		resolve(`${data}`);
	})

}

let crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {

		if(!Number(base || !Number(limite))){
			reject(`Verifica que los parametos base y limite sean un numero`);
			return;
		}

		let data = '';

		for(let i = 1; i <= limite; i++){
			data += `${base} X ${i} = ${base * i} \n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
			if(err)
				reject(err);
			else
				resolve(`tabla-${base}.txt`);
		});

	});
}

module.exports = {
	crearArchivo,
	listarTabla
}