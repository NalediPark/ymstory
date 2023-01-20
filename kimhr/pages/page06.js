var page = new Page();

page.text = `
또 누군가 문을 두드리며 간절하게 열어달라고 한다.
`;

page.addChoice(new Choice('정말 간절해보이는데 열어줄까?', 21));
page.addChoice(new Choice('열어주지말까?', 12));

window.book.addPage(6, page);
