var page = new Page();

page.text = `
더이상 게임을 안 할 것 인가요?
`;

page.addChoice(new Choice('네', 6));
page.addChoice(new Choice('아니요', 7));

window.book.addPage(3, page);
