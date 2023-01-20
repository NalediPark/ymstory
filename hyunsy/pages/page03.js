var page = new Page();

page.text = `
헌병에게 쫒기고 있다.
`;

page.addChoice(new Choice('꼬질 꼬질한 차냐', 7));
page.addChoice(new Choice('스포츠카를 탈까', 6));

window.book.addPage(3, page);
