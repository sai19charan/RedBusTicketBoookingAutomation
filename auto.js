const puppeteer = require("puppeteer");
let cpage;

let obj={
    // from :"Hyderabad",
    from :"Hyderabad",
    to :"Vijayawada",
    date:"21 Jul 2024",
    board:"Kondapur",
    drop:"Benz Circle",
    name:"Harsha",
    gender:"Male",
    age:"21",
    state:"Telangana",
    email:"sudi.saicharan90@gmail.com",
    phone:"7997699755",
}
const calling=async function(){
    try{
        const browser=await puppeteer.launch({ headless: false,defaultViewport:null,args:["--start-maximized"]})
        const page=await browser.newPage()
        await page.goto("https://www.google.com")
        await waitandclick("#APjFqb",page)
        await page.type("#APjFqb","redbus")
        await page.keyboard.press("Enter")
        await waitandclick(".lv7K9c>.sjVJQd",page)
        await waitandclick(".LC20lb.MBeuO.DKV0Md",page)
        await waitandclick("#src",page)
        await page.type("#src",obj.from)
        await page.type("#dest",obj.to)
        await page.waitForFunction(()=>{
            const dest=document.getElementById('dest').value
            return dest!==0
        })
        await page.click("#onwardCal")
        console.log("go")
        await page.waitForSelector('.DayNavigator__IconBlock-qj8jdz-2.iZpveD')
        let element = await page.$$('.DayNavigator__IconBlock-qj8jdz-2.iZpveD')
        let value = await page.evaluate(el => el.textContent, element[1])
        const date=obj.date.split(" ")
        let day=date[0],rem=date[1]+" "+date[2]
        let c=3
        while(value.substring(0,8)!=rem){
            await element[2].click()
            value = await page.evaluate(el => el.textContent, element[1])
        }
        let days=await page.$$(".DayTiles__CalendarDaysSpan-sc-1xum02u-1.dkWAbH")
        for(let i=0;i<days.length;i++){
            let dayvalue = await page.evaluate(el => el.textContent, days[i])
            if(dayvalue==day) await days[i].click()
        }
        let days2=await page.$$(".DayTiles__CalendarDaysSpan-sc-1xum02u-1.bwoYtA")
        for(let i=0;i<days2.length;i++){
            let dayvalue = await page.evaluate(el => el.textContent, days2[i])
            if(dayvalue==day) await days2[i].click()
        }
        // await page.click(".sc-ifAKCX.gLwVlD")
        // await page.click(".sc-ifAKCX.gLwVlD")
        await page.click("#search_button")
        await delay(2000);
        // await page.click(".sc-ifAKCX.gLwVlD")
        await page.click("#search_button")
        await waitandclick("#search_button",page)
        await delay(2000);
        await page.mouse.wheel({
            deltaY: 1000,
          });
        await waitandclick(".button.view-seats.fr",page)
        await waitandclick("canvas[data-type='lower']",page)
        console.log("go")
        page.evaluate(() => {
            document.onmousemove = function(e){
                    mouseX = e.offsetX;
                    mouseY = e.offsetY;
                    console.log(mouseX, mouseY);
            }
         })
         let frame = await page.waitForSelector("canvas[data-type='lower']");
         let producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
         let rect = await page.evaluate(el => {
           const {x, y} = el.getBoundingClientRect();
           return {x, y};
         }, frame);
       
        for(let i=54;i<=426;i+=10){
            if(producttype!==" ") break
            let offset ={x:i,y:26}
            // console.log(i)
            await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
            await delay(5);
            producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
        }
        for(let i=54;i<=426;i+=10){
            if(producttype!==" ") break
            let offset ={x:i,y:136}
            // console.log("2"+i)
            await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
            await delay(5);
            producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
        }
        for(let i=54;i<=426;i+=10){
            if(producttype!==" ") break
            for(let j=27;j<=136;j+=5){
                if(producttype!==" ") break
                let offset = {x: i, y: j};
                await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
                await delay(5);
                producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
            }
        }
        frame = await page.waitForSelector("canvas[data-type='lower']");
      
        rect = await page.evaluate(el => {
            const {x, y} = el.getBoundingClientRect();
            return {x, y};
          }, frame);
          for(let i=54;i<=426;i+=10){
            if(producttype!==" ") break
            let offset ={x:i,y:26}
            // console.log(i)
            await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
            await delay(5);
            producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
        }
        for(let i=54;i<=426;i+=10){
            if(producttype!==" ") break
            let offset ={x:i,y:136}
            await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
            await delay(5);
            producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
        }
        for(let i=54;i<=426;i+=10){
            if(producttype!==" ") break
            for(let j=27;j<=136;j+=5){
                if(producttype!==" ") break
                let offset = {x: i, y: j};
                await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
                await delay(5);
                producttype = (await page.$('.search-seatlayout.show_top.animated.seatBpDp')) || " ";
            }
        }
        let op2=await page.$$(".db.oh")
        let boardb=1,dropb=1;
        for(let i=0;i<op2.length;i++){
            value = await page.evaluate(el => el.textContent, op2[i])
            if(value.includes(obj.board)&&boardb) {console.log(value);await op2[i].click(".radio-css");boardb=0;}
            if(value.includes(obj.drop)&&dropb) {console.log(value);await op2[i].click(".radio-css");dropb=0;}
            
        }
        await page.click(".button.continue.inactive")
        await page.waitForSelector("input[placeholder='Name']")
        await page.type("input[placeholder='Name']",obj.name)
        if(obj.gender=='Male') await page.click("input[value='Male']")
        else await page.click("input[value='Female']")
        await page.type("input[placeholder='Age']",obj.age)
        await page.click("input[id='201']")
        await page.waitForSelector("ul[id='201']")
        await page.click(`li[value='${obj.state}']`)
        await page.type("input[placeholder='Email ID']",obj.email)
        await page.type("input[placeholder='Phone']",obj.phone)
        await page.click(".ins-container .checkmark-radio")
        await page.click("input[value='Proceed to pay']")
    }catch(err){
        console.log(err);
    }
}

calling()
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
async function waitandclick(selector,page){
    await page.waitForSelector(selector,{visible:true})
    let selectorclicked=page.click(selector)
    return selectorclicked
}

