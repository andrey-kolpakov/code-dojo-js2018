let map = new Map([
    ['hi', 'привет'], 
    ['42', 'ответ на главный вопрос жизни, вселенной и всего такого'],
    ['boolean', true],
    [function(){}, 'Функция']
])

map.set(function newFunction(){}, 'Функция')        //Еще один способ добавить элемент map
   .set('new', 'новый')                             //Можно вызывать цепочкой

console.log(map.size)                       //Таким образом можно посмотреть количество элементов в map

console.log(map.get('42'))                  //Получение элемента map

console.log(map.has('42'))                  //Проверка на наличе элемента по ключу

map.delete('hi')                            //Удаление значения по ключу
console.log(map.has('hi'))                  //false Проверка на наличе элемента по ключу

map.clear()                                 //Удаление всех элементов

console.log(map)

map.set('new', 'новый')
    .set('old', 'старый')
    .set('element', 'элемент')


//Методы
console.log(map.keys())             //Возвращает объект MapIterator - список ключей
console.log(...map.keys())          //Возвращает строкой список ключей
console.log([...map.keys()])        //Возвращает массивом список ключей

console.log(' ')

console.log(map.values())             //Возвращает объект MapIterator - список значений
console.log(...map.values())          //Возвращает строкой список значений
console.log([...map.values()])        //Возвращает массивом список значений

console.log(' ')

console.log(...map.entries())          //возвращает массив массивов, в каждом ключ и значение
console.log(map.entries())             //возвращает перебираемый объект


//Клонирование map
const map2 = new Map(map.entries())     

console.log(' ')

//Возвращает одно и то же
console.log(map)
console.log(map2)


//Клонирование с помощью реструктуризации
const [first, second, third] = map
console.log(first, second, third)       //В каждой переменной (по порядку внутри map) лежат массивы в которых ключ и значение из соответствующих по порядку элементов map
console.log(' ')


//Перебор
for (let item of map){
    console.log(item)       //Возвращает каждый массив с двумя переменными - ключ и значение из map
}

console.log(' ')

for (let [key, value] of map){
    console.log(key)         //Возвращает ключ
    console.log(value)       //Возвращает ключ
}

console.log(' ')

map.forEach((value, key, map) => console.log(value, key, map))  //То же самое, что и выше