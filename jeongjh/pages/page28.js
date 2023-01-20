var page = new Page();

page.text = `
그리고 아무도 없었다.
`;

page.addChoice(new Choice('...', 29));

window.book.addPage(28, page);
