var page = new Page();

page.text = `
무인도탈출 
작가 : 최서윤
나의 선택은?

`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
