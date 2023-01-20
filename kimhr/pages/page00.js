var page = new Page();

page.text = `
좀비바이러스에서 살아남기
작가 김혜림
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
