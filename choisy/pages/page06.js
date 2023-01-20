var page = new Page();

page.text = `
배가 이쪽으로 오고 있어 !
`;

page.addChoice(new Choice('다음으로', 9 ));


window.book.addPage(6, page);
