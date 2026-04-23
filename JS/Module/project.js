//design a student management system where you use a namespace import to access funcitons like
//getStudentName(),getStudentMarks(),and calculateResult(), and implement a dynamic 
//import (import()) with async/await and error handling through a loadStudentmodule() function to load the student module dynamically when needed.

// project.js
async function loadStudentModule() {
    try {
        const studentModule = await import('./studentModule.js');
        return studentModule;
    } catch (error) {
        console.error('Error loading student module:', error);
        return null;
    }
}

async function displayStudentResult(studentId) {
    const studentModule = await loadStudentModule();
    if (studentModule) {
        const name = studentModule.getStudentName(studentId);
        const marks = studentModule.getStudentMarks(studentId);
        const result = studentModule.calculateResult(marks);
        
        console.log(`Student Name: ${name}`);
        console.log(`Marks: ${marks.join(', ')}`);
        console.log(`Result: ${result}`);
    }
}

// Example usage
displayStudentResult(1); // Output for Alice
displayStudentResult(2); // Output for Bob
displayStudentResult(3); // Output for Charlie
displayStudentResult(4); // Output for Unknown Student