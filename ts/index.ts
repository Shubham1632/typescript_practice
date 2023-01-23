import {List} from "./List"

class Subject{

    constructor(private name: string, private marks: number){}

    getSubject(): string{
        return this.name + " " + `${this.marks}`
    }    

    setSubject(name: string, marks: number){
        this.name = name
        this.marks = marks
    }
    
}


class Person {

    isStudent : boolean
    name: string
    age: number
    hobbies : List<string>
    subjects : List<Subject>

    constructor(name: string,isStudent: boolean,age: number, hobbies: List<string>, subjects : List<Subject>){

        this.isStudent = isStudent
        this.name = name
        this.age = age
        this.hobbies = hobbies
        this.subjects = subjects
    }

    static removestudent(persons : Person[]){
        persons.filter((instance) => instance.age <= 18 && instance.isStudent === true)
    }
    static decreaseage(persons : Person[]){
        persons.forEach((instacnce)=>{instacnce.age -= 2})
    }
}

let hobbiesofstudent = new List<string>(["badminton","reading","coding"])
let subjectofstudent = new List<Subject>([new Subject("math",98)])

const students = [
    new Person("shubham",true,20, hobbiesofstudent,subjectofstudent),
    new Person("vishrut",true,22, hobbiesofstudent,subjectofstudent),
    new Person("mahesh",true,18, hobbiesofstudent,subjectofstudent)
]


const data = document.getElementById("studentdata");

// if(data) data.innerHTML = student.name
// console.log(studentsdata);
let studentsdata: string = "";


students.forEach((elements)=>{
    studentsdata += "<div id='instance'>"
    studentsdata += elements.name + " : Age- ";
    studentsdata += elements.age + " |  isStudent- ";
    studentsdata += elements.isStudent + " |  Hobbies- ";

    elements.hobbies.data.forEach(hobbie => {
        studentsdata += hobbie + ", ";
    });
    studentsdata += " | ";
    elements.subjects.data.forEach(subject =>{
        studentsdata += " Subject and marks - " + subject.getSubject();
    }) 


    studentsdata += "</div> </br>";
})

console.log(studentsdata)

if(data) data.innerHTML = studentsdata;



