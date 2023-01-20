var page = new Page();

page.text = `
난 감옥에 갇혔다.

`;

page.addChoice(new Choice('10년동안 있을것이냐', 9));
page.addChoice(new Choice('탈옥이냐', 10));

window.book.addPage(8, page);
