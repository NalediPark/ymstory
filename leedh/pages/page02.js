var page = new Page();

page.text = `
사과를 어떻게 먹을까?
`;

page.addChoice(new Choice('깍아먹기', 5));
page.addChoice(new Choice('그냥 먹기', 6));

window.book.addPage(2, page);
