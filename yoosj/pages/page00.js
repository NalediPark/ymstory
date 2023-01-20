var page = new Page();

page.text = `
작가:유소정
제목:당신의 선택은?
`;

page.addChoice(new Choice('시작하기', 1));


window.book.addPage(0, page);
