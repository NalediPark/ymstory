var page = new Page();

page.text = `
금메달을 따려면 열심히 운동해서
올림픽에 출전해야 합니다.
진짜 딸것인가?
`;

page.addChoice(new Choice('딴다', 6));
page.addChoice(new Choice('따지 않는다', 7));

window.book.addPage(3, page);
