import React, { useState } from 'react'
import Productitem from './Productitem';

export default function Productsthumb() {
 const articles= [
    {
        "source": {
            "id": null,
            "name": "Barron's"
        },
        
        "title": "Register",
        "description": "Product 1 description",
        "url": "https://www.barrons.com/articles/apple-stock-tesla-intel-nvidia-175edfb9",
        "urlToImage": "https://static4.arrow.com/-/media/arrow/images/miscellaneous/0/0916-resistor-color-code-main.jpg?mw=734&hash=C01919193FEF22D4CD7A974A4141C1D4",
        "publishedAt": "2023-04-30T12:08:22Z",
        "content": "Swedens national pension cut back on U.S.-traded tech stocks that outperformed in the first quarter.Forsta AP-fonden, which manages part of the pension, cut investments in \r\n Apple\r\n (ticker: AAPL), … [+3378 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        
        "title": "Transistors",
        "description": "Product 2 description",
        "url": "https://biztoc.com/x/72d7930702ee8a67",
        "urlToImage": "https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2019/10/electronicdesign_29132_transistor_646291934.png?auto=format,compress&fit=crop&h=556&w=1000&q=45",
        "publishedAt": "2023-04-30T12:08:05Z",
        "content": "Swedens national pension cut investments in Apple, Tesla, Intel, and Nvidia. The tech stocks outperformed in the first quarter. \r\n#sweden#apple#tesla#intel#nvidia\r\n This story appeared on barrons.com… [+12 chars]"
    },

    {
      "source": {
          "id": null,
          "name": "Biztoc.com"
      },
      
      "title": "No.1",
      "description": "Product 3 description",
      "url": "https://biztoc.com/x/72d7930702ee8a67",
      "urlToImage": "",
      "publishedAt": "2023-04-30T12:08:05Z",
      "content": "Swedens national pension cut investments in Apple, Tesla, Intel, and Nvidia. The tech stocks outperformed in the first quarter. \r\n#sweden#apple#tesla#intel#nvidia\r\n This story appeared on barrons.com… [+12 chars]"
  },
  {
    "source": {
        "id": null,
        "name": "Biztoc.com"
    },
    
    "title": "Black Backardi",
    "description": "Product 4 description",
    "url": "https://biztoc.com/x/72d7930702ee8a67",
    "urlToImage": "https://c.biztoc.com/p/72d7930702ee8a67/og.webp",
    "publishedAt": "2023-04-30T12:08:05Z",
    "content": "Swedens national pension cut investments in Apple, Tesla, Intel, and Nvidia. The tech stocks outperformed in the first quarter. \r\n#sweden#apple#tesla#intel#nvidia\r\n This story appeared on barrons.com… [+12 chars]"
},
{
  "source": {
      "id": null,
      "name": "Biztoc.com"
  },
  
  "title": "Karina ka tarrah",
  "description": "Product 5 description",
  "url": "https://biztoc.com/x/72d7930702ee8a67",
  "urlToImage": "https://c.biztoc.com/p/72d7930702ee8a67/og.webp",
  "publishedAt": "2023-04-30T12:08:05Z",
  "content": "Swedens national pension cut investments in Apple, Tesla, Intel, and Nvidia. The tech stocks outperformed in the first quarter. \r\n#sweden#apple#tesla#intel#nvidia\r\n This story appeared on barrons.com… [+12 chars]"
}
   
    
]
const[toDisplay,settoDisplay]=useState(articles);

  return (
    <div className='container my-3'>
        <div className='row'>
          {
            toDisplay.map((i)=> {
              return  <div className='col-sm'>
                <Productitem  title={i.title} description={i.description} imageUrl={i.urlToImage} url={i.url} />
                </div>
            })
          }
              </div>
        </div>
  )
}
