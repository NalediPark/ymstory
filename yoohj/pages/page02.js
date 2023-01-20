var page = new Page();

page.text = `
앗 메두4형제가 나타났다.
이제 어떻하지?
앗 무기다 니가 무기를 선택해줘 그의 따라 엔딩이 달라져.
`;

page.addChoice(new Choice('칼로 싸우기', 4));
page.addChoice(new Choice('봉인볼 사용', 7));
page.addChoice(new Choice('도망간다', 6));

window.book.addPage(2, page);
