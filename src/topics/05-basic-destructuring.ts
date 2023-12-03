// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     songTitle: string;
//     datails: Details;
// }

// interface Details {
//     autor: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 100,
//     songDuration: 300,
//     songTitle: 'Bandoleros',
//     datails: {
//         autor: 'Don Omar',
//         year: 2005
//     }
// }
//DESECTRUTURACION DE OBJETOS
// const {songTitle, songDuration, datails } = audioPlayer; //esta es destructuracion el instructor
// const {autor, year} = datails; //esta es destructuracion el instructor

// console.log('Song title: ', songTitle);
// console.log('Duracion: ', songDuration);
// console.log('Autor: ', autor);
// console.log('Año: ', year);


//DESECTRUTURACION DE ARREGLOS
//  const [p1,p2,p3] : string[] = ['Goku', 'Vegeta', 'Trunks'];
//  const [, , trunks='Not found'] : string[] = ['Goku', 'Vegeta', 'Trunks'];
 const [, , trunks='Not found'] : string[] = ['Goku', 'Vegeta'];

console.warn('Personaje 1: ', trunks);




export{}