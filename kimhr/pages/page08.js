var page = new Page();

page.text = `
약을 먹으니 대충 다 치유가 됐다!! 그나저나 식량은 많이가져갈수록 오래버티니까 많이가져갈까 며칠먹을만큼만 가져갈까?
`;

page.addChoice(new Choice('며칠먹을 만큼만 가져간다.', 6));
page.addChoice(new Choice('일단 많이 가져간다.', 11));

window.book.addPage(8, page);
