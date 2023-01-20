var page = new Page();

page.text = `
 3개월후....
전쟁이 났다
이곳에 내용을 넣어주세요.
`;

page.addChoice(new Choice('전쟁터에 갈까',4 ));
page.addChoice(new Choice('튈까', 5));

window.book.addPage(2, page);
