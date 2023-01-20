var page = new Page();

page.text = `
내일은 영희가 기다리던 체험학습날 이에요ㅋ
하지만 내일 운석이 떨어진대요………
영희의 선택은?????
`;

page.addChoice(new Choice('간다', 2));
page.addChoice(new Choice('안간다', 3));
page.addChoice(new Choice('안해', 15));

window.book.addPage(1, page);
