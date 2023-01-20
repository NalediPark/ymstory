var page = new Page();

page.text = `
영희는 민초를 실어한다...
`;

page.addChoice(new Choice('다시', 0));
page.addChoice(new Choice('안해', 15));

window.book.addPage(6, page);
