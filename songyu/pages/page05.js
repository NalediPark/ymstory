var page = new Page();

page.text = `
내려가서 아쉽다
`;

page.addChoice(new Choice('다시 시작하기', 0));


window.book.addPage(5, page);
