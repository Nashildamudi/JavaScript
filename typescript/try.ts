 type Course = {
    title: string;
    description: string;
    duration?: string;
    fee: number
 }

 let course1: Course = {
    title: "web dev",
    description: "web dev with mern",
    duration: "5months",
    fee: 12000
 }

 console.log(course1.title);


  let course2: Course = {
    title: "web design",
    description: "web dev with css",
    fee: 12000
 }

  console.log(course2.title);

