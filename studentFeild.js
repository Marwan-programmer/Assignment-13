let data="John,Dorian,HTML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,99,92,88,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";


function studentsFeild(data){
    let students=data.split("#") ;
    return students.map(feild=>{let student=feild.split(",");
    
    return {
        firstName: student[0],
        lastName: student[1],
        courses: [
            {title: student[2], grade: student[5]},
            {title: student[3], grade: student[6]},
            {title: student[4], grade: student[7]},
        ],
        address: {
            street: student[8],
            city: student[9],
            state: student[10],
        },
        phone: student[11],
        average :(+student[5]+ +student[6]+ +student[7])/3
    };
})}
    


    function findBestStudent(students,minaverage){
     
       return students.filter(info=>{
        
       if(info.average>=minaverage)
          
      return  info ;
        
       })
    }


    function topStringStudent(students){

      function formatAddress(address) {
        let valueObject =Object.values(address);/////here I extracted values of objecet as array to use filter
       let result =valueObject.filter(echAddress=>{
          if(echAddress){
            return echAddress
          }
         } )
           return  result.length > 0 ? result.join(', ') : 'N/A';
      }
       
        return students.map(student=>{
          let  courses=student.courses;
       return `fullname: ${student.firstName} ${student.lastName}\n`+
       `Phone: ${student.phone || 'N/A'}\n` +
       `Address: ${formatAddress(student.address)}\n` +
       `Courses:\n` +
       `${courses[0].title}: ${courses[0].grade}\n` +
      `${courses[1].title}: ${courses[1].grade}\n` +
      `${courses[2].title}: ${courses[2].grade}\n` +
      `Average: ${student.average}\n`

            
      } ).join("\n")        
    }

  

const students=studentsFeild(data)
  console.log(topStringStudent(findBestStudent(students,80)))

