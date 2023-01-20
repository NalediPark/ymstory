var page = new Page();

page.text = `
문이네...
`;

page.addChoice(new Choice('나간다', 51));
page.addChoice(new Choice('나가지 않는다', 51));

window.book.addPage(52, page);
