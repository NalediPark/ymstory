var page = new Page();

page.text = `
아니면 공부를 먼저해서 칭찬을 받아서
게임을 많이 하는 게 좋을 까?
`;

page.addChoice(new Choice('공부', 0));
page.addChoice(new Choice('공부', 6));

window.book.addPage(4, page);
