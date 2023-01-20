var page = new Page();

page.text = `

시험 때 일어난 일
작가:배서준

`;

page.addChoice(new Choice('시작하기', 1));


window.book.addPage(0, page);
