import React from "react";
import studentEvaluationData from "./orientation/data-structure/data-structure";

import "./App.css";

function App() {
   // const [students] = useState(studentEvaluationData);

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Sort Functionality
   const sortedStudentEvaluationData = studentEvaluationData.sort((student1, student2) => {
      if (student1.name > student2.name) {
         return 1;
      } else if (student1.name === student2.name) {
         return 0;
      } else if (student1.name < student2.name) {
         return -1;
      }
      return 0;
   });

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get ordered list of students
   const getStudentList = sortedStudentEvaluationData.map((student) => <li key={student.id}>{student.name}</li>);

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of assignments
   // const renderAssignments = studentEvaluationData.map((student) => {
   //    return student.assignment.map((assignment) => {
   //       return assignment.name;
   //    });
   // });
   // .join(" ");

   const renderAssignments = studentEvaluationData.map((student) => {
      return student.assignment;
   });

   console.log("weergave van renderAssignment", renderAssignments);

   const array = [
      { name: "Joe", age: 17 },
      { name: "Bob", age: 17 },
      { name: "Tom", age: 35 },
   ];

   const distinctAges = [...new Set(array.map((x) => x.age))];
   console.log(distinctAges);

   const distinctAssignments = [...new Set(renderAssignments.map((item) => item.name))];

   console.log(distinctAssignments);

   return (
      <div className="app-container">
         <h2>Students</h2>
         <ul>{getStudentList ? getStudentList : null}</ul>
         <h2>Assignments</h2>
         <p></p>
         {/* <ul>{renderAssignments ? renderAssignments : null}</ul> */}
      </div>
   );
}

export default App;

/* 
const data = {
   payload: [
      {
         id: 1,
         name: "Atta",
         brands: [
            {
               id: 118,
               name: "Wheatola",
               subProducts: [
                  {
                     id: 858,
                     name: "Chakki Aata",
                     minPrice: 52,
                     maxPrice: 56,
                  },
                  {
                     id: 2,
                     name: "Chakki Atta",
                     minPrice: 222,
                     maxPrice: 236,
                  },
               ],
            },
         ],
      },
      {
         id: 16,
         name: "Rice (Branded)",
         brands: [
            {
               id: 25,
               name: "CookStar",
               subProducts: [
                  {
                     id: 1163,
                     name: "Best Basmati",
                     creditDays: 0,
                     minPrice: 5600,
                     maxPrice: 5600,
                  },
                  {
                     id: 863,
                     name: "Extra Long Grain Basmati",
                     creditDays: 0,
                     minPrice: 7800,
                     maxPrice: 7800,
                  },
               ],
            },
         ],
      },
   ],
};

const renderData = data.payload
   .map((payload) => {
      return payload.brands
         .map((brand) => {
            return brand.subProducts
               .map((subProduct) => {
                  return `${payload.name}, ${brand.name}, ${subProduct.name}`;
               })
               .join("\n");
         })
         .join("\n");
   })
   .join("\n"); */
