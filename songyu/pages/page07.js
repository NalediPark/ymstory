var page = new Page();

page.text = `
10분후 감기에 걸렸다
`;

page.addChoice(new Choice('다시 시작하기', 0));


window.book.addPage(7, page);
