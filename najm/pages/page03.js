var page = new Page();

page.text = `
즐거운 만우절 이엿다ㅋ
`;

page.addChoice(new Choice('다시', 0));
page.addChoice(new Choice('안해', 15));

window.book.addPage(3, page);
