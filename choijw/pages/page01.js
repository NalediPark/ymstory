var page = new Page();

page.text = `
내일은 시험날이다


`;

page.addChoice(new Choice('다음', 2));

window.book.addPage(1, page);
