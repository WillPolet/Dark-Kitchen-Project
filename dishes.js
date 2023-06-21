const dishes = [
    {
      "name": "Arugula Salad with Stone Fruit",
      "price": "14.95",
      "img": "https://www.allrecipes.com/thmb/EC7FTg4V4z3ijZyHMVmdXTlkFaQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7506181-arugula-salad-with-stone-fruit-GOLDMAN-4x3-5066-df2290fa4eaf49689258d9100e1170f4.jpg",
      "longDesc": "This juicy, vibrant arugula salad features fresh cherries, peaches, and nectarines for a summery flavor. For an extra touch of sweetness, opt for rosé vinegar, a rosé wine-based vinegar with a bright, fruity flavor.",
      "shortDesc": "This juicy, vibrant arugula salad features fresh cherries, peaches, and nectarines.",
      "diet": ["fa-solid fa-leaf", "fa-solid fa-egg"],
      "tagName" : ["vegan", "vege"]
    },
    {
      "name": "Coronation Chicken",
      "price": "12.95",
      "img": "https://www.allrecipes.com/thmb/-Zb9K3uggG3LnjhSUGjYp2Vg9cA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1644528661coronation-chicken-square-d81fa2fc43fd4056b62b5b23e28710bf.jpg",
      "longDesc":
        "Coronation chicken is a creamy chicken and mango salad with a spicy curried mayonnaise dressing. It is something fresh and different that always brings interest and recipe requests. Serve cold with a crisp garden or rice salad. This also makes a wonderful sandwich filling.",
      "shortDesc":
        "Creamy chicken and mango salad with a spicy curried mayonnaise dressing.",
      "diet": ["fa-solid fa-drumstick-bite"],
      "tagName" : ["meat"]
    },    {
      "name" : "The Denver Omelet",
      "price" : "9.95",
      "img" : "https://www.allrecipes.com/thmb/549znODoloqDsWKFGZ-Oa-SXpjk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/5282057-the-denver-omelet-Chef-John-1x1-1-df0ea80163b94feda5b635f1a8308104.jpg",
      "longDesc" : "Discover the delightful twist of a Denver omelet, known for its caramelized flavor and firmer texture, a dish I proudly mastered during my high school line cook days. Complete your meal with a refreshing arugula salad and a side of toasted bread for a satisfying lunch or dinner.",
      "shortDesc" : "Caramelized flavor, firmer texture — perfect with arugula salad and toasted bread.",
      "diet" : ["fa-solid fa-egg", "fa-solid fa-leaf"],
      "tagName" : ["vege", "vegan"]
    },    {
      "name" : "Homemade Corn Dogs",
      "price" : "14.95",
      "img" : "https://www.allrecipes.com/thmb/2p4Fb4apMIAGAkgd8wB2vabQKQM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(419x0:421x2)/730146-0cd5bfc66ef647cc98d411964da8463b.jpg",
      "longDesc" : "A corn dog is a sausage (usually a hot dog) that has been skewered, coated in a cornmeal batter, and deep-fried. A staple of American cuisine, the street food was likely invented by German immigrants in Texas in the 1920s.",
      "shortDesc" : "Skewer hot dog, coat in cornmeal batter, deep-fry for corn dog.",
      "diet" : ["fa-solid fa-leaf", "fa-solid fa-egg"],
      "tagName" : ["vege", "vegan"]
    },    {
      "name" : "Japanese Tamago Egg",
      "price" : "19.95",
      "img" : "https://www.allrecipes.com/thmb/_N3YybmZ-HhZ6r7amiJYWh5tYFQ=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/221923-japanese-tamago-egg-F-D-4x3-7c337ae6d99f41258db7959eaff3ef4f.jpg",
      "longDesc" : "Tamago is a Japanese rolled omelet, also known as tamagoyaki. The omelet is sweet, has a light texture, and works well when served over sushi rice with soy and wasabi sauce for dipping.",
      "shortDesc" : "Sweet and light Japanese tamago, a rolled omelet, served over sushi rice with soy and wasabi.",
      "diet" : ["fa-solid fa-leaf"],
      "tagName" : ["vegan"]
    },    {
      "name" : "Zesty Quinoa Salad",
      "price" : "13.95",
      "img" : "https://www.allrecipes.com/thmb/413IEbA1N5BgoxggPG4n8Rv5TsI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/229156-Zesty-Quinoa-Salad-ddmps-4x3-104421-df647e343ce543769a038cccf4c6419c.jpg",
      "longDesc" : "Enjoy a light and citrusy quinoa salad with refreshing lime and cilantro. Packed with protein from quinoa and black beans, or add chicken or turkey. It's delicious right away and even better the next day!",
      "shortDesc" : "A light and citrusy quinoa salad with refreshing lime, cilantro, and protein-rich options.",
      "diet" : ["fa-solid fa-leaf","fa-solid fa-egg"],
      "tagName" : ["vege", "vegan"]
    },    {
      "name" : "Chicken Fricassee",
      "price" : "24.95",
      "img" : "https://www.allrecipes.com/thmb/krhSBNkEeCQR5lh4kMFVPV6iwyM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/Chicken-Fricassee-4x3-1-2000-fe0f0f80b8d948b8a6d45abd921b99af.jpg",
      "longDesc" : "Indulge in the comforting flavors of a classic chicken stew, where tender chicken is browned and stewed in a creamy mixture enriched with rendered fat, earthy mushrooms, and the delightful essence of white wine. This dish is sure to warm your soul and satisfy your cravings for a hearty and delicious meal.",
      "shortDesc" : " A comforting and classic chicken stew with savory ingredients, rendered fat, mushrooms, and white wine.",
      "diet" : ["fa-solid fa-drumstick-bite"],
      "tagName" : ["meat"]
    },    {
      "name" : "Chicken Pot Pie",
      "price" : "14.95",
      "img" : "https://www.allrecipes.com/thmb/TabXz3VFje06pO0ySgOUNmSWQwY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1119x1019:1121x1021)/26317-chicken-pot-pie-mfs-481-43f7b0890fd447da87780be8d245ec90.jpg",
      "longDesc" : "Treat yourself to a mouthwatering chicken pie made from scratch, featuring tender chicken, carrots, peas, and celery, all nestled in a pre-made crust. Enhance the flavors with aromatic thyme and savory poultry seasoning for a delightful and satisfying meal that will leave you craving more.",
      "shortDesc" : "A delicious homemade chicken pie with carrots, peas, celery, and flavorful seasonings.",
      "diet" : ["fa-solid fa-drumstick-bite"],
      "tagName" : ["meat"]
    },    {
      "name" : "Easy Meatloaf",
      "price" : "14.95",
      "img" : "https://www.allrecipes.com/thmb/r_uPK_3ZuVJt2pfVdAffuBHVo_w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg",
      "longDesc" : "Whip up a tasty meatloaf in no time with this easy-to-follow recipe. Its flavorful blend of ingredients ensures a mouthwatering result that will leave everyone satisfied. Prepare to enjoy a simple yet satisfying dish that is sure to become a family favorite.",
      "shortDesc" : "Quick and delicious meatloaf recipe that's a crowd-pleaser.",
      "diet" : ["fa-solid fa-drumstick-bite"],
      "tagName" : ["meat"]
    },{
      "name" : "New Orleans Creole Gumbo",
      "price" : "19.95",
      "img" : "https://www.allrecipes.com/thmb/a4RwaXURJd0f7vOMKrhJNnMNHnE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2)/216888-good-new-orleans-creole-gumbo-DDMFS-4x3-573c0eb9f4584d92a0bd2b4e4065022a.jpg",
      "longDesc" : "Experience the authentic flavors of New Orleans-style gumbo, a cherished Southern tradition. This flavorful stew combines a medley of bell pepper, sausage, stewed tomatoes, and crabmeat for a satisfying and filling meal. The addition of hot sauce and Cajun seasonings infuses a spicy kick that delights the taste buds and makes it a beloved dish in our community of home cooks",
      "shortDesc" : "A boldly flavored, spicy kick packed with fresh ingredients.",
      "diet" : ["fa-solid fa-drumstick-bite","fa-solid fa-fish"],
      "tagName" : ["meat", "fish"]
    },    {
      "name" : "Baked Ziti",
      "price" : "19.95",
      "img" : "https://www.allrecipes.com/thmb/qrsOXPu1plCHQ8H2GoLt_bcEvWg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(992x0:994x2)/4557541-21604073f2774e89b532193821d6cd9c.jpg",
      "longDesc" : "This irresistible baked ziti dish never fails to impress, originally shared by a coworker and now cherished by all my dinner guests. With the option to make it with or without meat, it continues to receive rave reviews for its deliciousness and versatility. Treat yourself to a hearty and satisfying meal that is sure to leave everyone wanting more.",
      "shortDesc" : "A crowd-pleasing baked ziti recipe that can be enjoyed with or without meat.",
      "diet" : ["fa-solid fa-leaf","fa-solid fa-egg" ,"fa-solid fa-drumstick-bite"],
      "tagName" : ["vege", "vegan", "meat"]
    },    {
      "name" : "Campbell's Tuna Noodle",
      "price" : "19.95",
      "img" : "https://www.allrecipes.com/thmb/3qUCcTUQwjMmtzsPtkdSexXXlWE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2)/8511307-campbells-tuna-noodle-casserole-ChristinaSavage-4x3-9a03133ff7df4f7d867b0803178ad075.jpg",
      "longDesc" : "Indulge in the delightful flavors of a tuna noodle, where tender egg noodles, savory tuna, and sweet peas are enveloped in a creamy sauce flavored with condensed cream of mushroom soup. Topped with a satisfyingly crunchy breadcrumb topping, this casserole is baked to perfection, offering a comforting and satisfying meal that will have you coming back for seconds.",
      "shortDesc" : "A delicious tuna noodle featuring creamy mushroom sauce, egg noodles, peas, and a crispy breadcrumb topping.",
      "diet" : ["fa-solid fa-fish"],
      "tagName" : ["fish"]
    },    {
      "name" : "Manicotti",
      "price" : "24.95",
      "img" : "https://www.allrecipes.com/thmb/3vx-GoMA0_WNkBK6KQ7Xs8Rxo_Y=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x0:641x2)/Manicotti-19201058c06a4eb89ed6f4cc44e65bb7.jpg",
      "longDesc" : "Enjoy a beloved family dish of manicotti, where kids join in the fun of noodle stuffing. Serve it with a crispy salad and garlic bread for a delightful and comforting meal that brings everyone together.",
      "shortDesc" : "Family-favorite manicotti with kid-friendly noodle stuffing, served alongside crispy salad and garlic bread.",
      "diet" : ["fa-solid fa-leaf","fa-solid fa-egg"],
      "tagName" : ["vege", "vegan"]
    },    {
      "name" : "Spinach Quiche",
      "price" : "14.95",
      "img" : "https://www.allrecipes.com/thmb/k9JJRAPeHa6lQYunmR2sE4GzDAI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1511x0:1513x2)/7778617-1b7ac6bd01074293872e54036cd6a5e2.jpg",
      "longDesc" : "Explore the versatility of a cheesy spinach quiche recipe that adapts to your preferences by adding or removing ingredients in the filling. Enjoy the flexibility of customizing this delightful dish according to your taste, resulting in a satisfying and flavorful quiche that never disappoints.",
      "shortDesc" : "A versatile and forgiving cheesy spinach quiche recipe that allows for customizable fillings.",
      "diet" : ["fa-solid fa-egg"],
      "tagName" : ["vege"]
    },    {
      "name" : "Pastitsio",
      "price" : "14.95",
      "img" : "https://www.allrecipes.com/thmb/4cLrmkd9uz11raFFaiNDLqzo6tE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2)/2094086-2471e717d8604daf807abd168c8c1e6c.jpg",
      "longDesc" : "Enjoy the beloved Greek dish, Pastitsio, with its comforting layers of meat sauce, pasta, creamy béchamel, and cheese—a truly delicious experience that everyone adores.",
      "shortDesc" : "Greek Pastitsio—comforting and loved; meat sauce, pasta, béchamel, cheese—delicious!",
      "diet" : ["fa-solid fa-drumstick-bite"],
      "tagName" : ["meat"]
    },    {
      "name" : "Shepherd's Pie",
      "price" : "19.95",
      "img" : "https://natashaskitchen.com/wp-content/uploads/2021/12/Shepherds-Pie-5.jpg",
      "longDesc" : "Enjoy the comforting delight of shepherd's pie, featuring savory beef stew, a cheesy mashed potato topping, and cleverly hidden vegetables. This satisfying dish combines flavors and textures for a wholesome and delicious meal.",
      "shortDesc" : "Comforting shepherd's pie with savory beef stew, cheesy mashed potato topping, and hidden veggies.",
      "diet" : ["fa-solid fa-drumstick-bite"],
      "tagName" : ["meat"]
    },    {
      "name" : "Mexican Quesadilla",
      "price" : "24.95",
      "img" : "https://www.allrecipes.com/thmb/51tOVMWzlmNakaU5IEOI4Yv0nCM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/4261682-d261a57fe0d148e6837f849068f2ddc0.jpg",
      "longDesc" : "Enjoy the delicious quesadilla casserole featuring seasoned ground beef, sweet corn, beans, Cheddar cheese, and zesty green chiles. Switching to corn tortillas adds authenticity, making it a recipe worth remembering and repeating according to slapper78's recommendation. This flavorful dish is sure to satisfy and become a family favorite.",
      "shortDesc" : "Flavorful quesadilla casserole with seasoned beef, corn, beans, cheese, and green chiles—a keeper!",
      "diet" : ["fa-solid fa-egg"],
      "tagName" : ["vege"]
    }                                                        
]

export default dishes