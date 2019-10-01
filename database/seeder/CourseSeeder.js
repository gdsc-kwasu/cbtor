const Course = require('../../models/course');

const courses = [
    { code: 'GNS 101', title: 'Use of English'},
    { code: 'GNS 102', title: 'Use of English II' },
    { code: 'GNS 103', title: 'Computer Appreciation I' },
    { code: 'GNS 104', title: 'Computer Appreciation II' },
    { code: 'PHY 101', title: 'General Physics I' },
    { code: 'PHY 102', title: 'General Physics II' },
    { code: 'CHM 131', title: 'General Chemistry I' },
    { code: 'CHM 141', title: 'General Chemistry II' },
    { code: 'MAT 101', title: 'Introduction to Algebra' },
    { code: 'MAT 102', title: 'Introduction to General Calculus' },
    { code: 'MAT 103', title: 'Trigonometry and Vector' },
    { code: 'GNS 201', title: 'Entrepreneurship and Innovation' },
];

courses.forEach(async ({code, title}) => {
    await Course.create({
        code,
        title,
        standard: {
            question: 40,
            time: 35,
        }
    }, function(err) {
        if (err) throw err;
    })
});

console.log('Completed running Course Seeder');
