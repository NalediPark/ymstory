var page = new Page();

page.text = `
역시나 맛있다!
`;

page.addChoice(new Choice('다시하기', 0));

window.book.addPage(7, page);
