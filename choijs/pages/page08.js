var page = new Page();

page.text = `
처음으로 가지 말고 나랑 놀자!!!
`;

page.addChoice(new Choice('다음', 9));


window.book.addPage(8, page);
