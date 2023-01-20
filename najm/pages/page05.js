var page = new Page();

page.text = `
색만 그렇지 그냥 케찹이엿다
`;

page.addChoice(new Choice('놀이기구로', 7));
page.addChoice(new Choice('안해', 15));

window.book.addPage(5, page);
