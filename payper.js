var casper = require("casper").create({
  pageSettings: {
      loadImages:  false
  },
  waitTimeout: 20000
});

// define test user email
var i = casper.cli.get(0);
var url = casper.cli.get(1);
var ts = new Date().getTime();
var email = "user_" + i  + "_" + ts + "@loadtest.com";

// open initial page
casper.start(url, function() {
  //this.test.pass("starting for user " + email);
  //this.capture("steps/" + i + "_step1.png");
});

// sing in
casper.waitForSelector("#signInEmail", function() {
  // fill in the sign in form
  this.evaluate(function(email) {
    Meteor.logout();
    document.querySelector("#signInEmail").value = email;
  }, { email: email });

  // click the sign in button
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step2.png");
    this.click("#signInButton");
  });
});

// feeds page
casper.waitForSelector("#accountBalance", function() {
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step3.png");
    this.click("#accountBalance");
  });
});

// add credit
casper.waitForSelector("#addCredit", function() {
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step4.png");
    this.click("#addCredit");
  });
});

casper.waitForSelector(".pp-history-small", function() {
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step5.png");
    this.click("#home");
  });
});

// back to feeds page
casper.waitForSelector(".pp-feed-small", function() {
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step5.png");
    this.click(".pp-next-article");
  });
});

// read one article
casper.waitForSelector(".pp-article-content", function() {
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step6.png");
    this.click(".pp-article-content");
  });
});

casper.waitForSelector(".pp-article-content", function() {
  this.wait(3000, function() {
    //this.capture("steps/" + i + "_step7.png");
    this.click(".pp-article-content");
  });
});

// next articles page
casper.waitForSelector(".pp-articles", function() {
  //this.capture("steps/" + i + "_step8.png");
  this.click("#home");
});

// back to feeds page, access account history
casper.waitForSelector(".pp-feed-small", function() {
  //this.capture("steps/" + i + "_step9.png");
  this.click("#accountBalance");
});

casper.waitForSelector("#history", function() {
  this.wait(5000, function() {
    //this.capture("steps/" + i + "_step10.png");
    this.capture("outcomes/" + i + "_outcome.png");
    this.test.pass("finished for user " + email);
  });
});

casper.run();
