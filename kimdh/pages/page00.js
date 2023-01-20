var page = new Page();

page.text = `
당신의 선택은?
작가 김도현
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
