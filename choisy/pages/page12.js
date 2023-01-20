var page = new Page();

page.text = `
어 ? 옷을 펄럭여도 안보였나봐 ! 그냥 지나갔어 ..
`;

page.addChoice(new Choice('다음으로', 15));

window.book.addPage(12, page);
