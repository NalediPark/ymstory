var page = new Page();

page.text = `
뭔말인지 모르겠다
`;

page.addChoice(new Choice('나간다', 34));

window.book.addPage(33, page);
