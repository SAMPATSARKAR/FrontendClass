export function getStudentName(studentId) {
    const students = {
        1: 'Alice',
        2: 'Bob',
        3: 'Charlie'
    };
    return students[studentId] || 'Unknown Student';
}

export function getStudentMarks(studentId) {
    const marks = {
        1: [85, 90, 78],
        2: [80, 88, 92],
        3: [70, 75, 80]
    };
    return marks[studentId] || [];
}

export function calculateResult(marks) {
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    const average = total / marks.length;
    return average >= 60 ? 'Pass' : 'Fail';
}