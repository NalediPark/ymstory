var page = new Page();

page.text = `
이겼다


`;

page.addChoice(new Choice('다른스토리 보기', 0));
page.addChoice(new Choice('보스도전', 5));

window.book.addPage(10, page);
