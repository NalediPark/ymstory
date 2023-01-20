var page = new Page();

page.text = `
군대행 여차 탑승...
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('2탄 시작하기', 8));

window.book.addPage(7, page);
