var page = new Page();

page.text = `
사과를 씻어 먹을까?그냥 먹을까?
`;

page.addChoice(new Choice('씻어먹기', 7));
page.addChoice(new Choice('그냥먹기', 8));

window.book.addPage(6, page);
