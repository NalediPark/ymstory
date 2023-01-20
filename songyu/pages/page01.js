var page = new Page();

page.text = `
산으로 갈까 바다로 갈까?
`;

page.addChoice(new Choice('산으로 간다', 2));
page.addChoice(new Choice('바다로 간다', 3));

window.book.addPage(1, page);
