var page = new Page();

page.text = `
시작하기
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
