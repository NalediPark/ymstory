var page = new Page();

page.text = `
Q.2 곧 시험인데 공부할까?하지만 집에서도 했는데..
`;

page.addChoice(new Choice('공부한다', 8));
page.addChoice(new Choice('논다', 9));

window.book.addPage(7, page);
