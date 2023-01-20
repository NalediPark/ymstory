var page = new Page();

page.text = `
맞는다.
퍼억!주먹이 날라외 나한테 푸욱 박혔다.
`;

page.addChoice(new Choice('다음', 14));

window.book.addPage(10, page);
