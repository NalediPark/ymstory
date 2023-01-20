var page = new Page();

page.text = `
1시간을 놀았다.
더 놀까? 공부하러 집에 갈까?
`;

page.addChoice(new Choice('공부하러 집에 가기', 7));
page.addChoice(new Choice('더놀기', 6));

window.book.addPage(2, page);
