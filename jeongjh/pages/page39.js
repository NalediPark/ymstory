var page = new Page();

page.text = `
틀린 것 같다
남자는 나가라고 하는 것 같다
`;

page.addChoice(new Choice('나가기', 4));


window.book.addPage(39, page);
