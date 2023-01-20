var page = new Page();

page.text = `
`


page.addChoice(new Choice('choice',11));
page.addChoice(new Choice('choice', 11));

window.book.addPage(10, page);
