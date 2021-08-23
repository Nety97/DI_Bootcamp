// import {combineReducers} from 'redux'
let initState ={
    movie: [
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
        {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
        {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
        {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
    ],
    selected: ''
}
export const reducer =(state=initState, action={})=>{

    switch (action.type) {
        
        case 'MOVIE':
            return{...state, selected: action.payload}
       
        default:
            return {...state}
    }
    
}
// export const reducerTwo = (state= initState, action={})=>{
//     switch (action.payload) {
//         case 'Spider-Man: Homecoming':
//             return{...state, final:{title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,}}
//         case 'Aquaman':
//             return{...state, final:{title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,}}
//         case 'Black Panther':
//             return{...state, final:{title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,}}
//         case 'Avengers: Infinity War':
//             return{...state, final:{title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,}}
//         case 'Guardians of the Galaxy':
//             return{...state, final:{title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,}}
            
    
//         default:
//             return{...state}
//     }
// }

