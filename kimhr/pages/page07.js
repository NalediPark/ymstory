var page = new Page();

page.text = `
으악 급하게가다 좀비에게 물렸다.. 근데 저 바닥에있는 알약은 뭐지?
`;

page.addChoice(new Choice('좀비로 변하는것보단 낫지 먹는다', 8));
page.addChoice(new Choice('그래도 뭔지도 모르는데.. 먹지말자', 9));

window.book.addPage(7, page);
