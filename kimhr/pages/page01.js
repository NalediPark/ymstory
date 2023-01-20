var page = new Page();

page.text = `
비명소리에 일찍잠에서 깼다. 창문으로 바라본 세상은 끔찍했다. 온통피와 초록색 무언가로 가득했다..
`;

page.addChoice(new Choice('티비를 틀어보자', 2));
page.addChoice(new Choice('한번 밖에 나가보자', 3));

window.book.addPage(1, page);
