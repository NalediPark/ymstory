var page = new Page();

page.text = `
어?불꽃놀이는 어딨지,,? 우와.. 별똥별이잖아..? 멋지다.. 무슨소원을 빌까? 음.. 그래!! 내가 빈 소원은 비밀이다. 소원을 말하면 그소원은 이루어지지 않기 때문이다. 힌트는 내가한 일에대한 것이다.
`;

page.addChoice(new Choice('주인공의 소원보기', 22));
page.addChoice(new Choice('처음으로', 0));
window.book.addPage(18, page);
