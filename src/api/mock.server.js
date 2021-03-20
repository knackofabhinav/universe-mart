import {createServer} from "miragejs";
import faker from "faker";

export function setupMockServer() {
    createServer({
        routes() {
            this.namespace = 'api';

            this.get("/productlist", () => {
                let productlist = [
                    {
                        id: 1,
                        name: "Sapiens: A Brief History of Humankind",
                        price: 395,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/41yu2qXhXXL._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085"
                    }, {
                        id: 2,
                        name: "A Man Called Ove: Brighten your day",
                        price: 280,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/519L6FBdlXL._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Man-Called-Ove-life-affirming-bestseller/dp/1444775812"
                    }, {
                        id: 3,
                        name: "The Importance of Being Earnest",
                        price: 89,
                        image: "https://m.media-amazon.com/images/I/41YXH3S5wrL._AC_UY218_.jpg",
                        url: "https://www.amazon.in/Importance-Being-Earnest-Oscar-Wilde/dp/8175992859"
                    }, {
                        id: 4,
                        name: "The Picture of Dorian Gray",
                        price: 129,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/51iHYhRSmyL._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Picture-Dorian-Gray-Oscar-Wilde/dp/8175993081"
                    }, {
                        id: 5,
                        name: "How to Think Like a Roman Emperor: The Stoic Philosophy of Marcus Aurelius",
                        price: 1630,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41xhHZ4ZSWL._SX322_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/How-Think-Like-Roman-Emperor/dp/1250196620"
                    }, {
                        id: 6,
                        name: "Stillness is the Key: An Ancient Strategy for Modern Life",
                        price: 333,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41IdD3F694L._SX365_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Stillness-Key-Ancient-Strategy-Modern/dp/1788162056"
                    }, {
                        id: 7,
                        name: "The Brain: The Story of You",
                        price: 300,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/41s0QwD7u6L._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Brain-David-Eagleman/dp/1782116613"
                    }, {
                        id: 8,
                        name: "Beyond Order: 12 More Rules for Life",
                        price: 631,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41Bhl964Z3L._SX325_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Untitled-Book-Jordan-B-Peterson/dp/024140763X"
                    }, {
                        id: 9,
                        name: "Beyond Good & Evil",
                        price: 113,
                        image: "https://m.media-amazon.com/images/I/71KSA4fswNL._AC_UY218_.jpg",
                        url: "https://www.amazon.in/Beyond-Good-Evil-Friedrich-Nietzsche/dp/9350334984"
                    }, {
                        id: 10,
                        name: "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
                        price: 1950,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Eloquent-JavaScript-3rd-Introduction-Programming/dp/159327" +
                                "9507"
                    }, {
                        id: 11,
                        name: "A Gentleman in Moscow: The worldwide bestseller",
                        price: 300,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51k+lXZyJ6L._SY344_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Gentleman-Moscow-Amor-Towles/dp/0099558785"
                    }, {
                        id: 12,
                        name: "The Origin of Species",
                        price: 159,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/51PNzwsl30L._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Origin-Species-Charles-Darwin/dp/8172344880"
                    }, {
                        id: 13,
                        name: "The Theory of Everything: The Origin and Fate of the Universe",
                        price: 156,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Theory-Everything-Stephen-Hawking/dp/8179925919"
                    }, {
                        id: 14,
                        name: "Factfulness: Ten Reasons We're Wrong About The World - And Why Things Are Better" +
                                " Than You Think",
                        price: 315,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51DhvV6a3mL._SX321_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Factfulness-Reasons-Wrong-Things-Better/dp/1473637465"
                    }, {
                        id: 15,
                        name: "Range: How Generalists Triumph in a Specialized World",
                        price: 354,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41TONZPsjTL._SX327_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Range-Key-Success-Performance-Education/dp/1509843523"
                    }
                ];
                return {productlist}
            })
        }
    });
}
