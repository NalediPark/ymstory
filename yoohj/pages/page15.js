var page = new Page();

page.text = `
너... 드레곤이 말했다.
드레곤이 할말이 있다보다.
들어줄까? 들어주지 말까?
`;

page.addChoice(new Choice('들어준다', 17));
page.addChoice(new Choice('들어주지 않는다', 16));

window.book.addPage(15, page);
