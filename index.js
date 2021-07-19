const { Builder, By, Key, util } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("firefox").build();

  // await driver.findElement(By.name('q')).sendKeys("Selenium",Key.RETURN)
  // await driver.get("https://lambdatest.github.io/sample-todo-app/");
  await driver.get("https://www.sparksfoundation.org/");

  //for title
  var title = await driver.getTitle();
  console.log("Title is:", title);

  //for url

  var url = await driver.getCurrentUrl() ;
  console.log("Url :" + url)


 //for pagesource
//   var PageSource = await driver.getPageSource() ;
// console.log("PageSource :" +PageSource)


// var p = await driver.findElement()
// console.log(p) 

// var e = await driver.findElements()
// console.log(e) 

var g =await driver.getSession()
console.log("Session :" +g)

// var h =await driver.getCapabilities()
// console.log(h)


// console.log(i)

  //It is always a safe practice to quit the browser after execution
  await driver.quit();
}

example();
