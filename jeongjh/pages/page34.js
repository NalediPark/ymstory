var page = new Page();

page.text = `
이상한 공간에 한남자가 서있다
`;

page.addChoice(new Choice('뭐지...', 35));

window.book.addPage(34, page);
