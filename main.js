// Wskazówki
// Pobierz odpowiednie elementy.

// Zastanów się, skąd możemy brać losowe odpowiedzi.

// Zastanów się ilu funkcji w tym projekcie nam potrzeba i jakie ma być ich zadanie. Dla ułatwienia możesz ponownie obejrzeć odcinek, w którym prezentowałem działanie aplikacji.

// Zastanów się, w jakiej kolejności powinniśmy wywołać te funkcje. Wszystkie na raz? A może trzeba je zazębić? Czyli funkcja A odpala funkcję B, a funkcja B odpala funkcję C.


// Która funkcja powinna zostać odpalona jako pierwsza?



// Podpowiedzi do wskazówek
// Do pobrania są 4 elementy – obrazek, input, paragraf na odpowiedź i na błąd.

// Moglibyśmy stworzyć kilka zmiennych i do nich przypisać jakąś odpowiedź, ale tablica byłaby chyba dużo lepszym rozwiązaniem, prawda? :)

// Potrzebujemy:

// funkcję od wywoływania animacji,

// funkcję od sprawdzania, czy input został wypełniony oraz, czy na końcu jest znak zapytania,

// funkcję, która generuje losową odpowiedź.



// Oczywiście musimy zazębić nasze funkcje. 

// Ponownie odsyłam do odcinka, w którym prezentuje działanie aplikacji. 


// Najpierw widzimy animację, potem pokazuje nam się błąd lub losowa odpowiedź.

// Zatem najpierw musimy odpalić animacje, potem sprawdzamy, czy input został uzupełniony oraz, czy ma znak zapytania, a na końcu odpalamy funkcję, która generuje losową odpowiedź.



// Podpowiedzi do funkcji
// Animacja:

// animacja trwa 1 sekundę i wywołuje się po kliknięciu obrazka,

// po wykonaniu animacji (ale dopiero po wykonaniu!) musimy odpalić funkcję, która sprawdzi, czy input został poprawnie wypełniony.



// Sprawdzanie inputa:

// sprawdź, czy input nie jest pusty,

// sprawdź, czy na końcu inputa znajduje się znak zapytania (jest taka metoda, która pozwala na wydobycie konkretnego znaku ze stringa),

// jeśli wszystko jest ok, odpal funkcję generującą odpowiedź.



// Generowanie odpowiedzi:

// odpowiedzi są w tablicy – zastanów się, jak można dostać się do konkretnego elementu tablicy,

// odpowiedź na powyższe pytanie jest niżej, więc najpierw chwilę pomyśl :P

// jeszcze jedna warstwa ochronna, żebyś za szybko nie przeczytał/a odpowiedzi :)



// ok, niżej jest odpowiedź na pytanie,

// oczywiście do elementów tablicy możemy odwoływać się za pomocą ich indeksów,

// w jaki sposób możemy generować losowy indeks? Jest taka funkcja matematyczna od tego ;)

// na sam koniec wklej losową odpowiedź do naszego paragrafu.

const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Yes!', 'No.', 'Maybe.', 'Hard to say...',]

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'The question must end with a character "?".'
        answer.textContent = ''
    } else {
        error.textContent = 'You need to ask a question'
        answer.textContent = ''
    }
    ball.classList.remove('shake-animation');
}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 4)
    answer.innerHTML = `<span>Anserw:</span> ${answersArr[number]}`

    console.log(number);
}

ball.addEventListener('click', checkInput)