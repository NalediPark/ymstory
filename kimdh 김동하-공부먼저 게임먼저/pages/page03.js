var page = new Page();

page.text = `
일단 게임을 할지 생각중 게임을 먼저하면.
엄크한테혼날것같다.
그래서 게임을 못할수도......
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(3, page);
