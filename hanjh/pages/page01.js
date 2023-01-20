var page = new Page();

page.text = `
당신은 오늘 핸드폰이나 컴퓨터로 게임을 한 적이 있습니까?
`;

page.addChoice(new Choice('게임을 한 적이 있다.', 2));
page.addChoice(new Choice('게임을 한 적이 없다.', 3));

window.book.addPage(1, page);
