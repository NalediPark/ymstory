var page = new Page();

page.text = `
추카추카.
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('끝내기', 0));

window.book.addPage(4, page);
