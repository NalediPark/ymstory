var page = new Page();

page.text = `
공부할까?
제작:김민준
`;

page.addChoice(new Choice('시작하기', 1));


window.book.addPage(0, page);
