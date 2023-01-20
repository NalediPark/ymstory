var page = new Page();

page.text = `
축하합니다 ! 당신은 무인도를 탈출했습니다 .
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(14, page);
