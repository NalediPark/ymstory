var page = new Page();

page.text = `
헌병에게 쫒기는데 두 갈래로 나눠져있다
`;

page.addChoice(new Choice('구멍이 있는 다리냐', 15));
page.addChoice(new Choice('두번째 선택지',16 ));

window.book.addPage(14, page);
