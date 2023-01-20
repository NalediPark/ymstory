var page = new Page();

page.text = `
내가 여기 있다는걸 어떻게 알리면 좋을까 ? 
`;

page.addChoice(new Choice('옷을 펄럭인다', 12));
page.addChoice(new Choice('불을 계속 피운다', 13));

window.book.addPage(9, page);
