var page = new Page();

page.text = `
군대에 가지 않으려면 금메달을 따야 한다.
금메달을 딸것인가?

`;

page.addChoice(new Choice('딴다', 3));
page.addChoice(new Choice('따지 않는다', 2));

window.book.addPage(1, page);
