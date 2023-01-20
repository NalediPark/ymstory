var page = new Page();

page.text = `
당신은 용사 입니다.
용과 싸우기 위해 어떤 무기를 고르시겠습니까?

`;

page.addChoice(new Choice('활과 화살', 2));
page.addChoice(new Choice('검', 3));

window.book.addPage(1, page);
