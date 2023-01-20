var page = new Page();

page.text = `
버스를 탔다!
`;

page.addChoice(new Choice('엥벙랜드로', 4));
page.addChoice(new Choice('안해', 15));

window.book.addPage(2, page);
