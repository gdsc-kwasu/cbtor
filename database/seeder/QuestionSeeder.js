const faker = require('faker');
const Question = require('../../models/question');

const createQuestion = async (course, amount = 100) => {
    for(let i = 1; i <= amount; i++) {
        const q = {
            question: faker.lorem.sentences(),
            answer: 'A',
            options: [
                faker.lorem.sentence(),
                faker.lorem.sentence(),
                faker.lorem.sentence(),
                faker.lorem.sentence()
            ],
            course,
        };

        await Question.create(q);
    }
};

module.exports = createQuestion;
