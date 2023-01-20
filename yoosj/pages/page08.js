var page = new Page();

page.text = `
시험을 완료했다
   100점!!!
`;

page.addChoice(new Choice('끝내기', 11));


window.book.addPage(8, page);
