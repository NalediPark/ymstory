var page = new Page();

page.text = `
보석을 주웠다
갑자기.하얀 방으로 이동되었다
어떻게 하지?
`;

page.addChoice(new Choice('주위를 살펴본다', 3));

window.book.addPage(2, page);
