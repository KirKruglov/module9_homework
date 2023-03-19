/* Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль. */

const jsonData = `
    {
        "list": [
            {
                "name": "Petr",
                "age": "20",
                "prof": "mechanic"
            },
            {
                "name": "Vova",
                "age": "60",
                "prof": "pilot"
            }
        ]
   }
`
const listData = JSON.parse(jsonData);

const result = {
    list: [
        {
            name: listData.list[0].name,
            age: Number(listData.list[0].age),
            prof: listData.list[0].prof
        },
        {
            name: listData.list[1].name,
            age: Number(listData.list[1].age),
            prof: listData.list[1].prof
        },
    ]
};

console.log("result", result);