// alert('h')
let count = 0;
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')

let divv=document.querySelector('.d')
let bt1=document.querySelector('.oneb')
let bt2=document.querySelector('.twob')
let bt3=document.querySelector('.threeb')
let bt4=document.querySelector('.fourb')

bt1.addEventListener('click',async ()=>{
    alert(`you have pressed  Sheikh Mahmoud Abdel Qader Hamz And Group Of Scholars`)
        const div=document.createElement('p')
       try{  
        let response =await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/aar-sheikhmahmoudab.json')
        // console.log(response);
        let result =await response.json();
        // console.log(result)
        result.quran.forEach(verse =>{
            div.innerHTML = `Chapter ${verse.chapter}, Verse ${verse.verse}: ${verse.text}`

            divv.appendChild(div)
        })
    }
    catch(err)
    {
        console.log(err);
    }
})

bt2.addEventListener('click',async ()=>{
    alert(`you have pressed Tgk. H. Mahjiddin Jusuf`)
        const div=document.createElement('p')
       try{  
        let response =await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ace-tgkhmahjiddinju.json')
        // console.log(response);
        let result =await response.json();
        // console.log(result)
        result.quran.forEach(verse =>{
            div.innerHTML = `Chapter ${verse.chapter}, Verse ${verse.verse}: ${verse.text}`

            divv.appendChild(div)
        })
    }
    catch(err)
    {
        console.log(err);
    }
})


bt3.addEventListener('click',async ()=>{
    alert(`you have pressed Imam M. A. Baker`)
        const div=document.createElement('p')
       try{  
        let response =await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/afr-imammabaker.json')
        // console.log(response);
        let result =await response.json();
        // console.log(result)
        result.quran.forEach(verse =>{
            div.innerHTML = `Chapter ${verse.chapter}, Verse ${verse.verse}: ${verse.text}`

            divv.appendChild(div)
        })
    }
    catch(err)
    {
        console.log(err);
    }
})


bt4.addEventListener('click',async ()=>{
    alert(`you have pressed Muhammed Sadiq And Muhammed Sani Habib`)
        const div=document.createElement('p')
       try{  
        let response =await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/amh-muhammedsadiqan-la.json')
        // console.log(response);
        let result =await response.json();
        // console.log(result)
        result.quran.forEach(verse =>{
            div.innerHTML = `Chapter ${verse.chapter}, Verse ${verse.verse}: ${verse.text}`

            divv.appendChild(div)
        })
    }
    catch(err)
    {
        console.log(err);
    }
})




async function fe() {
    try {
        let response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json')
        let result = await response.json();
        // console.log(result);
        Object.keys(result).forEach(key => {
            if (count <= 3) {
                
                const li = document.createElement('li')
                li.innerHTML = result[key].author
                switch (count) {
                    case 0:
                        one.innerHTML=""
                        one.appendChild(li);
                        break
                    case 1:
                        two.innerHTML=""
                        two.appendChild(li);
                        break
                    case 2:
                        three.innerHTML=""
                        three.appendChild(li);
                        break
                    case 3:
                        four.innerHTML=""
                        four.appendChild(li);
                        break

                        default:
                        break;
                }
                count++;

            }
        });
    }
    catch (err) {
        console.log(err);
    }
}
fe()