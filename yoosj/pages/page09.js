var page = new Page();

page.text = `
시험을 망쳤다...
    35점 ㅠㅠ
`;

page.addChoice(new Choice('끝내기', 10));


window.book.addPage(9, page);
