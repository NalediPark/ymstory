var page = new Page();

page.text = `
사과를 깍다 손을 베였다.
`;

page.addChoice(new Choice('다시하기', 0));

window.book.addPage(5, page);
