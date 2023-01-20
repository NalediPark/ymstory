var page = new Page();

page.text = `
영희의 체험학습
만든사람 : 잘생긴 나지민
`;

page.addChoice(new Choice('시작', 1));
page.addChoice(new Choice('안해', 15));

window.book.addPage(0, page);
