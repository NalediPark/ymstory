var page = new Page();

page.text = `
더 게임을 할 것 인가요?
`;

page.addChoice(new Choice('네', 8));
page.addChoice(new Choice('아니오', 8));

window.book.addPage(4, page);
