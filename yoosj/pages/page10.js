var page = new Page();

page.text = `
 이용해 주셔서 감사합니다!!!
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(10, page);
