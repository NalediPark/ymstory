var page = new Page();

page.text = `
정상까지 올라와서 기쁘다
`;

page.addChoice(new Choice('처음으로 돌아가기', 0));


window.book.addPage(4, page);
