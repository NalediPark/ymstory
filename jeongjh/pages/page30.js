var page = new Page();

page.text = `
그러고 보니 오늘은 엄마의 생일이다
보석을 주면 엄마가 좋아할 것 같다
어떡할까
`;

page.addChoice(new Choice('다시가서 줍는다', 2));
page.addChoice(new Choice('그냥 간다', 31));

window.book.addPage(30, page);
