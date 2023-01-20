var page = new Page();

page.text = `
영희는 유명한 놀이기구를 타려고 합니다! 근데 머라고 적혀있는거 같습니다. 탈까요?
`;

page.addChoice(new Choice('탄다', 9));
page.addChoice(new Choice('다른걸 탄다', 8));
page.addChoice(new Choice('안해', 15));

window.book.addPage(7, page);
