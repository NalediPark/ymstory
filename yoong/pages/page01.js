var page = new Page();

page.text = `
보지말고 걍하셈
`;

page.addChoice(new Choice('누르지 마시오', 2));
page.addChoice(new Choice('시작하기', 3));

window.book.addPage(1, page);
