var page = new Page();

page.text = `
맞는듯했다
`;

page.addChoice(new Choice('따라가기', 22));

window.book.addPage(40, page);
