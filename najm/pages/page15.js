var page = new Page();

page.text = `
`;

page.addChoice(new Choice('시작', 1));
page.addChoice(new Choice('홈으로', 1));

window.book.addPage(15, page);
