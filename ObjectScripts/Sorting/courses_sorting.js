let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];
const compareTwo = (courseOne, courseTwo) => {
    if (courseOne.Title < courseTwo.Title) {
        return -9; //Less Than
    } else if (courseOne.Title > courseTwo.Title) {
        return 9;  //Greater Than
    } else return 0; // Equal To
}
const compareFee = (courseOne, courseTwo) => {
    return Number(courseOne.Fee) - Number(courseTwo.Fee);
}
function show(courses) {
    for (i = 0; i < courses.length; i++) {
        console.log(courses[i].Title, courses[i].Fee)
    }
    console.log("") 
}

courses.sort(compareFee);
show(courses);
courses.sort(compareTwo);
show(courses);