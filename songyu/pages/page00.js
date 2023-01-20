var page = new Page();

page.text = `
작가:송윤우
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
