var page = new Page();

page.text = `
끝났어요!!!
`;

page.addChoice(new Choice('처음으로 가기', 1));
page.addChoice(new Choice('처음으로 가기',1 ));

window.book.addPage(8, page);
