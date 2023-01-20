var page = new Page();

page.text = `
공부를 할까?
놀까?
`;

page.addChoice(new Choice('공부하기', 3));
page.addChoice(new Choice('재밌게 놀기', 2));

window.book.addPage(1, page);
