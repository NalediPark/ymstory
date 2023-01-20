var page = new Page();

page.text = `
영희의 목숨을 구했스비다!!
`;

page.addChoice(new Choice('집으로', 10));
page.addChoice(new Choice('안해', 15));

window.book.addPage(8, page);
