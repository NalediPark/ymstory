var page = new Page();

page.text = `
당신은 무인도에 떨어졌다 ! 이제 어떡하지 ?
`;

page.addChoice(new Choice('식량찾기', 2 ));
page.addChoice(new Choice('구조요청하기', 3 ));

window.book.addPage(1, page);
