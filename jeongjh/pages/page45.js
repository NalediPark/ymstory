var page = new Page();

page.text = `
섬에 다다르자 뱀이 똬리를 틀고 있다
어케하지
`;

page.addChoice(new Choice('공격', 47));
page.addChoice(new Choice('설득', 49));

window.book.addPage(45, page);
