const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

let a = prompt('Один из последних проссмотренных фильов?'),
    b = prompt('На сколько вы его оцениваете?'),
    c = prompt('Один из последних проссмотренных фильов?'),
    d = prompt('На сколько вы его оцениваете?');

personalMovieDB.movies[a] = b;  // записываем данные в объект(присваиваем ключу а значение b)
personalMovieDB.movies[c] = d;  


console.log(personalMovieDB)