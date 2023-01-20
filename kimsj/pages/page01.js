var page = new Page();

page.text = `
인강을 들으려는데 내가 좋아하는 유튜버의 영상이 5분 전에 올라왔다!!
음... 지금은 공부를 해야 하는데 이것만 보고 할까? 아니면 공부하고 볼까?
`;

page.addChoice(new Choice('공부한다', 2));
page.addChoice(new Choice('본다', 3));

window.book.addPage(1, page);
