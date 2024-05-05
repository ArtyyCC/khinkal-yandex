const searchController = (req, res) => {
  try {
    const results = [
      { category:"Грустная", img:"http://localhost:3000/images/img_1.png" },
      { category:"Весёлая", img:"http://localhost:3000/images/img_2.png" },
      { category:"Азартная", img:"http://localhost:3000/images/img_3.png" },
      { category:"Радужная", img:"http://localhost:3000/images/img_4.png" },
      { category:"Звёздная", img:"http://localhost:3000/images/img_5.png" },
      { category:"Грузинская ", img:"http://localhost:3000/images/img_6.png" },
      { category:"Turkish", img:"http://localhost:3000/images/img_7.png" },
      { category:"Киберпанкавая", img:"http://localhost:3000/images/img_8.png" },
      { category:"Зависимая ", img:"http://localhost:3000/images/img_9.png" },
      { category:"Грустная", img:"http://localhost:3000/images/img_10.png" },
      { category:"Весёлая", img:"http://localhost:3000/images/img_11.png" },
      { category:"Азартная", img:"http://localhost:3000/images/img_12.png" },
      { category:"Радужная", img:"http://localhost:3000/images/img_13.png" },
      { category:"Звёздная", img:"http://localhost:3000/images/img_14.png" },
      { category:"Грузинская ", img:"http://localhost:3000/images/img_15.png" },
      { category:"Turkish", img:"http://localhost:3000/images/img_16.png" },
    ];
    results.filter((obj)=>obj.category === req.body.category)
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = searchController;
