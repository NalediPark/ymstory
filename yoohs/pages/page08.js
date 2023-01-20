var page = new Page();

page.text = `
오늘은 가족여행날이다.
엄마께 하루만 더 있자고 할까요?

`;

page.addChoice(new Choice('말하지 않는다', 9));
page.addChoice(new Choice('말한다', 10));

window.book.addPage(8, page);
