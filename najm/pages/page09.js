var page = new Page();

page.text = `
영희의 마지막 놀이기구였습니다...
`;

page.addChoice(new Choice('살아나기', 0));
page.addChoice(new Choice('안해', 15));

window.book.addPage(9, page);
