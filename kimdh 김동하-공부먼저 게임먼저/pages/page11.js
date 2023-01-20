var page = new Page();

page.text = `
당신의 선택은 무엇?

`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(11, page);
