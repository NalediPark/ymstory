var page = new Page();

page.text = `
너의 선택이 달린 모험
작가:유하준
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
