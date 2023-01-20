var page = new Page();

page.text = `
수학을선택 했다
집가서 공부하자
돈은 가질수없다
`;
page.addChoice(new Choice('다음', 8));

window.book.addPage(5, page);
