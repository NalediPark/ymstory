var page = new Page();

page.text = `
내가 보지말라 켔다아이가
`;

page.addChoice(new Choice('피하기', 4));
page.addChoice(new Choice('이건 진짜 누르면 안됨', 5));

window.book.addPage(2, page);
