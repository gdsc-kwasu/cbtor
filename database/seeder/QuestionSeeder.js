const faker = require('faker');
const Question = require('../../models/question');

const createQuestion = async (course, amount = 100) => {
    for(let i = 1; i <= amount; i++) {
        const q = {
            question: faker.lorem.sentences(),
            answer: 'A',
            options: [
                '$$x^2 + 2x^4 - 15x^2 = 10$$ is not a solution',
                faker.lorem.sentence(),
                faker.lorem.sentence(),
                '$$\\lim_{x \\to \\infty} \\frac{x^4}{6} + \\frac{x^4}{4} = 41$$ is a solution'
            ],
            course,
        };

        await Question.create(q);
    }
};

module.exports = createQuestion;
