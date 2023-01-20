var page = new Page();

page.text = `
엄마가10000원을 주셨다 문제집을사야지
수학10000원 국어3300원
국어를사면 6700원은 내것이다 수학을사면 돈이남지않는다. 뭘살까?
`;

page.addChoice(new Choice('수학',5 ));
page.addChoice(new Choice('국어', 4));

window.book.addPage(3, page);
