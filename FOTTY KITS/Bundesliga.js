//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let items =[
    {id: 1, title: "Home 24/25 Kit ", year: 2024, price: 40.00, category: 1, image_url: "BUNDASLIGA/BAY1.jpg", description: "Represent your team with pride in the latest home kit, featuring the iconic colors and design that showcase your club’s heritage. Made with breathable, high-quality fabric, this kit is perfect for both match day and casual wear, ensuring you stay comfortable while supporting your favorite team"}, 
    {id: 2, title: "Away 24/25 Kit", year: 2024, price: 20.00, category: 1, image_url: "BUNDASLIGA/BAY2.jpg", description: "Stand out with the bold design of the away kit, crafted to reflect your team’s spirit on the road. Featuring a sleek, modern look and lightweight, breathable fabric, this kit combines comfort and style, making it perfect for showing your support wherever the game takes you."}, 
    {id: 3, title: "Third 24/25 Kit", year: 2014, price: 25.50, category: 1, image_url: "BUNDASLIGA/BAY3.jpg", description: "Make a statement with the striking third kit, designed to turn heads with its unique colors and pattern. Crafted from high-performance, breathable fabric, this kit blends innovation and comfort, giving you a fresh way to support your team in any match or casual setting."}, 
    {id: 4, title: "Home 24/25 Kit", year: 2024, price: 40.00, category: 2, image_url: "BUNDASLIGA/DOT1.jpg", description: "Represent your team with pride in the latest home kit, featuring the iconic colors and design that showcase your club’s heritage. Made with breathable, high-quality fabric, this kit is perfect for both match day and casual wear, ensuring you stay comfortable while supporting your favorite team"}, 
    {id: 5, title: "Away 24/25 Kit", year: 2023, price: 20.00, category: 2, image_url: "BUNDASLIGA/DOT2.jpg", description: "Stand out with the bold design of the away kit, crafted to reflect your team’s spirit on the road. Featuring a sleek, modern look and lightweight, breathable fabric, this kit combines comfort and style, making it perfect for showing your support wherever the game takes you."}, 
    {id: 6, title: "Third 24/25 Kit", year: 2019, price: 25.50, category: 2, image_url: "BUNDASLIGA/DOT3.jpg", description: "Make a statement with the striking third kit, designed to turn heads with its unique colors and pattern. Crafted from high-performance, breathable fabric, this kit blends innovation and comfort, giving you a fresh way to support your team in any match or casual setting."}, 
    {id: 7, title: "Home 24/25 Kit", year: 2024, price: 40.00, category: 3, image_url: "BUNDASLIGA/RB1.jpg", description: "Represent your team with pride in the latest home kit, featuring the iconic colors and design that showcase your club’s heritage. Made with breathable, high-quality fabric, this kit is perfect for both match day and casual wear, ensuring you stay comfortable while supporting your favorite team"}, 
    {id: 8, title: "Away 24/25 Kit", year: 2023, price: 20.00, category: 3, image_url: "BUNDASLIGA/RB2.jpg", description: "Stand out with the bold design of the away kit, crafted to reflect your team’s spirit on the road. Featuring a sleek, modern look and lightweight, breathable fabric, this kit combines comfort and style, making it perfect for showing your support wherever the game takes you."}, 
    {id: 9, title: "Third 24/25 Kit", year: 2000, price: 25.50, category: 3, image_url: "BUNDASLIGA/RB3.jpg", description: "Make a statement with the striking third kit, designed to turn heads with its unique colors and pattern. Crafted from high-performance, breathable fabric, this kit blends innovation and comfort, giving you a fresh way to support your team in any match or casual setting."},
    {id: 10, title: "Home 24/25 Kit", year: 2024, price: 40.00, category: 4, image_url: "BUNDASLIGA/WF1.jpg", description: "Represent your team with pride in the latest home kit, featuring the iconic colors and design that showcase your club’s heritage. Made with breathable, high-quality fabric, this kit is perfect for both match day and casual wear, ensuring you stay comfortable while supporting your favorite team."},
    {id: 11, title: "Away 24/25 Kit", year: 2010, price: 20.00, category: 4, image_url: "BUNDASLIGA/WF2.jpg", description: "Stand out with the bold design of the away kit, crafted to reflect your team’s spirit on the road. Featuring a sleek, modern look and lightweight, breathable fabric, this kit combines comfort and style, making it perfect for showing your support wherever the game takes you."},
    {id: 12, title: "Third 24/25 Kit", year: 2023, price: 25.50, category: 4, image_url: "BUNDASLIGA/WF3.jpg", description: "Make a statement with the striking third kit, designed to turn heads with its unique colors and pattern. Crafted from high-performance, breathable fabric, this kit blends innovation and comfort, giving you a fresh way to support your team in any match or casual setting."}
    
];

