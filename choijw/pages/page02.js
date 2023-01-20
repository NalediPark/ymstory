var page = new Page();

page.text = `
국어가너무어렵다
`;
page.addChoice(new Choice('다음', 3));

window.book.addPage(2, page);
