var page = new Page();

page.text = `
핼리콥터에 의해 잡혔다
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(6, page);
