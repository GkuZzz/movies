let numberOfFilms 

function start() {
    // numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //создаем вопрс в промте
    
    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //создаем вопрс в промте

    }
}

start()

const personalMovieDB = {  // объект база данных
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних проссмотренных фильов?'),
            b = prompt('На сколько вы его оцениваете?');
    
        if (a != null && b != null && a != '' && b != '' && a.length <50) { // проверяем на соответсвие условиям
            personalMovieDB.movies[a] = b;  // если условия выполнены записываем данные в объект(присваиваем ключу а значение b)
        } else {
            i--  // уходим на 1 цикл назад
        }
    }
}

rememberMyFilms()


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ('Просмотренно довольно мало фильмов')
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log ('Вы классический зритель')
    } else if (personalMovieDB > 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersonalLevel()

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGeners () {
    for (let i = 1; i <= 3; i++) {
        const genere = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.geners[i - 1] = genere;
    }
}

writeYourGeners()




