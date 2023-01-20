var page = new Page();

page.text = `
맛있다 , 체력이 두배가 됐어 !
`;

page.addChoice(new Choice('다음으로', 8));


window.book.addPage(4, page);
