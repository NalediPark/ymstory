var page = new Page();

page.text = `
처음으로 돌아가서 다시 시작해보세요.

`;

page.addChoice(new Choice('다시 시작해보세요', 0));
;

window.book.addPage(7, page);
