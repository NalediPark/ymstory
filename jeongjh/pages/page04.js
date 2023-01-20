var page = new Page();

page.text = `
밖이다

쉴까?
`;

page.addChoice(new Choice('쉰다', 5));
page.addChoice(new Choice('안 쉰다', 5));

window.book.addPage(4, page);
