//Set - коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.
const set = new Set(['button', 'active', 'small']);

console.log(set)

set.add('button')
set.add('bigButton')
console.log(set)    //Добавился только bigButton, потому что button уже есть

const set2 = new Set('button')
console.log(set2)   //Добавилась каждая буква по отдельности, причем t, поскольку их две, добавилась только один раз. Получилось b,u,t,o,n

set2.add('button')
console.log(set2)           //Теперь в set2 лежит: b,u,t,o,n, button

set2.clear()                //Удаление всех значений из set

set2.add(['button'])
console.log(set2)           //Таким образом можно добавить один элемент строку в set

set3 = new Set(set)        //клонирование set
console.log(set3)  
console.log(' ')



//Методы
console.log(set)
console.log(set.has('button'))                    //поиск элемента по ключу/названию (в set это одно и то же)

set.add({ClassName: 'nameOfClass'})
console.log(set.has({ClassName: 'nameOfClass'}))  //здесь поиск не сработает и вернёт false, поскольку для сравнения был создан новый объект, а в set лежит идентичный, но другой. Чтобы поиск сработал, необходимо, чтобы и в set, и в поиске была ссылка на переменную, в которой лежит сам объект

set.delete('active')                              //удаление элемента
console.log(set.has('active'))                    //false
console.log(' ')

console.log(set.values())                         //Возвращает итерируемый объект с элоементами set
console.log(set.keys())                           //Возвращает итерируемый объект с элоементами set

console.log(...set)                               //Возвращает элементы из set

console.log(set.entries())                        //Возвращает пары ключ-значение, но поскольку тут нет ключеЙ, возвращает массивы в кеоторых лежит по два элемента - значение/значение

console.log([...set])                             //Создание массива из set
console.log(Array.from(set))                      //Создание массива из set

console.log(' ')

//Перебор. Два одинаковых варианта
for (let item of set){
    console.log(item)
}
set.forEach(item => console.log(item))


