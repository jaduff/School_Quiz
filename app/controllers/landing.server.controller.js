exports.render = function(req, res) {


    res.render('landing', {
    title: 'School Quizzes',
    quizzes: [
      {"quizName": "Element Symbols", "address": "/quizzes/elements"},
      {"quizName": "Quiz 1"},
      {"quizName": "Quiz 3"}
    ]

  })
};
