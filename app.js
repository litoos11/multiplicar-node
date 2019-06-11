const 	colorsSafe = require('colors/safe'),
		colors = require('colors'),
		argv = require('./config/yargs').argv,
		{crearArchivo, listarTabla} = require('./multiplicar/multiplicar');



//let base = process.argv.split('=')[1];
let comando = argv._[0];

switch(comando){
	case 'listar':
		console.log(`========Table del ${argv.base}========`.green);
		listarTabla(argv.base, argv.limite)
			.then(respuesta => console.log(respuesta))
			.catch(e => console.log(e));
	break;

	case 'crear':
		console.log(`====CREANDO ARCHIVO CON TABLA DEL ${argv.base}====`.red);
		crearArchivo(argv.base, argv.limite)
			//.then(archivo => console.log(`Archivo creado: ${archivo}`))
			.then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
			.catch(e => console.log(e));
	break;

	default:
		console.log('Comando no reconocido');
}

//console.log(argv);



