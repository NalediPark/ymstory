var page = new Page();

page.text = `
어차피 쉬는 참에 자기로 합니다.
그런데 스마트폰 진동이 울리네요?
문자가 왔어요!
문자를 볼가요?
`;

page.addChoice(new Choice('문자 보기', 7));
page.addChoice(new Choice('계속 자기', 10));

window.book.addPage(6, page);
