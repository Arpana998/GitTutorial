class student{
    static count = 0;
    constructor(name, age, phoneNumber, marks)
    {
      this.name = name;
      this.age = age;
      this.phoneNumber = phoneNumber;
      this.marks = marks;
      student.count++;
    }
    
    SetPlacementAge(minPlacementAge){
      return(minMarks) => {
        if(this.marks > minMarks && this.age > minPlacementAge){
          console.log(this.name + " is ready for placement");
        }
        else
        {
          console.log(this.name + " is not ready for placement");
        }
      }
    }
    
    
    Eligiblity()
    {
      if(this.marks >= 40)
      {
        console.log(`${this.name} is eligible for college`);
      }
      else
      {
        console.log(`${this.name} is not eligible for college`);
      }
      
    }
    
    studentCount()
      {
        console.log('Number of students='+ student.count);
      }
      
      placement(){
        
      }
  }
  var student1 = new student("Rashmika", 16, 987686, 88);
  var student2 = new student("Vaibhavi", 17, 984567, 70);
  var student3 = new student("Prathamesh", 20, 45657, 39);
  var student4 = new student("Danish", 21, 6874554, 21);
  var student5 = new student("animika", 15, 685068, 28);
  
  student1.Eligiblity();
  student3.Eligiblity();
  student1.studentCount();
  student1.SetPlacementAge(15)(50);
  student2.SetPlacementAge(15)(50);
  student3.SetPlacementAge(15)(50);
  student4.SetPlacementAge(15)(50);
  student5.SetPlacementAge(15)(50);