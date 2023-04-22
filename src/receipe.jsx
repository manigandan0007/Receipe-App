import React, { useState } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([
    
    {
      id: 1,
      name: 'Idli with Sambar',
      image: 'https://swadishtrecipes.in/wp-content/uploads/2023/01/Idli-Sambar-Recipe.png',
      description: 'Steamed rice and lentil cakes served with spicy stew.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegan'],
    },
    {
      id: 2,
      name: 'Dosa',
      image: 'https://images.indianexpress.com/2020/04/dosa_1200.jpg',
      description: 'Thin, crispy crepe made with rice and lentil batter.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Low-fat'],
    },
    {
      id: 3,
      name: 'Puri',
      image: 'https://www.shutterstock.com/shutterstock/photos/477880174/display_1500/stock-photo-puri-bhaji-is-indian-breakfast-dish-it-is-made-of-flat-round-flour-deep-fried-and-served-with-477880174.jpg',
      description: 'Small, round, fried Indian bread, airy texture.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 4,
      name: 'Ven Pongal',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal.jpg',
      description: 'Creamy, savory rice and lentil porridge, South Indian.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 5,
      name: 'Ragi Mudde',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/ragi-mudde-recipe.jpg',
      description: 'Wholesome, filling, gluten-free, finger millet balls.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Gluten-Free'],
    },    
    {
      id: 6,
      name: 'Rava Upma',
      image: 'https://c.ndtvimg.com/2021-03/jkd9mq2o_upma_625x300_10_March_21.jpg',
      description: 'Savory semolina porridge, South Indian breakfast',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegan'],
    },
    {
      id: 7,
      name: 'South Indian Thali',
      image: 'https://media.istockphoto.com/id/481149282/photo/south-indian-food.jpg?s=612x612&w=0&k=20&c=w43naq0743XDvzCi5FW_ROvzw4_KaCkuam16sfy3hTc=',
      description: 'A wholesome meal of rice, sambar, rasam, and vegetables.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Gluten-free'],
    },
    {
      id: 8,
      name: 'Gujarati Thali',
      image: 'https://www.nehascookbook.com/wp-content/uploads/2022/10/Shrad-thali-WS.jpg',
      description: 'Platter with sweet, sour, spicy, and savory dishes.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 9,
      name: 'Maharashtrian Thali',
      image: 'https://img-global.cpcdn.com/recipes/529df0972022269f/400x400cq70/photo.jpg',
      description: 'Spicy, savory platter with various regional specialties.',
      mealType: 'Lunch',
      dietaryRestrictions: ['low-carbohydrate'],
    },
    {
      id: 10,
      name: 'Chicken Briyani',
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80',
      description: 'Fragrant rice, spiced chicken, aromatic Indian dish.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Non-Vegetarian'],
    },    
    {
      id: 11,
      name: 'Mutton Briyani',
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
      description: 'Fragrant rice dish with spiced tender mutton meat.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Gluten-free'],
    },
    {
      id: 12,
      name: 'Fish Briyani',
      image: 'https://www.bigbasket.com/media/uploads/recipe/w-l/1025_1.jpg',
      description: 'Aromatic rice dish with spiced fish pieces.',
      mealType: 'Lunch',
      dietaryRestrictions: ['High-cholesterol'],
    },    
    {
      id: 13,
      name: 'Parotta',
      image: 'https://images.news18.com/ibnlive/uploads/2022/06/malabar-paratha.jpg',
      description: 'Layered, flaky flatbread, South Indian origin.',
      mealType: 'Dinner',
      dietaryRestrictions: ['High-calorie'],
    },
    {
      id: 14,
      name: 'Kothu Parotta',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/06/KUTTU-PORATTA-750x750.jpg',
      description: 'Shredded parotta, spicy masala, South Indian street food.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Non-Vegetarian'],
    },
    {
      id: 15,
      name: 'Chilli Parotta',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUVExcVExUXGBcZGhkZGhkXGhkZGhwcHRkZGBwaGRgcHysjHB8oIBkaJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHRERHTEoIyk2MzExMTE5MTEuMTU5MzExNjMyMTMxMTExMzExMTExMTExMzExMTExMTExMTExMTExMf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABAEAACAQIEAwUGBQIFAwQDAAABAhEAAwQSITEFQVEGImFxgRMykaGx0SNCUsHwB+EUM3KC8UNikmOiwtIVU4P/xAAaAQABBQEAAAAAAAAAAAAAAAAEAAECAwUG/8QALxEAAgIBBAECBAYCAwEAAAAAAQIAAxEEEiExQRNRBSJhcTIzgZGhsSPhQsHwJP/aAAwDAQACEQMRAD8ANCSJqhxLFLatl2Et+kyjqeRU8xRGzb3HdIH5WlS3ip8KS+1HETduZFZiiHQNEzsdeY5ViUJ6a7z2ep2Namxto68wa9wuxZySTrJ5miGCtVVsWcxHSittaU2FGBL3AcH7W8ici2vkNTXXLVsKABsBFIHYrD5WFw8yAK6C7gUZobFYsB4nJfG7i9wUdD+4G7SWrhQm0xBHIaT60H4B2mKN7O8TExLe8vn1HjTBxDitm2DncDw3PwFIXaLH4a60oWV+TZCJ+VWag4O5GAI8HozKrYEbWHE6jbuBgCpBB2IrW8kgiuTcE7VPZMZjE85KHxjcU8cI7W2roOfuxuwMr8eXrSp1qNw3B/iQesr1zFrH8NuWOIW7iqTbJ1jl40fxmJuXnKWt+Z6UbvNbur3HUzzBBqHh3CRbJYEy28VcyfKdh7laEBsmDMJwY+6dXBnMNgfPrR3DYBF1Peb9TamrFu2FEAQK8uNAJqqjSLX8x5MssuZ+JJNexSP2g7VOs27EZ9ix/L/el7h/F8Sl0O+IuHUEqSCCOYiNPSrH1CqcQcvg4j72l4Ct9Tp3q5xjeyt63cm2jhp0KT+1dgw1zMit1ANSRStpWzk9xMuYH7Om7bwy/wCKcZgNWOhjx8aucO4lavhjadXCmDBB1pD/AKv465mt2VJCEFmA59AfCl/sJjLlvFWvZzDkIy9QftvVbagIwTH0jF8HEeu2vCRcUsBBggxXO7mKawypeByk5VufQN967HxdJRvKkLtBw5HsMCJllolveWLJeyvDxiLmVjChSdPgKyj/AGAsKLbEDUQJ8P4KykOo8W+N3g6MinlM7lZMAL4mkfiHDHttlidpI67xHWmi2SzFjqWPzoklkBR1gxPItu3iaxvXWxvm4naVsaBgRNwwA0HSr+EtlmAFXsZwsMwNvSTlGm4X3mYbjzoh2dwGUMz76gfcVXe3ppuMMs1aCvcO/aGeFqFC+EUfx1q46jKeVAMEeQ2puwbTbU+FQ+EPmxlPkTk/iHYMUj2fvAllYGZkNrQDinZvFCSLaH/QSPlXUKwitptJUfEzAxHU4jisFdtN+LbZVOnuyBPPSpvZlJ9kMpjXLqG8wa7HdsK2jAHzoFxXslh7veylG/UhKn5b0PZoAfwn95I2Z/EJzS69xAGghuttip/tRPC3+IZQbZvxEglg0/GaL43sxftSUi8nQ6P8djVnsdibiXRaCvk/MlwHueKt08Krr07I2GyB9JU6A8qZt2W4vxHMEv2s682MKw9RofhTyNa0EVsGrSRNoxkn7yIGIr9oOx6XC1yy2RzqR+Un9qW+F9h8S7/jEIk6wZJHhXSrl9V95gKqXOL2xp3j5D71U9CMcmOUBl3C2QiKi7KAB6VLQxeM2+YYek/QmreHxlt/dcE9Nj8DrVwxJYif/U/hRdFvKJy6Hypf/phgs+LzxpbUn1Og/eupYuwHRkYSCIoB2I4OcMLwYRNw5T1UARQ1lObQ37ytk+YGHccvdPlSNxU9yP8Au+gp7xvuHypB4lrA/wBX0q9+pavcNf08buOPGsqv/TttXHgfrWUh1FAGEsZYPwFWi1aRW2+lc3OwY5OTNMHaOeRzEHy5ijFwQOla4HDBd9zVi7ZzaCgb7t52g8CB22hmlOwdaauEt+GPCaXbaAERR/Af5TQetGfCm/8Ao/QwDXEFJBf4/YRyjPBHhp8aJWrysJVgeehrl3Fkb2rSZkmiPZD2lrFIAC6OmpB90Cfe8q201TF9pHnExt5DYM6FXjNQnCdobFxmVWgq2QzoCZiAedWr92jlYNyDHzJnuVH7QCqF7E1VfF0iY+IaF6aHWOI+2utbtE5U95xzPRT+9AeK8Sdrq4e2YnvXW8N8g/fzpn4e6KihABprTBuZMLIsQiqci2w5O/Mj1q1b4VaEZranz1qxg7QUseZqW/dgHQmOlSJjn2lO5waw3/TUeWn0oZj+B5f8q4QeSv3h9xRBbjGWJgcgNzVHF4hWCx707E6im8ZMQQwdY47dw7Zb6l05kalfI/f402YLFJcQPbYMp5/sehoNisCFIZhKsII8ftVPEOMHdV1P4TxnTp0YCnwMcRERl4h/lt5Uh3BNwD+amnfG3A1kspkFZB8DSXhdb8eK/WqnjL3LXYl8t0r4uP3rK14Z+Hi7q9Hb5ia8qO7EeDg1ZabKQY5NvyI2+NRYdpary1zDWgHGMzrX44nv+MOpgbIfiYPwqzaxkHl7xXfllkGq9sb9a8uiqw6eVEGKKeMTT/8AJd7Rfyhhz1mCKb+COHRiNp/YUmWLetN/Zr/LP+qtH4a6m7AUDj9YJ8RRRXxKXaLhqBDcCyRrSnwnjLWmuEWwVYQV2JHnyrpV1Awg6ihWN4XbykJbUE84rXuoLEMhwRMBgT1EfsJYS7eNxljViEJkA8j505Yu/Q6x2fW0GdXYXORGw8I5iqYxxJKXNHHwbxH2pVA1rgjmOiybF4sLqSAPGhvCuL2714ohJynX0BP7UC7b4oQLbSoPeDDaRsCKG/0zBOJLGT3GnoSSu3pNR9Ql8S3qdOs8ICobv5juamwTtbSYzL05+lXeMXLi2k9mAR+YRyihuExTTGU68qKxJopKy/gOKW7khSZHIjUelWGxi5SGcA9D73lHOqL4C3bue11DtoADp8KvWSHXMy6g8xJEVLPvJnb7SHGEyoGuo9KBucuJAO0D70zsijKV91v5NDeOYH8Nrg1dDM9V/t+1MDHrYDg+YavIGTK2oI/alzjXBM9poae6QPrRXs/xFbtsa6roR9DV3EKYPj4UuuJSwZSRFns1js2Fe2SS1rumd/H5/WhvDv8AP/3L9a8wThMXiLaggMgY+cxXvCRN7zcVU0iJPi+5j73iVb4oKyve0ixj2P6raH4Zh+1ZTEcxQbhbcCa99pFWFXSKo45I1FcfmdcpDtzCCPtXrLPOoMLpuJOmhPXUc999Kv2lJ3UfSp+mYO5CmQWl386aOAJFoeJJpfFuFBA+/rTRw9MtpR4VpfCqz6xJ8CZ2vsymPrJyaic1uTUTmujmRKePPdpX4vYDDow1U9DTHxW5lRmPIE1yzH8duzOYwZ0AG3hQuosVMA+Y6mWONutxArqPadCdo0melDuzjtZxFqW7slTGg7wj6xVNcK7RMtO+UyfWi9zh4CgDkPWha2LNmWA7p1y5dBsK08hQjhDq9wuCDl00MwTVTstiVxWGaxcPfAII6jrS9g+CXcHdIBgE6MswR4itEYODJ0KGyCcGOuMQ3bq6wOo5VdxmJFu2xbQxuBUXBr6lJaM+Ukxz8vtUuOti6bYGqNJkfGDS6EZuDgyLgjl7aydBMeXjRJ1BkzuII61BhMNAgaRW2Jt5U5eO/wC1ISJIJi+eCtbvC5ZuhVLElMs77rM7fSjnEsXkt+MVXTFZY7hM7Tv8elRdpr627RdoDR+3KnJETsWxmK3D3D4i+4GqooZuUsZCj0BNXez6TdXzJNb4HhjWMHmcRdusbj9RI7q+g+ZNZ2VSb76yAq/PeqyMyBaS9uAFxFpjztsPg0//ACrK1/qXvh//AOn0SspERsyvEmq+LT4VbOU15ct6b1xk6dWwYC/xBDkliJbWNNJo1g7wKkhid/lQbirAOpOjDnyaIieh8fCrWCxawfcH+llY+MaeutFKuRnMttGVHEN4dZIE7kfGinFOO2LGly4JA91e83wG3rXPsfx+47i1hpEbvzJ5kdPOr/DuDD3rksx1M66+PWtjQVtUpJ7MwdWyu2AeoXu9swf8u0xHVjHyANQv2su//qWP91b5LdsScq1VvcVtzAE0fvb3gmB7SfE8SuX1KZVWQdQT9KXbvZi5mlirKSoOXQ5evnTFw65nbMqwusyPhFEKqdA5y0baIBw/DLdsQqx16+tQ4rC0wugO9VruF9frUwFHAiHEXMOz2rguWzDD5+B8KeuF463i0ytC3ANV5+Y6ily9hKht4VlIKyCNiNCPWpgYiJ8xjfDujEBW0OhAPyqHD8QuWmysCATI0MjqI6VmA49dTS4ntB1GjfY/KrOI4nZuFbhDoVInOpA+O3zqUl6ueGEvWeLcjHnINWGxWb3Yah2JxOHuAFIdv+0En5CswmGZtrZA6sCI9OdTGI25YRfELbQs8CPEULwuCbE3FvXgRbQ5raH85GzsP0jkOe+25ZOHLIa4c5GwIAUeSj95q9THmQg/j1kvZcASQJFK3YQEPcLaMWG+hinmojZUmSqz1gUo0SP6qXIfD9B7SfULH0rKc8XgrdwAXEVgNswmKylFER7kV4zsdFBrXhdklszdJ16Dc1JxbFrbBYtAri9p9p1ZIDbRzBfFLcaufSg6vmUkaLy8eVUOI8Qa/dCgmCY9OtFLqAW4XYDT0rW0Wl53PBNdqSqbAe4S7L4JQS532mjuKuMBK6Dqf2FK/AL9zQKpYTr0+NH+0fFVwdvOyrcxBgJbYxbt5tmfmTGuUanTbetUnHcxApY4ErXsCxh7pyqTCljE+AG59Aar4pRbjJ7PUgSQGPWYnYeQ3oBxC5i7gJYtca4Ia4x7wH6UTa0vgBy1NCjihhmCE8tTqTM6TFA2ahm4rM1KNAuc2Rrt8WuiQzMuWJYWlKagEbakCdSB1q/hMdizqEtXF/Urf/WfpSvaxyXEzAMZHkD4+FVsPxJbcldzuQInx8qHF9/PvCW+H1x5PaO0ji3e7jHYzmU6xuPLmKLWLiOMyMGB5gyK5bdwyOfb32IB0C5iBpr6DcwPGiWB4pYtH8O5lI00eBvzB96iV1WAAQT74gz/AA0n8LAfQzoTJUq20ImQI3n70E4fx62wXOw72zbDlv8AHei11FdSCAVI9CKNqtDLuWZt1LVsVbuCO0nGVwyJcVPahmy907aTvQ/H8RbFYdbltSqZmDAneNBIFMHAOz2HW4dXBOy5oQ+g5+dMVjgllAQttRJk6TJ6makVZwc8ZgpB8xH7F+1t3AtrQsVBB93LMsSOsTBpl7Rcbe3mVBB2zRt40X/wNtfyL5gQfQjWhmPt2GLKbiZo1S4wOnnMj50wratMbowGBib8D4+HyW75C3X1UAHvL+ViYgEwdKP0i4YpbbOlps4BW2zkMsf+n84NMfCL2JdgbioLeU6j3ieXPSnRz+E8ySsejDFZWUH43xpbBAyliSJA0gHn41Y7qgyx4kicQxWUk4zjt4yVaATosCRXlCHXoDjBkfUEBX8SyWLmgIUtoPeKuQInTXY+lKGLtXbhklo5BiTFOVxR7LzI+9CcQtB0oHXc3c6TU2lH2rA+AwmQk7tsPWjeAwjP72gqXs/bBdpGw/ej62xR9Ywsx7mLPzBuP4t/g8vsrS3GykgZvd5BikaiT11pf/w0sDcdnuXGzEsZMky5nxHTTlUGN4qjYm9czggHIB0CGB47ifWqFnGZ8Qr5iVgkfAjyA1oG8u5IzwJr6ShEUHHJj3hLIKHT/jrXO+M3LZxDqstJMwIMxsDTseMWrdps9xQ5ByjnMbg8unxrldm87XMymWzaDqTPyqyqtSuR7Sqy1ls2/WEb1/2TZVzqw1gENBPLTzojgMTfuMo9khYic5Gu2/KoRbupqfZszROUaiORMbCmnsuwNlgRDExJPQAwDA0I1+NU3OoXOAfrD6wx7J+0Xks3XvxfiEjKgEKGjeOcePWmLEcGU2s2QMdIGUGB+omqmLS6l0XLjZ1khMoHdAggEdCSdddt6ucR4tcJRR3rjnSBoumvdWNPDpQ7szkbT+3UGWphaXbgD3g3ivBHuPba1cCjKFKEEgayxj+bCivDOJXsGQl78S0Yhhy8p28qlwF0zlbVjudNhG1adq8VlsFEy5m0DPuBzIHNunKiaLiuFY8yGoqrsU2LyO8xvw2JW4odGkHYj+b0e4TxHN3HPe5H9X96432ax9+wR/1EOjBfrl+1P2FxS3EFy2dDqCNwf2NaFdqt0ZisscHzQY3gx58qSrPZK863Wui37Rl/DiAAxMsTlG8QJ8TTdwXHi4sN767+I/UKJRVr1rZjMoZM9wVw7A5LKW7vfhQCTr8DHLrUtphZAUn8PZW/T/2t+x9KIEUH7Q4djabKdDuKngAceIsYlhOMWSYFxZ6bfCd6XOL4NrjOxeYOnXrFKXFXYEMmrIdPEjbSnbsXh7r2s1+JnlzPP4VmNY1/+MjnMiTu4gLFXbZ7qq/dgAkwY8QBqTXtP9rCIuyr8BWVYdCxOcj9othnNLr/AIQjbT96F4g0Quj8Mef7UNxNU6b8E6HWfmy/2Y1d/wDSPqaY8LazOq9SB8TFLPZR/wAVx1T6Efem3hf+anmKOr5AmVbw5nDHRWxWJyDT2zquuy52C/LnV+5Y9mwIIIkZgROk6wRz3oTway1xnOhgk6n3pJPLeI+dMljCZD7MiDEjcgzrt8aE1LYfv9Jr6VSaRKWKuo1y2oOdTGjEyAeXWjIa2IAVRAjYT6Ur4qyEvAiABrpVluKQYXvTIMbiNd9Z2nblVdlRfG2LTqlCtuPJPZ7l++1xicqmB4QPjzox2Zv+zsuLsjvFgIM+6AI9RSvh+KOg/DDEbgs2b056eVG+FcRe5qytp+kCqba2C4wMQ2qxW8w7wy+O8bgEECBudydeXQ15i8MrOtwQCDKgaTygknbcetViXAQyEEmRAJiNwdgZj4+Fb8MQC4SAzHmzHNPPRjvQYG07sy90D5Blj/A3CzMO6Yyqd4Ez1g8qAcUwbret+0uBw0DNlyx4ASdZpyL6CeW/286X+IWvbHK5gLuw0j/irlZgcnqCV6VAvp447xmFuAcMt5gWeFGuxkxGgI51QXiqYfFvbU/hGMy9D+oVLwriBgK8yO7njutqACOk+NWcZg7dxs1y2raDvDf47ilVcaWyRB7fhyk5Tge0P2MSUK3LZ8QeRH2NOPD8UtxAy89x0PMGuecPC21yAnLPdzGYnlPT70Z4Dj/ZXYPuPofA8mrbptWxdy9TGuqattrdxzrR0BEHatpqN7qjcgc96IJxKDFHi+DFu8yIgPtgCNNip1+tZe48UC28PlGWFiJ56+v3qfj+Yr7eSMtxAPInKfqPWaR8Nba37VroOY3IEz3oMnbkSR8KAvYrnb+8gxx1Ondm+IG9bJeMymDHy05V5UnZ4N7FS1tbbHUqBHxHWsoyrO0ZMmOpzu97i+P7Ch2KFS426UW3J/6gX0IYVmKWsvTH/HOg1i4umvZ14xC+IYfKf2puW4UIcCSusdY1ikbDXMl1G6MJ8pg/KaegKLr5WZmoXDgzivZwrownQmQN5jWnrGW1uWluqwDIug/UsQfUb+hFJGPT2N10SJ9tdDDYgZgUn0o/2UxAzezY6PEE9dvnQWrQ53ibOmIaoA8ERc44/wCKFJGYkDu/LaqS22DFcs+A1+lWuPYP2V+4ANmkNuNdeW2sinLA27PsUdFADKGPWSNifD9que0VVqQM5gpp9ZiScfaJdjhF5z3FI8T3df5FG+H4S5bgO5MCSIEDrrvRXBXS7lVjr08J8aE4jjTe1ZAqrlJXMZYyDoRsB86oNttuVwMQirTpSQxJh0IcgZjpyU+nL+b1tbxIWQGJbSZ/LOwnrv8ACgFjiefNmLMQGk7QAsyMugg1f7NYlLiZQWBdmLMBqYiAB0gmqG05VST1LxrKzZszzGG+7C2xBULAOu+2nl/elTDY03L5RT3VBzGfeP2iaNcVdAi2LjibgyqTvMiCYjnFLvZnCAMzqy6sVgaRBMfGnqUCpmP6STW4tCj9Y2YfMASmoIEq2ogTPKfSq1/iHsCpczbeIbYKTOh+Ez5VewDjMABBgg/zrVftj2ZxNxQEyuo1IDqG56w33qqlfUbBHHvLLbVTvv8AuE7BV7bQTBXTzEMPWQDUvDsR7RdYzrGaPkR5/ehtvCnD3xl7qXLatkHuqwUZlA20In/dQ7B8RyYm5IKRcjKf0tqGEaEZpjzHlRmjbY5XPEy/iFYdBYO51LA4xmshRqy6enKhvE7lzMpbQgGs4PiMjK42O/kd6M4u0r3lG4gfD3j9B8aPur9RcZmC4gDivFVdFw6iYAZ2mAIMz8aZOFYEKuZwC7amRtzA+Z+NL2M7PW0xKlCTnIBB5SwJ+SmnOlQjAkv9hGUe8ysr2souSnEe1Fz8JANy8/I/erNp89tWO5Anz51HjbPtLRCxmGq+cbfCo+ENNsjofrrWHpm/4zqddX8ob2MgxAp14Xf9pZtv1AnzGh+YNJuJXWjfZHFd17R5HMPI7/P60ZW3zYmVqkyob2iX/U3Di1jc2y3UDidg4OUx00APrVXA8yNNJHXrTZ/VLhZv4ZHQS9u4APFX7pHxCn0NK2Bv+wUNcRjIiBHd5c6bUAYAHcv+Hudp3dTzi+Dz3LgbmuYQTodCdeY/byrOFcQyWURkLHvFdYEbRPUGZ8xUfFsYy+zukBlcTA/LGvodZnzrXH2Xt4W1dnKbjEWkEEhQxLOT4sco2901EJuQAwepm09pHiT4QvbvI9yQZkRPu7afP4VTsWmLXGZZV2bUEaGCwkcgZMeOlW7mCJRGeSRuTOvU6fzSqzQbVxFmAyHN1if3qKkePsZo3P8ALk+OZTwOIIW4ZMMBbXpBOciN+XzNX+CF0DOgbux7snWZ5eXnQjD2wXCrO/Pn/DNN/DdFCKIAHxOxPrUtS4VcTM0dJtuL9YgHF4x7hu3mVg4ZQpYGAmoAAOxBgz4nrqb4XhVEKpB0DrGmcMV7/qZkUTw2GTVrgGTYyJmSIUdZry1hpuzbQBAuWJgrPMHxjbw+Ax1SsNuMCF6j4c5BYMSZY4DxBA/szqRJznQaNtTXdx4Oszp40p3MLbw2VgpYkguSeRDAZV2039ayzxgq5T3gdqGLHpBwYVTSSoFh5HQ+kn7U37rNaNpZAYyNtI0+tCePYm0AjXCUZBuVnMDpkzDU6idJiJpgw75tSsA9D8j5/tQLtnwtbgV2AEEgEz5xI11j4mnpZd43cfaX2KRWVXn7xm7H472lvLMxsfCnjgoBlydQuX+/wAHpXK+ySi06RIUkW4JmND9hXR8A5UMB+ZT9/wCedbVbBgDOa1FRrcqZd4cPaXmc7Lt5n+w/91GKp8KsZLYnc94+Z5eggelXKvUccweYayvKypxTjPCbsgelWBhwhIA31+f96G9l++EUtlLaLpmJIGwUa8xroNd96YMVgw9sFSysCNyhhgYZSAx+f6hXPrmtt3gTsNXtcbM9wNi0qLhmI9leVuUwfI6fY+lXMQm4O9DryUSLBw6zL2ZUo0csRh0uLlfVZB05EGQRXM+22Pa3fuYe6gBUjKy6BkYSrR5EfzSnrg+MzIATquhpd/q3wv2lm3ikEta/DuRvkJlCf9LEj/eOlGbEchjM5bXryo/aJ+Ds5yM7EjeP2pvIt3lw6wC1oXA2mxLArt/u9CfCk23cA93Xx5f3o5wvGqlqFYamSx0MwNPAD+b0LdvwcfaG6es2WBn6EtcTVwGtjUCFBPl/PhQb2mQZLg7pPvACeR16+fKaJ3seWUDMGmZPjJnTn51XGB/xFvL+ltCNztrVdQI4aF6t0WvJlLG4QKVcMCrCQQZ6aTTVwW2GGh8JpL4pgblhLYJJzlu70g6fL9+lMXZriyC2EPdc6bGN438taWqrZqwVOYtC9e4gDEMf4rNduJ7qWgNCNSx1zfDbyJ51Y4ffJGiwNWkjU6aD4fWq/aHAN7SzctuQLncfId47yZhzG416xVvh+UBh7xjQD3jB6jYb/KgbAoAI8zQVyyn3m9xHdiSogx3W3EAD9uVRtwsaHuiPI/SB9ajwd5bl828wSACsyQeok/zQ0Zv8JuKCxOgEzoNPCKYLaBkDiA26pEfaw5EX8emS4jSMp7vdMZWkeOx29ah4xiWKgMCUnXYxEnUdIEVNx/CWmSWuLPKWAYenKqnZG6zvmuAkKCATzOg577VaoyN7Dr/wxHp1HqAqvHtmV7PEPZ3FRdVaH1B7ve0HnzHgK6zhrncRxzAIrnva7Bj2SPtluqGjo5y/VwfSnfspcNzC2idwMp9NK09IwKcTL+IKwcFjmONt5APUTW9QYI9wDppU9HiZ08rKysp40+eOxt8GUJ0OU6HWVPdPQ7ka9etdLsqGUzqTqTvrtPyrjfAMRlcTzrrXBb2ZB5VzeuDK3fE6txmsMIL4lbIY9QaHXlnUUwcXQZg3JtPUfegd9crHpz+9U6a3b8p6ldibgHEgwt0o08udMFm4rBkuDNbcFXB2KkQaX3SrfD7kjKeX0rZ075+UzK1dXO8frEnj+BGCvPZaSvv23/Vbbb1GoPkauYDhoNhW1OYZo8Dt8qaO1vDBjMLkAm9al7R5kfnt+MjUDqB40kdlsWxhc7ACABmbT+RtT6lCE3KeezCNDbvbY3txI71gjfSDGmlHeFnLZJZtFBOgE77CqvaTurnRWKqQH6iQCr+R1B6EDrXmBxK3US3bINyC3QDSDM1QSzIGxx/Ut1NaW5rJwRAPGcU1xxLEhSckmcoJnSiXCOE3LjAIxYLBnpOuhHnUp7Nm2VbFOtsclHfYxroAdfKmrgN9bRAtjLbZYmAWBI3Ykc/hrtT33hUCp/qLSUYOcdQleT8NhpmCSB4qrGPUgUIxPE7ay2WDoCYmDrI/nSjONQMhcEKy6mdFYAagdDHLnGlBbFu2Q6ZQrXM0sMs6jr1n9qz1AP4poFjjiXFw6XUF8SgynI50EAxpzPShmPxlxlUSGZJQqzncCRBzEFYEgCBWvFOLrbwy4K2p7kd6dxMwTGpkz0odisV7K2g0zE5tfARPzq9K8dc56z7TNbUf5MOozKeMx168xt2p194Iuv8Aujbb+RTngbPs1QAyQAsiD0nQ7UP7KWna01863HkjYEhZCzt/DVLjNu62K/DdkIth3n3RAgabSSCOulSfDt6a4G2Gp8i7jzn+I5Y5FOGum9quVug5SDPUdfCif9OHzWGH6bjfOD+9I6Yy5dwbpOZmQgk91TmzDQ67QZJjSnL+kcnDuT+vrM91dZorSIy9zK+IOp4B6MesGdxVmquG96rNaS9TLmVlZWU8afLDplYjmD9K6N2MxedB5f8ANJPaKxlvt460V7EYzI5Q7HUfT7Vh6pd9W72nZFOCs6Jibea38/vQLEW/yn08f70w4Z8w86G4vDbg1jE4MopbtTF8iDB9K8BIMjl/Iq9irMyIgj5+Iqnl61pae4sPqIPfUAcHowgjgqGUkHfb95pJ7X4Q2rpxNodxzLgfluHc+Abcf7hyFNFm5lPhz+9WLuGVgQyhkcQynYg/TqDygVsK4sXI/UTIw1Fn9GLHBeJF8twDMoYZ0O4B0MdR4HpW3arhRsst7CNFm+FeViQ4JzKD+Uagx4nlQfjPB7uDue0ty1onRoB5zlYbBvryojZ4sj4UC5cg5iyg67mWB/T/AHodq/TO5OQeMQ1rTaM5+Yfz9pQQ5nDNJad2JbajuDcnunQwYM6eUULxYObNEEajcSOutWMPddoIKrHry6Ch7PmAhGlvLddwziuITbt2yxUNcCu4PKNjpsTAqB09netR1E5ddJg+laYW0HXIT8vP71axGFS1BHvaGCAARtKnnBOo0qpXUKUxzJanS2PYr7sYgLiCs+KyGIBG3TfX0qj2uWcQqRoiAep1J+Yq/wBn2NzFsW/UYnpOnnpUXGVBx1ydpI67R/eiUO2zHsIHs32kn3jP2PvD2NsEQNVE76SZHhy9RWdpMGLtxAIUMZcgwzKoMLpyl9/E1Qwtu46B8pQARbAMDLJ1P/dIkjoFq/hMNdzi4bhIK6LGmyjU6aiDy50K2a2LdZmjXelrmtfHnxIHtomGMuo9padtTHddTCjkIzRHQU+f0nw2TAqf1MT8AB+1ci4tdd8WcP7yW3JHQL3WKkbECMvkK7z2ZwhtYa1bOhCAnzPePzNbFWMD7Tn7wQxz7mE7YhhVioLe9T0QIPMrKw1lSinz321swUbzB+tBsDdyOrDkR8OdNnay0GssRy73wNJlqsavmvBnbDvM61wLFB0B8Kt4y3rSl2KxvdynlpTq2q1i3ptJWCWj07MjzBGJtTqNx/CKH4i3OoHpRu9biqeJSDI1nfw5TVdVpRgRJkB1wYHe3W+EvZTDHu8vD+1Xms8qrYjDVvU2ZAdeplWoDlH78GWXEToGVtGUiQR0I6UodpeyXce5hFLKYZrW7oROqfqXXzpmw2II7rbcj08/vVqwxBkGCNoo/IYblmaQ9ZwZzwXFdU1zHIMwBgq0DMDp1n+TVnhpyqR8BTpxLglu+Tct5bV87krNu5/rXkT+oUjcbe7h7otvZa2zEalpRpI1RgNR9KGsqY8AcTQ0dtafMTzDODuwfL+b0fwj22U+0TOCjgaSQSpGk0kXcU+ZUBWW28B8d6aOCXwnukNB7wJkA/yaz3qKkGbDWq9ZWAcNaOGuo573dBb13PlNa8Vtrcxma17zqGA5TBB+QHzpr4heV2ZmALsCGj8x1iB1kn+RSnjMAbN5HTKGZ/cBnWPdJ2111HPrvRFeWJbzjH3meWRXU+/iNHBOGEWgGZiANZMjctp6k1X43i/YW2dSNASPA/8ANX+y/EVe3KZYOhEmRGkERQnF8PbF3dRkso3oxHMDx6c/LWha0ey75/HiEuUpVmUAZ8+8rf0y4Z7S57W7+d5JPMA5j8TA9a7idRpXPMJhktqFAg6Bes8q6Jw62fZrm3jWtyvOZztrbjmSWN/Spq1tpFe0QJTPayvKyninIMdYDoQYggj5RXPCCpIPIx8K6O23oDz6dKR+0FjJebx1rCoPJE7ZeRLPZvEm3dHj/P55V03AXcyjyrkOGeCD0NdI7M4rMg60Nra+d0hqE3Jn2hy6kiqjWxsdjV8VFetyKyDwYEj44grLuOY+nI/zpUxtBhNb3k0Dc138v5rUmFM3IGxHzrR0Go2PtPR/uV6tN67h2IJxOFqtbZrZ2lenMeXXy/4pkxGHoffwtdBsKnImWXDjBmuHcMAVMit8VldMl1FuJ+lhPqDuD4iqZsMhzIYPMH3W8+nmPnUtvFBjlIyuPyn6g8x41ZnMHZCp4i1xPsbZds9i81pv0vJWfBhr8aoYvgnELb51yOP/AEyoDeJnf1NOGJt8xvVB3dfdYiomvd/uTS9lgPC2cZ7VS2Hu6SBlg7iPezRAnevOJcAxt0+6lper3Bm9Tv8A+Pwo9heLuGyOYBOrbn40wYe7b0yQ5/8AI/OoKmzxE9hc5MWeynY8WAS153J3Cdy3trqe8fSKZMWyW01gAaAAfJVq2PaPoqhfE/arOB4IC+dyXbq2w8hsKcKM58mRaxiACeB1KPZfhr3LguXBAGqDoOp8afwIHlUGBwoQeNbTJ8B8z9h9fKiUXAlJMkmsmsrWpxpsKysrKUU5Gzbactf5NLvaqyCFYcjGlMscvt8aG8bsZrbCQdJ8v5+9c6jYIM7dDExDTd2OxkDLP8H8FKJFEeC4jJcH8/n9qu1Cb0MnjPE6xYaRUpoXwTEZkBooWA1YgDaTtJ2BrCdCW4mTapRiJTvCHHj+1DGxGWUEwWK5k1ZHBzLpp3dPWDyBqxi7+aZVihJRkAGZWGofU6jQd3YRrO1U7oYtmbV1WJXQMumpHNhA18BRdVYqG5u/Al9a7hzGHhd43Uh49oo72XQE8yB517fwtCuEXCo9oDznz/tTPhHW6gdfUdD0rb0Oq9Zdjdj+Zj63T+k5Zev6MAXLFVsRg1cQwnpyIPUEag+VM1zCVXbA+FH7IDvitdsXUEf5i9R/mAeI2b018KoXLqEknXX3TIPqDqKdxga2ucKt3BFxFbzGo8juPSn2mMSJyfiDs1zukDw1HwohwrGXbZXK0k8tDp1NO9/sVYf3WuJ4Ahh/7gT86mw3Yu2vu3CP9gn61III273lDB8Xckgkf7VH7zTVwS7Op+JP8AqnhOytpNTcuN/4gfJZ+dGsLhEtiEWPEkk/E60guDxIkydjO2n19PvWCvKypRptXs1rWUoptNe1pWUpGclXZv50qnidj5VlZXOCd15ibid28/3r217w8xWVlF+JKPfZa4co1/mlG37zXlbUBFgbQYJkRsfGsrKy0/NME1H5h+3/AGJ5w05kRjqxVQTzOlQ3/e9a8rKos7MSfiM1UwI8ftRzsu5zxOkHT1rKyiNH+ev3Eo1n5TfaMbVowrKyurnMTwCt1FZWU8YyZKlWsrKUU2rKyspRTyvRXlZTRT01lZWUop5WVlZSkZ//2Q==',
      description: 'Spicy, shredded parotta with vegetables.',
      mealType: 'Dinner',
      dietaryRestrictions: ['High-calorie'],
    },
    {
      id: 16,
      name: 'Idiyappam with Coconutmilk',
      image: 'https://www.awesomecuisine.com/wp-content/uploads/2014/04/idiyappam-coconut-milk.jpg',
      description: 'Steamed rice noodles, served with coconut milk.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegan'],
    },    
    {
      id: 17,
      name: 'Set Dosa with Vadacurry',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBUVFRUZGRgaHBsfHBoZGxwhHx8hHR0hGxshIR8bIS0kHR8qHx0bJTclKi8xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHxISHTUrJCszMzU1Mzk1MzM1NDUzMzMzMzMzMzM8MzMzMzUzMzMzMzMzMzMzMzMzMzM1MzUzMzMzM//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD4QAAIABAQDBQcCBQMDBQAAAAECAAMRIQQSMUEFUWETInGBkQYyQqGx0fDB4RQjM1JicoLxFZLCBxZDorL/xAAaAQACAwEBAAAAAAAAAAAAAAABBAACAwUG/8QALREAAgICAgIBAgUDBQAAAAAAAAECEQMhEjEEQVEiYRNCcYGRMrHRBRTB8PH/2gAMAwEAAhEDEQA/AM5Pva8DOOkGBANvn+dYi5FDBIA6C/pF6/g+kVzSTQ2p+ekTlPzA8qRCF+TaJIN6xBDUVptHZxcQCBLaaxTUxJWtHsjCPNYJLVmPID68vEwG0lbA3XZXWvjEVStgCTsAL/KHjcLlSRWfMzNT+nLuefebaKpnHsi5ZEtZfUCrHxJhPJ5kVqKv+xjLOvyqzzCcAntcqEXm5C/I3+UGHhuHl/1MUpP9stS3zNoQz8VNmGruT4mBwg5wtLycj9pfoZPJN+zRjFYFNFmP4kD6R3/VMGCSMOT4sfvGdCDrEgByjBzm+5Mrv5Y+m8Ywtj/DDX+4xIY3Ase9JYeDt94zzpUEUi5ZdaWgObS/qf8AIN/I9bCYGZWkyYh8a/WsRb2ZDD+TiEfo1jvvCgYe+sR7NhofQxbH5M4+7/UnOS6ZdjOEYiVZpbU5gVX5bdYTu9yb9Y0eC4xPlWDEjk1x6GC50/DYgfzZQlubZ0tDkPOX5l/BePkNf1IyQO8XZxXkNacvWGPEfZ55YLyznTmuvmN4TVMOwyxmrixmGSMlaYV2opES/KKFWIs0XLhauI8Z7jlABJrFqGJRA4i5FdD6xxaKg9fz1j0kmIQ9r1j2OydD8o6IQumy2vS31ivs6ig1gme3L8/LRVnH7eMEgBMAAt+cx4RACm35ygwgHaICXfQU61iAKkBBsTBkuXziUqVmICrUmwpuenONCkmXg1BmqrzzomqpyLbM3TQddscuWMFbKTyKKKcHwhAgmYg5E2Hxv4A6DqYqxnGQAZchBKT/AB95urNAGNxjzGLTGLE7n6DlC+ZM5Ry55JZXt6+PQtKTltlrzecV9sSLCKghMXJLilJFWyu5iaoYJk4cnaGMnAxnPIkVchZLkmCpeGNRDSXgqQSmFEYyyFebFaYWCEkW0hiJESEq0YNtgti9JAqNB4xXMk0rbeGfZaHxiDya5oKdAsXmVfSKnw9oamTcR0zD6+cTl8FkxTJnzJRqpp02P5WL3w0jE1B/lzakBhofGL5siq1ilcGSe6L6/pG2LPKDtdkV3cezOY/APJbK4oduRHMGB9a0jYtNV17KcMy1oDuvnvGd4pwtpDbsh919j49Y7XjeXHJp9jmLLepdi4y+VtP3jxRQ9BFwNaxS9qw4blgvpBMuwgdEoddtPv6QSsQhHOI9iVBHRAhbg/hEUKa7RPI1eW+36/l4llNrxAAzXsNRy/NYlkJKganQD5RZ2IrY0Nj1h3hcsiWJ7gGaa9kp25uR9PXlGeXIoRtlMk1FWWd3BpzxTDylA7f66anbTnGemzCSWYkk7nUx7PmEsWY1J1POIypdTeOXObm7Yo3u2VOCYksmDUw8GScL0jCc1Eo5i6Xhawww3DrwxwuEFoZSMPSkYTysxc2A4bh1IPl4QWgnJeJqtowcmwWUjCx7/D2gkR7FbYQdsPePFkawSp08Iku8C2EDOHsIg+HHeMHTHsLb/pEZhHePT9ItFt6ChdNlGxgjEYYg3pSlbdRWFuO9psOgCli3+hQ1dtSQvzPhCeb7YOTSXK7u2Zq+oCw1HxnW1X6v/gax+JkltRNfxDDSRITLUN3a1rU2ofAan0hViJYyqAeYpCTDe1E0sobD59AArsDXS1jU+UGHj+HYnOs2U/JwGUf7lAI/7YtPx5Paa/Y1n4eVb4k8RhwQCAY8VwA0uaMyMLjkeYg1JqmXWWc1dWsRzFKaGApi1vXpGP1QlvTQpOLTpmb43wxsO9NUa6NbQ7eMLw+agtzjcS2SZLaRNWqn3W3Vvsf0EYXieEeRMaW+oNjzHOO54vkrIqfY1iyXp9hIYna/2pSL2PSAJWNOxgkzTYaw4bks4j2Id3n9I6AEahxXpHlRraPDI8Y5E235fKIAK4XhwzM72RBVjz5AeJ+hgXG4ppjmY1q2A2AGggjiwMspKGwrMA3Y3+QtCxnvT6845eafOVrr0Izlbv16PWWvlBeHlaR2Gw2YgAE5rUEa3A+yUwpV2VDSwNdetNqXoIVnL0isYSn0LeGcMeYaIteuw8TDnCcFYu0sMudMpYXoAd60vDtwmHWQgll2YrLLy1sMxuSL5QTc+GsM8XOWRKd2BIUEkC5PQV9Ix4XtjMfHiu9iaX7PkM9WAQEZKXbS+YEW8og3B5uVijKx2BqvLU3+UFez+KlTZReSrAOzZsxJbNvUknTSm0FYPhhldqyuzs5qque4ppQAACoWBxTdUXeCHtCpuGzRlGUGupU2HiTAocZnT4lNCOW8aXhnbhG7fJmzHKEr7u1agX1gbiMmY9OzfszmBJChiRuKHpFJY1Soo/Fi+tCUHrHsO8Rw9HUmtGFsyi/mBrCafJZCAdOf5vGUoSiL5PHcdrZy7RNHGhitGsY6YQLlgBuToBuT0AiiTk6RikUY/GJKRpkw5UB1pcm9Ao3Y8vWgvGHxWNm416V7OVyrryqbV+kW8Sxxxk4Gh7BDllqbVvdj/k1KnlYbQ3lYJAi945TQ0Fuml70tHThGOL6U1y9v/B3PF8NY4qUlbFOF4dLW1ATbxMWTZKqbAW5XEGSFlFmCObBiQRWlCKBjUV/4tFOZXcLmFTWq0Itv4/vCs1Lls60JRrRVh5BzZlOUr3hehty6+EQbCURyUJBtWwAOvrQaDnDeRhZauWQinIUiM1sxZSe7yGo/WM45Heui8k2jOrJmS2LSiRX4TWjdCN/GHGFmCYrVUo6WdDqDpfpXfnY9R8R2aoKEhqUYEixBOltKUtzrACTZgmdqpFVG+jDRlYG7Aix/aHYyUlU+vTEfK8SOWNpbG72pTaKuMYQYqTYVmywSOqjb6D0j18XLIVgDkcVFdjWhU9VNjzsd4lhMUFmBh4U8dYpHlhn+h5ySljlvtGBHdNvOCw9q1veo5DnDH2r4eJc0TFHcmDMKbE6wpRx+GO9jmpxUkPwlyjZdnjohmHL6/eOjQsapni/hYAZprC0sZvPRR6/SF7zOsETsQEkpLrRnOdqgi2i3pQjeF/Im4x17MsrajS9gs5yxZzcm/nHk1FNAuigVPM6sfmR5R2aul6ciDr4ecX4CSSyqBUm1Oe0c26Qm9aNN7M8JaZKdpblJgYBXIsoFCxFQQTRqeumsbubIU2B71AM28B8GQy8NLXLRgoqpIqDTfkfvAvBXWbMnTpc13QsECkEKpSzZKjvVNL6QtLeh/HHjGhhgeHTJaMrz2cliQxCggHRRTl1g2bLqpAO1L3+W8eEmnWK3nZADflYV1ifT8UXPeG4Uy0CswYjcKFA6BRoIrxsxyrCWRmoctdK7V84seba8K8azUNCqsbLmYAFjooJ3MUySVVEskXcI7XIyznR5ma4W4UGhCnSppfzGsdwrATZXadpO7TM9VJFCFOx6iLeEcOCBpjIFmzApmUYkVChdTyApoIv7JRM7SrVy5aZjl1rXLpW+sGtJtAKzjJaTRJykO4zVC2a1KltCaKPAUiU3Ap3yqrV6Zq1oaWr40iZxlzXS1+etYkk4NWn5vAclfdhozuMwwluVB7p90nnuIy3tnjCspZam72Ph+9DH0HH4FZgJ3oaHxv8AUAx8p9o3Z8UqN8IAI67+V4mCNTcn6TZli8dPOvghgFCCXQUpWubSptWnQU9IPSawGVvLlrqPSIdmlApPeIqOX5Tz6RPDSzM1IGUFQQBel9dzVgam+kCUvb7PQyimqQC/dckAd6o9YKwyrLmd+5AIqPd3A01rFzcP912YhLd7W9eUV4zCqxCrXWtRqDt4Ct4kWpaKPHxjoTmc0vFMahFfTcAWvQbwPOxrjOwObMSAWFBTw00hhxPhkrKGJYtWmc0pUXpTlTaJYmUrqFsFpQUGunWx3jfnDWvt/BSPLpsR/wDUWIKsQSTtt+kaeW8syh3cpFKWHeqLkmtr7dYT4TgJzijKBrmJoB49fCGePdZcrLTvE67kaAeAobQMsoulD2aQ5XsGeRmlzUFe6BMXyIVx6EH/AGwpkcRat94e4KZ3ZR+LO6sKfDMUIL+NbRlZtjbQH9YahFTgr3Wjj+fjSyXXZqpyjE4V01dO8sYtW8RGj4RiuzmqSaKTQ+BtCbjeG7Kc67VJHnDHiSq4/wACOF03Eqv/AHfL9o6KO1MdD1MZNQqGAm4jMzGrVA7oBuKC1LwzF18AfleE4kUSsL5uL0zKbTdMi2NQnvywd6qcp5CNZ7JSBNmP2Ux8yy2Kq+zWANelYxiyO994+i/+nUhJbzCx77KAq6Er3WYiutMyesKZ4xUbRWKXLQ9w2JfBYJHxhOcNTKrFjdjlBY1JNIf4l3SUTLQM1O6ulSfysLeI8Rw8gpLmDMGa2ZSwqSL6GlyLw3kuoUAWoKXPKOc2m36GPuUSsMzyv5i5GdRnUNpUUIzDlzEWpRFVR8IAGpNrC5udrx48/wCEXpzP1MC4B5jNM7RCiqRlYkHPuSALgC3rFbXSLfqFuzGpAFaGlR+WgWRgM6J/EhHdSGsKKHG6jUDkDWC3NB9bQAnFpTK7h1ypXOaii01ryi1paINZuKFLQmxyzzXslRjSoV2oTrTbQm1Ynh0ZzLaWQ0sgsWLVoCKrltca/KGBdVNyIEnydv8AwFa6BsFhHaUpmqFmEd5VaoU8gd4qPZ4GQSzO6g1Zj3jc6mmwg5sWCSBtT8EedrrvFZKMegq/ZXiHZpZ7KmbKStdCad31j5d7VymTGsSLkLWmlSik086x9NxCK2XNMKAMpqCBWl6Gux0PjGH9rjLzLOlzFmDtAWuGABFFFbinvfKL+PttfKZtidTTFKyyJbKy0YlSCbMPC2lPoI8wQNSpUFia2sToCKG3XyPKF/GOKl3oGIBGg0J5+kHy1pI7TEMBUAIG1Ohr1JrB4NK379HVco9sp4lxcuoT3QKaG9qAaaWhdjOMOuZVIYmgqLaac4a4bhyTRmlHMLgnShrve1qQBi+Hym90kOpIPJhU0ItbShB6Eb0viWNaa6M5yb/pYrwc6Y9ZZBaprTkwr9zDzhTGuQin7RdwvgygBmFK0oamut9CKDffQc48xgEvu11FQQCL6D6m/WBlnGb4oMItLYbPniWjZtNL6ab1+kZyTjxOcV2tfU03jpyTJurnLrenID6CCZOBlqFoKvWpqPSDGMIR339vRPr5a6GUoBcp6r9axjzeo8Y1+KmZJbORoLDq1VH6n/aYycle8BDHjKsVv2zlf6lkTyJL0gmlPKCvayXmlyJwHvIAfEd0/NSfOKqa+EGY1c+BP+D/ACIrGuKXGSZy1KpJmSr0j2PY6OlyG7Npmokw1p3Dy3tC1mGX0hkVJlzKUsF16mFrSKiE8zXIXm/qYPLYVsK9do+h8BkJ2UiYMpxQEwy0ZqBgSFYkb0QWjEYeWoN41fAHmCVN7OWpeWMyMRUqGs4G+t6DnCuaVrQMUlyo1ciQmMmv2kpl/h5gyNUgOQKitrga06iHjqktTQ8ySTXxjPjis+TIkGbLZ3cgPlFMtTqVNwcpqV6GDlm9t2st1cKKo1QRWo1U7im4hFtdVscQTgsNLZzPBLFlCjvVWgJNQNK31g12HpAOBw0uRKSVLrlQUFTUnqTzreIzMUaHLrtWJySVBqy2ZMvQb8+W8QxGEllHRpa5XFGAAFd70vEkn0ABoGbSorpr8oh2ygkLTMb3OpiraqrDQtl48CXlkLRlJRJb1WuU5STUVycjvtHuK4PMmKTMxDI+vcoKeAF6a61gjDYUTM02XLyzQzAPNU3OhYCtcp28IKlcMVJjzWdmdwAanujKPhB0HnBapUl+/wBw8q6FuF4ZLmIWSdNNTdixFx0OkSXg71yifMAAvdq6bNW+/PaDOJ8PlzcgmFlCsGBR8tSDoRuDAU7h3bYiVPTEURK1RTUN0saeMBPZOT+ReeAL2jGc0ydQVV2ICLS2TumtdyaUgPGYJZssquTszLochzd6taAjUAX8o0nFM7DLLCkMQGz1plNmsNT8oDMhUAlqoVRoFAA+UV/EcZKS9F1NtU2fKp/Cnz9m9mQ0PhzHOohtxHESURJboWdVAy86CoPgT+saHjvDXdTMBXOnumlO7/ax+h2sOUYXEYVmJY1DjUGtRDup1JPX9mOwyKUaffsd8M4oUkzGCUCEKaG9/XwgDDsyfzJiMAWNqG5NbfvFuA4imEWrJnzAFTazDUEVrroTQ9IHmcWmzqqe6jNUKNB4W1rGf4dSk60/dl4u0kh9MxLue4Aa00OnrysIX4maxRsxWgNydR063EVs5RapUVoLXppU+cLMTKYsAWJrc3sa9OcZwxpu7GZNpUHyACoIt0g/Aykmt3TUKRnIFxzA6k2A3MBYWQQLm3OLsXxNMEncWk5qlENCUzAAzHtXPT3U+GpblXbBiWST+EZeRm/DimB+0uIAmCQDdDWZ0fQLb+wWP+ReF+Gl2qddoE4XLYsXe9STfUw3RamlNDDc2o/THpHms+Rzk2ylVsfCCcMubDT12sfG0emWALfmsX4BP5OI8B9DGcZb/cwsxGeOj3J+Ujo6Y3ZvcNQy5vgv1gN0tFnD5h/moAWJQ0HUEH01j1pZpc+kI+RrIxfLqTK8NLvGg4PxDsHqwBRhlYEV3qLbwkw9vvBasPH6QtNWYKTUrNvhvaOXMnCVnBZhUKL/ALDnDM4Bu0Dia4GUqEpUVpqTzBFaxiPZHBSzjO0ZznVDlXnbLUHoCRTrG04pxObLkuySw7g0VQdRWzGmltoXnGKOnCXJJolwrCzJUukyYXbMxryFbCwFaeEDzZOKYS2REVg/fQtYrWhIamuW8M5GIORGZcrsqkruCRceUQnPmBGamvK1en6Rk6RqrIYsFQSdb0Avpe3lC/BS0cJiijK9GpnFCFvW21aCDXnEZRmrQXNNTTWm0E4MEgFjmtqfnpaKrbsL0ivh3EUmS1mISVYWrUG1jWul6xKbMWYzS3lllygkkdw1JFK7tatOREJ+P4LFO6mRlCqpNyMpP9rLSpB5iG+AclAWBBOxFDrStDcA0i9vp9FddgU3Gn+ISSJTFCPfHuig/BFy4CXLR0kKJZcsxI2ZhTNevTpBrvSF+IdaZWcIGOUEkA16BtTFG3HoPYpwuKOGAl4ueGmzHOSlaZTZRWlrg+sWTp5ExFCVDlqsNiAKV51/SGaYKWxAK5yoszCB5h74ShqamvK8S+SsgrfGLMLolao2Vrb0B87GFeJ4UuTXMb00BA5Bt6cmBH1hzi1y1ELsGZjzXVk7iqCr9a0Ii0JuLfEvfsST+DpMGUTFBqO5MojbVILEIdNmPhA+J4BOlmvYuRQUIsBTXUUa3I26xqOISaSndVzHLpGT4fh8yNMVXSjEUNVv0GtIchlg1clVfD1s0WeVVZauDY2yt5KW+gizEypUlQZgVGtXtHAPlLWr+trwuxkl3BBZwf8AU33hEMChJRjlcc9+oi+KGHvbL5PNnVUkOsVxogASV0/+RgLdUQVCnqST4QjEglizd5ialiakxB+FTFuhP+0xETJqaiviP1ENRqqi1Xwc7JOU3bdjjAYe9zDAIBmp+aQnwnFVB76MvUXENUxstrLMXwNj/wDaF8kZJ7QpkjK+jyatvWCcKcuGnHnFM0ELXLUaWj3HShLwkxj71BzoN6CM4baT+Sj9Iw3aR0UUjo69DlH0Pg5rPSnx5l3+IEKPWkez7VBuRCPB4tpbq41UhvMGo+cO+IOC5KWU3B6HSkK+XD6lIxzx+pMtKDslfk5UgdQCv0b0iCGv22HjzgeXMIDLs1KjcldPDX5wVhpZYdPl+8LSqrFnoO4Tiklz5bsKi4zcqilhG/wsp6lvhsVNeeopzH6x8+ElQKHXlD3hHtBlQS5liNGOh2F+dLQrkSluhjxsqX0mpnOK6mv5ryheZaSy7qpq7AsQDcgUB9BSBZE53m2dchQn/KtaCmxg+ThT2gmGY2UJlyWoTUHMbe994Wds6CaAeHYlcSgdUdKvl71jQXJ1O1YY8TxyShLl5ipc5EIFcpK0BNdb8+cTnPmamwFO7ald+mkDT557SXQBhmuCASP8ga2pvrFl9iP7hHC5rS0ly2mNOcHK7gDW573KgoPKGEycBttCvBcPl4ZHaXbMxZyTvub8rxRgMT2mdlndohNrAFTuPDQ0p9YnLsFBGLmhhQ7EHzBqIrZJcwL2iZgCGAYfEpqD41iuaBpWK5GHl5zMFc5ULUk0AFTodNYpG32EZz8ZkByDWEIxj9poTWugtbrBc59BHpUUI3ibbD0L583M1LeEVo2UkZhmOi1vTnTx3iOH4RKXEdrmOemldRWCnw0vtO0y1cKVU7gHUCLWgCxOGTZ0qamIZQudSjKSDRWr3geVB43j3G4J3EoyyAFNDmrcb/eG/aFQAKcjrpTlua0gH/rEtZ4w/e7R+9cVA3F9LiLW5fsAQ/wM1Zk7PQpmqh3odvKMrxfDMVDA58mbM+hsfdI8Dr0j6JxnDTZgHYMqsGWubTLXvbcoT8Qw5YTUaUVGbKpFLgj3jf8ALQzhytPloDMDKxLrcMYPkcTJsyBoBkYckeFvSCFTYeZjoOMZdoXdDzDrhpgoe6flFk72aVhWW4MK5EulPlBGZh7pI8DC0sck/pk/32Zcmnpnkzgs5CoXMKXqpP6QPx3FTVkiXMaoY7gV9aVh/geJzU1Na7GM77ccVE2ZLQKBkF6bkxpheR5EpJNfJaMuUqaM1HRLIesdHToYoeswpDnDTg8pDfMlVOptqPl9IRC/5+bw39nMQFmlGHdcZfBtV+dvOMvIjyi/sZ5o3G/gPw0jNc6c/vDLDTBQqB4Gn0irszW+3oImrU931+0cZy5M5s3ZcyAa6/PzgfESc2vp+fWC2KlRcZhY+HPqdoiAoNyD0qPnEloCA8FhnVgEmNLUkb1UeRjctMyA0JfwBOvgIyjKGBvWIJj3kKaITYXBJNBsam5pUA7RlNc/1HvGzVqRr5TN2biuRmNK8rQk4g8uSUnvWY8sZVenP3jTwJiv2f4iMQ01e8PdIDUtsQPA/WHGA4T2bMzuXVyCqOR3SBfLXyqIzUHF0O8k9hsvEpMl6go4t4GFqcPmS5ipIYJJPecZRVm0ux0FKeghg2HSXXKtyS5rpU2NDtpCnHzHmK0tarUe8K29IpdMKCcQSbKYuw2GyKeZubnWwgbh8oJLRQxfKKVPSLkxYJpETRCDm4uNfzbwjlctrQX0EUY3GIilnYKouSeUW4Lh6kdoJpZXAKrbKOZBArcfSCrohTMDDQilPOI8PwrAM0x8xqcoApQcj94oxi4rt0CS1aWfea9Rrpty16wU6MrUAtzgPWyAPFcQ8tC0tMzVFBtc3NoI4bh3KJOnIFmsL01EeYeTnnLNSeCihlZFoQW8a2IMNR3q3gvqiC/FYmXIVpj1GYqtaE88uniYhxXDB0YEkV3BpBWOxktFetGyAMygAsNxbna0AcUxLGX2lKIyFqN79wCBTQWrXygr0BnzaSlWmKNnep/3GLOypt5RHhS1IOlan1v+sPpGEqakCu3SOw5VoRyTpi/DYViesG4fC1qfhX5mDzhaDKPP7RZinEtAKafWM22YudiqYaE8gKnoB+fWMHiZ/aTXbmfkI1PtDjOzlEfFM1/SMlhVhzBGlYzgjqwrN0j2JZBHQxYwMTbaIo5GnMfK8evpER+p+QEEht5WK7aUk3cd1xyYdOov68o6UM1hb8/LQg9nscsuZlf+nMFH6X7r2/tv5EjeNU+HKEoaCnLTmCDuCL16xx/Jxfhu10zm5sfF/YjJTu93U6n9OnKCJEuqrzvUHpXX5RBZmQ2Umt7UAHOpJ5xYjkEnJrsGWvzIhRu0YJEpq3Wmt/Sl/nliExQbkRaJgpmIPICl7cxtf9IomqSa+gjLdkJcEmZJwovvd21NyL9aUrGnn4GVMKNO75Rgy7UINRpyMY90KFZlbqYcT5k6dLEzDZTY5g5IoRSg8Nanw5wXcto6PizVUN+ITc4KqaMQaHYee0Z7AsMK5SdOLNMZcq3YLqLm4Wp+kMDhcSJ6VReyy98k3U02O99oK/6dKdkmMtShtQ0BtS43F4zWnscvQDw0YhnmB1VEzdygpW5JH+RpQ18YZ4fh0qWrt8bmpNTrQDy0inESJeIllAGZUb3VJHeW1KmL8Ckx0zTJRlmpGVjWw0MXp/ABNxhwi1aSZykgFRc0JjRTGyqBlygAAAWAp9IU43GvIZCEZg7he6K0zGlT0EM8YhvUmwJNIpf0hKHxNAdh+awPgcZKmhsjq2WzUINDyNIW4jiT9j2kmQ82rFCrAg2NOR7p58oaPwEGQZcsfw5ejOVrmryJ16QeNdgOwXDJUqWyy0CBmLG51PjtaBsFgJiPOmFy6soypQ1DLrToafOGUuU0qWis2bKtGc6mg1oN6wqn8fXsw8lHnLnysFU1B8DqNPWBtthCcLi88oTJkvJmzVV6bErU9CBXzhB7Z47LKcDUig86L+ojQ8UCuhWatVIFQT5jTrGF4/iTPnCWq0RLnqfhH1t4RtgjymUySpWB8BwJPw1NgoEaIYfKKD3tzyhx7K4IqrFaKad6YdFX4qf5EWgPEqC5VK05/rHUqo8n7ObN3sGlJ6CFeLmh3J+Bf03hhxCZT+Wt9j9vvGR9quI9mnZIe82tIpBOUqJCLk6RnePY7tppp7q2H6xThkgdFpDLDSbax0YqlR0IqlR1I6LezXnHRYIbNYRAdRsx9aCOfkIgLHy+xgkCVA6X8fP88Y1HBOKCYqyJhuP6bHca5D1G3S3KMfnuL/lf3iYJFKHQ1tt+WjHLjU4uLM8mNTjTN/OZlNAhatjTau/M+UTRwpqtzr7jC/nC7hHGO3Xs5hCzANdM45/6uYhpJUi1/GOFlg8cqf8A6cycXB0y2SvdFRenp94n2YF/lHq9LmCSmYdaflIoly6Ki11zR5gMU0hyadw6j83grsudhHPIB10ijaWi2OTi7Q2xjviJUxJbZGtlc0INqwRwvAjDyVRmDNctTSpuaV0FfrCDCYppRpfJ9Duf2h7JxaBDMJGUCtTTTx5QEdTHkUloZBhlqLQh4RxPETJ8xJskqoDFXrVaA0AJ5kXtBeJnLNlmjd1xQEEW6xPhfDBIlCWrs9ySzG9726ROVmqJ4ouyOst8jHRwK0PnC7i8rFtKRZDEvVQ7rkr1aj2pXUCGbSyQb0HMf8Uj2ViVVghIUmtBUVI5wE6ose4RXVEWYVaYAMxUELmAuabCu0TeewFXIsKs2gFNTfQQPhSVDoO07rHvP8Wbvd07gVp0pCufJnNiUcTssoA5k/utpy1vWJ26bIN5E1Zih1IZGFQdiDHodJYoiqg5KABfoIC4jinlyy0uWXI+FLkwn4xxcS0UsDnYA5LZsxvl8qxFF+gNgvtJxR5h7OWSHalG0A3JvsADXfzIg72b9mFILsSEBqXb3mO5gLgmCGft8VdqCiLsNaeu8OcZxNpoCqMqjQCwHjzMdXx4wxwuXYjkyxbr0WcW4gpUSMOKINabnrCXEzRLUgXc78uv2gqZOEtbe8bD85Ql4nipchDNm0LG6IdzsSOXIb+EFzlkl/3RhuTAeI8QXDyu0mf1GHdQ6338/wA6/Op01nczHuxPpDDiOOefMMyYTU6Dl+8DFIexY1FX7HMePivuV4damGXY8oplINoNLKLbW3jY2KuwePYvrL/u+R+0dEIFz8Pe1xf5QBOXvEb6f/mGCAkhbVodfT9oCnCrEjTM1PIftBIV4cVJP5T8+kEOlKn6x5hUpXeLJtD6CIQHU/EDQi4NbxqeEe0YcCVMoH0EzY/Yxk8wiLmu0YZsEcqpoyyYozVM+nK1LQRKfn6bmMDwvj8yUMrgunM3K+HMRrcHOlzQDKYMTrzHj16Rxs3jyxP7fJz54ZQ7HCOD71h4V/5gtOGM4zIVIG1b+kLAcg7xqeUcuJaoIqCNKE1EUxyi39StFVXssx+BcAAowXwpWAEmPKBFM6HWWb2OtK2vyjQSfaKYLMoccqfWB+IY2VMFpWRtyD+lIYlhx8bhL9maqSj9UWASeKSGQSmloEJNUICjnXKB/d9IaYjiZAUqhepAog570roN6Rn8VJQmgUE8zt584DGEIusx1G1DX0rCzhfsYh5cfaNdxHi6SQpd8uY5QdRU3izEyJTzEmOgZ0PdYkinkP1jJy5c+tROryDKD9o9nycU+s5RW1lNb+cZuNezVeTD5NJjOIrfMcovQ1FeVekZ/iGOw4mpMJd5ig5VUk62rlGvnFEjghfKs2c7KKW8PmT5wZLwMuW1Ja0B1Y+8TFowS3ZSflL8oMmNxLAhVoSTV3ooAOlFUkn1izDcPRGExmMx6XdhYdFG0McopfTlHpT/AIi0ZJdIXnllLsrVMxq2nKIzXpQAVJ0WOnzglC7BRzOgjMcX9rglUw/vGxmHXy5eX7RvjhObpFYQcnSGPGOKy8MDnIedsguF6HYnpoN+UfP+IYuZOczJjZmJ02FfqesVuzMcxJJOpMegR1cWFQQ5jxKJWyRJZYghViaJQRsbFWSg1iLDetRFs8ftFGSx6wQldY6J9gY9iEHkgXzUJtaugOvj/wARUZAzoo5EEdaXNvEQYpoTyJb5mo+UVBO/UG9zr4iCVIvLygg9N4ongVoNYNzg3IvWtelLCnjC7GMM1R1+YpWIEGKx6lBqKxFXNbmtj946p1gECJqEqNrcookTZktgyMVYbiLEuta6/nP8rFry7UF4DSapkasccO9rWFpyB+bCzeP56Q+wnEZM3+nNCn+17N/3fekfP2lN1pFeQg1+kKz8SEutGE/Hi+tH1FJDKKkd3nWoPmNYln5VA5x85wvFp8v3ZjW2JrDWR7XTB76K3yhSfiTX9ItLx5LrZsmAA0HlqYqwyVrUaMRTkIz0v2tT4pbA76GLsP7WSO8GzAVqLc/CMZYMqT0Z/hzXaNKEA8Y9yV6dYQf+7cNT4j5GKn9sZQ0R2Ow0HzjH/b5H+VhWOXwabMKflTFU1qioFxcD86RksR7aH4JKg82JJ9K0hNjPaKfMtnyjkto3x+Fkvei6wSZ9BxGPly7u49dIQY/2xRaiUudv7jp6xiZs0sasxPiaxytDePwIx3J2bx8dfmYXxDiM2cazHPgNIDCUidYkqV1h2MVFUkMRikqR4BHhemg84uCQO9iYsWovSYKViTz6aU8IGv5QOxJMEgQ02piwitIHRYLQW5RCHmQ9Y6J5jHRCDgf+P/iIpl6H85x7HRYB37wvxOvpHR0AhQdB+bCPDtHR0QgVhfdPjBkrQeB/SOjohDydv4QA8dHRUjKjEI6OgkR5N0gc6Hyjo6AwM9EWjSPY6IA8/aIPrHR0EsiEyJStI6OgEL5esXJrHR0EiJtFT6x0dALFCxV8XnHR0EBdL2i9dvP6R7HRCHR0dHRCH//Z',
      description: 'Soft, spongy dosas, served with spicy lentil curry.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 18,
      name: 'Chapati',
      image: 'https://static.toiimg.com/thumb/msid-71503575,width-1280,resizemode-4/71503575.jpg',
      description: 'Thin, unleavened flatbread, commonly eaten in India.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegan'],
    },    
    {
      id: 19,
      name: 'Samosa',
      image: 'https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0=',
      description: 'Triangular, savory pastry filled with spiced vegetables.',
      mealType: 'Snacks',
      dietaryRestrictions: ['High Calories '],
    },       
    {
      id: 20,
      name: 'Sweet Paniyaram',
      image: 'https://static.toiimg.com/thumb/66554591.cms?imgsize=572772&width=800&height=800',
      description: 'Sweet, round, fried rice flour dumplings.',
      mealType: 'Snacks',
      dietaryRestrictions: ['Vegetarian'],
    },    
    // Add more recipes here
  ]);

  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleCriteriaChange = (event) => {
    setSelectedCriteria(event.target.value);
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedCriteria && recipe[selectedCriteria]) {
      return recipe[selectedCriteria].includes(searchKeyword);
    } else {
      return (
        recipe.name.includes(searchKeyword) ||
        recipe.description.includes(searchKeyword)
      );
    }
  });

  const recipeStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: '200px',
    display: 'block',
    margin: 'auto',
    marginBottom: '10px',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Recipe List</h1>
      <form style={{display:'flex',justifyContent:'center'}}>
        <label htmlFor="criteria">Filter by:</label>
        <select id="criteria" value={selectedCriteria} onChange={handleCriteriaChange}>
          <option value="">Name</option>
          <option value="mealType">Meal Type</option>
          <option value="dietaryRestrictions">Dietary Restrictions</option>
        </select>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={searchKeyword} onChange={handleSearchKeywordChange} style={{ marginLeft: '10px' }} />
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={recipeStyle}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={imgStyle}/>
            <p>{recipe.description}</p>
            <p>Meal Type: {recipe.mealType}</p>
            <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
