var page = new Page();

page.text = `
으악 음식이 너무많아 떨어뜨려서 걸려넘어져 많은좀비에게 물려 죽었다! 처음부터 다시해보자,,!
`;

page.addChoice(new Choice('처음부터', 0));

window.book.addPage(11, page);
