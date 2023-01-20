var page = new Page();

page.text = `
춧하춧하
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('끝내기', 0));

window.book.addPage(7, page);
