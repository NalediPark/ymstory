var page = new Page();

page.text = `
섬에 다다르자 뱀이 똬리를 틀고 있다
어케하지
`;

page.addChoice(new Choice('공격', 48));
page.addChoice(new Choice('설득', 50));

window.book.addPage(46, page);
