var page = new Page();

page.text = `
미르:이건 운세게임인데?
남자아이:그니까 한 번 해봐.
미르:그럴까...?
`;

page.addChoice(new Choice('게임시작하기', 4));


window.book.addPage(3, page);
