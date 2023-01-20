var page = new Page();

page.text = `
수박을 어떻게 먹을까?
`;

page.addChoice(new Choice('잘라먹기', 3));
page.addChoice(new Choice('화채로먹기', 4));

window.book.addPage(1, page);
