var page = new Page();

page.text = `
시험당일
국어시험은0점
안돼
`;
page.addChoice(new Choice('다음', 9));



window.book.addPage(8, page);
