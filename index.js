const {Builder, By, Key, until} = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
(async function(){
    let driver = await new Builder().forBrowser("chrome").build();
    let urlArr = [
        "http://thesparksfoundation.sg", 
        "http://thesparksfoundationsingapore.org/about/vision-mission-and-values/",
        "http://www.thesparksfoundationsingapore.org/contact-us/",
        "http://www.thesparksfoundationsingapore.org/programs/student-scholarship-program/",
        "http://www.thesparksfoundationsingapore.org/about/executive-team/"
    ]

    try{
        await driver.manage().window().maximize()
        
        
        await driver.get(urlArr[0]);

        let logo = await driver.findElement(By.css("h1 a img")).isDisplayed();
        if (logo){
            console.log("Website Logo 👍 exists!")
        }

        let footer = await driver.findElement(By.css(".copyright-wthree")).isDisplayed();
        if (footer){
            console.log("Exists Website Footer   👉  " +footer)
        }

        let pageTitle1 = await driver.getTitle();
        if (pageTitle1 === "The Sparks Foundation | Home"){
            console.log("Page Title is 👍 correct!")
        }

        await driver.get(urlArr[1])
        
        let pageTitle2 = await driver.getTitle();
        if (pageTitle2 === "The Sparks Foundation | Home"){
            console.log("Page Title is👍 correct!" + " 👉 "+pageTitle2)
        }

        let heading1 = await driver.findElement(By.css(".inner-tittle-w3layouts")).getText();
        if (heading1 === "Vision, Mission And Values"){
            console.log("Heading 1 : Heading is 👍 Correct! 👉" +heading1)
        }

        await driver.get(urlArr[2])
        let heading2 = await driver.findElement(By.css(".inner-tittle-w3layouts")).getText();
        if (heading2 === "Contact Us"){
            console.log("Heading 2:  Heading is  👍 Correct!  👉" +heading2)
        }

        let addressDiv = await driver.findElement(By.css(".agile_banner_bottom_grids > div:nth-child(2)")).isDisplayed();
        if (addressDiv){
            console.log(" Displaying properly Address Div")
        }

        await driver.get(urlArr[3])
        let heading3 = await driver.findElement(By.css(".inner-tittle-w3layouts")).getText();
        if (heading3 === "Student Scholarship Program"){
            console.log(" Heading 3: Heading is 👍  Correct!  👉 " +heading3)
        }

        let supportDiv = await (await driver.findElement(By.css(".tittle-agileits-w3layouts ~ div:nth-child(4) .media-body")).findElements(By.css("p"))).length;
        if (supportDiv === 3){
            console.log("Existing of Support div 👍 ")
        }

        await driver.get(urlArr[4])
        let heading4 = await driver.findElement(By.css(".inner-tittle-w3layouts")).getText();
        if (heading4 === "Executive Team"){
            console.log("Heading 4: Heading is 👍 Correct!  👉 " +heading4)
        }

        let founderImg = await driver.findElement(By.css(".profile-img")).isDisplayed();

        if (founderImg){
            console.log("Visible ,Founder Image  👍");
        }

    }catch(e){

        console.log(e.message);

    }finally{

        driver.quit();

    }
})()