var page = new Page();

page.text = `
수능 전날이다.

`;

page.addChoice(new Choice('공부를 할까?', 2));
page.addChoice(new Choice('공부를 하지말까?', 3));

window.book.addPage(1, page);
