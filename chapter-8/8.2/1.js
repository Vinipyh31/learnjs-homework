// Ответы:
// 1. true.
// Присвоение нового значения свойству Rabbit.prototype влияет на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих.

// 2. false.
// Объекты присваиваются по ссылке. Не создаётся копия Rabbit.prototype, это всегда один объект, на который ссылается и Rabbit.prototype, и [[Prototype]] объекта rabbit.
// Таким образом, когда мы изменяем этот объект по одной ссылке, изменения видны и по другой.

// 3. true.
// Операция delete применяется к свойствам конкретного объекта, на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.

// 4. undefined.
// Свойство eats удалено из прототипа, оно больше не существует.