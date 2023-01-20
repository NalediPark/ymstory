var page = new Page();

page.text = `
공부vs너튜브/게임/인스타
나의 선택은??
만든 사람:김서준
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
