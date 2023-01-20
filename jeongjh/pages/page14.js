var page = new Page();

page.text = `
섬에 다다르자 뱀이 똬리를 틀고 있다
어케하지(이번에는 대화로 풀자)
`;

page.addChoice(new Choice('공격', 16));
page.addChoice(new Choice('설득', 18));

window.book.addPage(14, page);
