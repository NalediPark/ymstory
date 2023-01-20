var page = new Page();

page.text = `
맞는다.
퍼억! 주먹이 날라와 나한테 꽂혔다.
후애애애애애애애앵.
`;

page.addChoice(new Choice('다음', 14));

window.book.addPage(9, page);