//Normally data is stored in DB, when app sends a request to DB, it return this array of data
let categories = [ {id: 1, category: "FC Bayern Munich"},
	{id: 2, category: "Borussia Dortmund"},
	{id: 3, category: "RB Leipzig"},
	{id: 4, category: "VfL Wolfsburg"}
];
        
//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let votes =[{id: 1, like: 1345, dislike: 10},
    {id: 2, like: 5432, dislike: 11},
    {id: 3, like: 7895, dislike: 15},
    {id: 4, like: 9287, dislike: 3},
    {id: 5, like: 9978, dislike: 2},
    {id: 6, like: 19002, dislike: 0},
    {id: 7, like: 2020, dislike: 16},
    {id: 8, like: 3241, dislike: 12},
    {id: 9, like: 2029, dislike: 10},
    {id: 10, like: 9109, dislike: 18},
    {id: 11, like: 10982, dislike: 23},
    {id: 12, like: 7860, dislike: 12},
    {id: 13, like: 8965, dislike: 21},
    {id: 14, like: 7836, dislike: 8},
    {id: 15, like: 1563, dislike: 4},
    {id: 16, like: 8973, dislike: 1}
];

//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let comments = [
    {id: 1, comments: [{user: "Messi", comment:"Great football kit"}, {user: "Terrence", comment:"Not bad"}, {user: "Naish", comment:"Recommended kit"}]},
    {id: 2, comments: [{user: "Cameron", comment:"Amazing quality kit"}, {user: "Naish", comment:"Very stylish kit"}, {user: "Romaine", comment:"Excellent design"}]},
    {id: 3, comments: [{user: "Victor", comment:"Comfortable kit"}, {user: "Messi", comment:"Awesome football kit"}, {user: "Naish", comment:"Highly recommended"}]},
    {id: 4, comments: [{user: "Cameron", comment:"Top notch football kit"}]},
    {id: 5, comments: [{user: "Terrence", comment:"Great fit and feel"}, {user: "Naish", comment:"Recommended for fans"}]},
    {id: 6, comments: [{user: "Romaine", comment:"Best football kit I’ve owned"}]},
    {id: 7, comments: [{user: "Terrence", comment:"Must have for any football fan"}, {user: "Naish", comment:"Highly recommended kit"}]},
    {id: 8, comments: [{user: "Naish", comment:"Very stylish and comfortable"}]},
    {id: 9, comments: [{user: "Victor", comment:"Quality material, good kit"}]},
    {id: 10, comments: [{user: "Naish", comment:"Great kit, recommended to all fans"}, {user: "Romaine", comment:"Excellent and durable"}]},
    {id: 11, comments: [{user: "Victor", comment:"Good value for money"}, {user: "Terrence", comment:"Nice fit, not bad"}, {user: "Naish", comment:"Top recommendation"}]},
    {id: 12, comments: [{user: "Naish", comment:"Stylish and very comfortable"}, {user: "Romaine", comment:"Fantastic design, great quality"}]},
    {id: 13, comments: [{user: "Victor", comment:"Love the material and design"}, {user: "Terrence", comment:"Good quality, not bad"}, {user: "Naish", comment:"Highly recommend to any fan"}]},
    {id: 14, comments: [{user: "Naish", comment:"Great kit, feels comfortable"}, {user: "Romaine", comment:"Excellent craftsmanship"}, {user: "Cameron", comment:"High quality, very satisfied"}]},
    {id: 15, comments: [{user: "Victor", comment:"Great design, comfortable wear"}, {user: "Terrence", comment:"Not bad, fits well"}, {user: "Naish", comment:"Highly recommended for fans"}]},
    {id: 16, comments: [{user: "Romaine", comment:"Amazing fit, excellent design"}, {user: "Cameron", comment:"Top quality football kit"}, {user: "Naish", comment:"Stylish and durable"}]},
];
