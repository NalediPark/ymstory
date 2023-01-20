var page = new Page();

page.text = `
공부를 할까,놀까?
`;

page.addChoice(new Choice('공부', 6));
page.addChoice(new Choice('놀기', 7));

window.book.addPage(3, page);
