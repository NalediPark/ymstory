var page = new Page();

page.text = `
어디로 갈까?
`;

page.addChoice(new Choice('한국', 5));
page.addChoice(new Choice('외국', 4));

window.book.addPage(2, page);
