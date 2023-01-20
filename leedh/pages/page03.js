var page = new Page();

page.text = `
실수로 껍질을 씹었다.
`;

page.addChoice(new Choice('다시하기', 0));

window.book.addPage(3, page);
