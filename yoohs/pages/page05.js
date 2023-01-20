var page = new Page();

page.text = `
전쟁이 났다.
직장이라 빨리 튀었다.
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('2탄 시작하기',8));

window.book.addPage(5, page);
