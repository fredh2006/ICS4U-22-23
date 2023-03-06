import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let students = [
    {id: 1, name: 'Fred', age: 18},
    {id: 2, name: 'Kyle', age: 19},
    {id: 3, name: 'Kevin', age: 20}
]

app.get('/', (req, res)=>res.send('Hello World'))

app.get('/api/students', (req, res) => {
    res.send(students)
});

app.get('/api/students/:id', (req, res)=>{
    const student = students.find(s=>s.id===parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found')
    res.send(student)
})

app.get('/api/courses', (req, res)=>{
    res.send(courses)
})

let courses =[
    {id: 1, name: 'Introduction to Computer Science', instructor: 'Fred He'},
    {id: 2, name: 'Web Development Fundamentals', instructor: 'Kyle Jackson'},
    {id: 3, name: 'Databse Systems', instructor: 'Teddy Porfiris'}
]

app.post('/api/students', (req, res)=>{
    const student = {
        id: students.length+1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student)
})

app.put('/api/students/:id', (req, res)=>{
    const student = students.find(s=>s.id===parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found')
    student.name = req.body.name;
    student.age = req.body.age;
    res.send(student)
})

app.delete('/api/students/:id', (req, res)=>{
    const student = students.find(s=>s.id===parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found')
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);  
})

app.listen(PORT, ()=>console.log(`Server started on ${PORT}`));