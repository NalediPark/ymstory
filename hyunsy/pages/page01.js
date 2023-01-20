var page = new Page();

page.text = `
군대를 가야한다.
`;

page.addChoice(new Choice('간다', 2));
page.addChoice(new Choice('가지 않는다', 3));

window.book.addPage(1, page);
