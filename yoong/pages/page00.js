var page = new Page();

page.text = `
시작하셈
윤건우
용사 뭐시기
`;

page.addChoice(new Choice('시작하든가', 1));
page.addChoice(new Choice('말든가', 1));

window.book.addPage(0, page);
