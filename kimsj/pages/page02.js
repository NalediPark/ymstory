var page = new Page();

page.text = `
공부한다.
열심히 공부하는 중... 엉? 이건 안 배웠는데? 그냥 넘어갈까? 이해할 때까지 볼까?
이곳에 내용을 넣어주세요.
`;

page.addChoice(new Choice('넘어간다', 6));
page.addChoice(new Choice('계속 본다', 7));

window.book.addPage(2, page);
