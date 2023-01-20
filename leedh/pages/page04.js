var page = new Page();

page.text = `
시원하고 달콤하다!
`;

page.addChoice(new Choice('다시하기', 0));

window.book.addPage(4, page);
