var page = new Page();

page.text = `
창살은 어떤걸로 없어질까

`;

page.addChoice(new Choice('망치', 11));
page.addChoice(new Choice('머리', 12));

window.book.addPage(10, page);
