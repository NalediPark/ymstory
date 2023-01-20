var page = new Page();

page.text = `
극한인생
작가:현승연
`;

page.addChoice(new Choice('시작하기', 1));


window.book.addPage(0, page);
