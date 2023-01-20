var page = new Page();

page.text = `
이제는 게임을 좀 쉴까요?
`;

page.addChoice(new Choice('네', 8));
page.addChoice(new Choice('아니오', 8));

window.book.addPage(5, page);
