var page = new Page();

page.text = `
안녕하세요.
.
계발자:최선웅
수학VS국어
`;

page.addChoice(new Choice('시작', 1));

window.book.addPage(0, page);
