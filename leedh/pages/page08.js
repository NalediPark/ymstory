var page = new Page();

page.text = `
농약 때문에 배탈이났다.
`;

page.addChoice(new Choice('다시하기', 0));

window.book.addPage(8, page);
