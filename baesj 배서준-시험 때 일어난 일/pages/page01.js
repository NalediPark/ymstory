var page = new Page();

page.text = `
오늘은 내가 너무나도 힘들고 졸리다.
근데 내일이 시험이다

`;

page.addChoice(new Choice('공부를 할까?', 2));
page.addChoice(new Choice('공부를 하지 말까?', 3));

window.book.addPage(1, page);
