var page = new Page();

page.text = `
처음으로 돌아가서 다시해보세요!

`;

page.addChoice(new Choice('다시 시작하기', 0));
;

window.book.addPage(4, page);
