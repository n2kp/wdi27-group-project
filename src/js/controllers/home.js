angular
  .module('projectApp')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = [];
function HomeCtrl( ) {
  const vm = this;
  ///Random quote generator for new page.
  function padNum(num) {
    if(num < 10) return `0${num}`;
    return num;
  }

  const quote = [
    '“ Java is to JavaScript what Car is to Carpet. ”  -  Chris Heilmann',
    '“ If debugging is the process of removing software bugs, then programming must be the process of putting them in. ”-  Edsger Dijkstra',
    '“ Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ”- Rick Osborne',
    '“ Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ” - Martin Fowler',
    '“ Computers are good at following instructions, but not at reading your mind. ” - Donald Knuth',
    '"I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone."- Bjarne Stroustrup',
    '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."- Bill Gates',
    'One person’s crappy software is another person’s full time job. -Jessica Gaston',
    'A good programmer is someone who always looks both ways before crossing a one-way street. -Doug Linder',
    'If at first you don\'t succeed; call it version 1.0'

  ];

  const randomquote = Math.floor(Math.random()*(quote.length));


  vm.todayQuote = quote[randomquote];
  console.log(vm.todayQuote);
}
