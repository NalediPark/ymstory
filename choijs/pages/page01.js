var page = new Page();

page.text = `
우리는 올해에 여행을 간다?  
`;

page.addChoice(new Choice('간다.', 2));
page.addChoice(new Choice('가지 않는다.', 3));

window.book.addPage(1, page);
