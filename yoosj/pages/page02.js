var page = new Page();

page.text = `
남자아이:이것 봐!
미르:응? 이게 뭔데?
남자아이:선택지 게임
`;

page.addChoice(new Choice('넘어가기', 3));


window.book.addPage(2, page);
