var page = new Page();

page.text = `
시험당일
국어시험은100점
나이스!!!!!!
`;
page.addChoice(new Choice('다음', 7));


window.book.addPage(6, page);
