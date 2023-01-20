var page = new Page();

page.text = `
제목공부먼저?아니면공부먼저?
작가김동하
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
