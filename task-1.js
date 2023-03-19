/* Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
 */

const xmlData = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`

const parser = new DOMParser();

const xmlStudentData = parser.parseFromString(xmlData, "text/xml");

const studentDataEN = xmlStudentData.querySelectorAll("student")[0];
const studentDataRU = xmlStudentData.querySelectorAll("student")[1];

const studentNameEN = studentDataEN.querySelector("first").textContent + ' ' + studentDataEN.querySelector("second").textContent;
const studentNameRU = studentDataRU.querySelector("first").textContent + ' ' + studentDataRU.querySelector("second").textContent;

const result = {
    list: [
        { 
            name: studentNameEN,
            age: Number(studentDataEN.querySelector("age").textContent), 
            prof: studentDataEN.querySelector("prof").textContent, 
            lang: studentDataEN.querySelector("name").getAttribute("lang") 
        },
        {
            name: studentNameRU,
            age: Number(studentDataRU.querySelector("age").textContent),
            prof: studentDataRU.querySelector("prof").textContent,
            lang: studentDataRU.querySelector("name").getAttribute("lang")
        },
    ]
};

console.log(result);