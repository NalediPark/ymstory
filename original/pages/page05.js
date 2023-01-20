var page = new Page();

page.text = `
5페이지
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(5, page);
