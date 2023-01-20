var page = new Page();

page.text = `
파바박!
열공 중
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(7, page);
