let input = [
  {
    '1': ['4', 'Lorem ipsum']
  },
  {
    '3': ['2', 'Lorem ipsum']
  }
];

function transform(input) {
  let output = [];

  input.forEach((question) => {
    for(let key in question) {
      let transformedQuestion = {};
      transformedQuestion.question_id = +key;
      transformedQuestion.answer_value = +question[key][0];
      transformedQuestion.comments = question[key][1];
      output.push(transformedQuestion);
    }
  });

  return output;
}

console.log(transform(input));