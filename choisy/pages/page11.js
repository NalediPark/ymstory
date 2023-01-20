var page = new Page();

page.text = `
바닥에 써놓은 글씨를 보고 헬기가 왔어 ! 탈출이다 !
`;

page.addChoice(new Choice('다음으로', 14));

window.book.addPage(11, page);
