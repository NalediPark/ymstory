var page = new Page();

page.text = `
내가 더 좋아하는 계절은?
`;

page.addChoice(new Choice('여름', 2));
page.addChoice(new Choice('겨울', 3));

window.book.addPage(1, page);
