var page = new Page();

page.text = `
제목:여행
작가:최준서
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
