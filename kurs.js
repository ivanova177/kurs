
db.Library.drop()
db.Books.drop()
db.Readers.drop()

let date=(date)=>{
    let year=date.split(".")[2]
    let month=date.split(".")[1]
    let day=date.split(".")[0]
    return new Date(year+"-"+month+"-" + day+ "T16:00:00Z");
}
//-----------------------LIBRATY-----------------------------------------------------------------------------
let Library1 = db.Library.insertOne({ 
    name: "Library1", 
    telephone: 52584,
    emps:[
        {
            _id : ObjectId(),
            name: "Quick-To-See Mark",
            place_of_work: "subscription",
            num_room : ObjectId()          
        },
        {
            _id : ObjectId(),
            name: "Ropeburn Audry",
            place_of_work:"reading room",
            num_room : ObjectId()        
        },
        { 
            _id : ObjectId(),
            name: "Urguhart Molly",
            place_of_work: "subscription",
            num_room : ObjectId()
        }
    ]
})
let Library2 = db.Library.insertOne({ 
    name: "Library2", 
    telephone: 52967,
    emps:[
        {
            _id : ObjectId(),
            name: "Velasquez Carmen",
            place_of_work: "subscription",
            num_room : ObjectId()
        },
        {
            _id : ObjectId(),
            name: "Ngao Tell",
            place_of_work:"reading room",
            num_room : ObjectId()         
        },
        { 
            _id : ObjectId(),
            name: "Nagayamn Midori",
            place_of_work: "subscription",
            num_room : ObjectId()          
        }
    ]
})
let Library3 = db.Library.insertOne({ 
    name: "Library3", 
    telephone: 57689,
    emps:[
        {
            _id : ObjectId(),
            name: "Menchu Robertn",
            place_of_work: "subscription",
            num_room : ObjectId()
        },
        {
            _id : ObjectId(),
            name: "Biri Ben",
            place_of_work:"reading room",
            num_room : ObjectId()
        }
    ]
})
let Library4 = db.Library.insertOne({ 
    name: "Library4", 
    telephone: 50022,
    emps:[
        {
            _id : ObjectId(),
            name: "Catchpole Antoinette",
            place_of_work: "subscription",
            num_room : ObjectId()
        },
        {
            _id : ObjectId(),
            name: "Havel Marta",
            place_of_work:"reading room",
            num_room : ObjectId()
        }
    ]
})
let Library5 = db.Library.insertOne({ 
    name: "Library5", 
    telephone: 53555,
    emps:[
        {
            _id : ObjectId(),
            name: "Magee Colin",
            place_of_work: "subscription",
            num_room : ObjectId()
        },
        {
            _id : ObjectId(),
            name: "Nagayamn Midori",
            place_of_work:"reading room",
            num_room : ObjectId()
        }
    ]
})
//----------------------BOOKS-------------------------------------------------------------------------------------
let book_1 = db.Books.insertOne({
    title:"The Green Mile",
    first_name:"Stephen",
    last_name:"King",
    instances:[
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("12.02.2005"),
            date_of_debiting:date("12.02.2025"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:1,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("21.03.2004"),
            date_of_debiting:date("21.03.2024"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:3,
            status:"issued",
        },
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("12.07.2002"),
            date_of_debiting:date("12.07.2022"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"not issued"
        },
        //новая
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("13.02.2005"),
            date_of_debiting:date("13.02.2025"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:1,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("18.09.2004"),
            date_of_debiting:date("18.09.2024"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"issued"
        }
    ]
})
let journal_1 = db.Books.insertOne({
    title:"Driving",
    first_name:"Mikhail",
    last_name:"Koltsov",
    instances:[
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("23.02.2020"),
            date_of_debiting:date("23.02.2025"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[2].num_room,
            place:"subscription",
            row:2,
            shelf:2,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("10.03.2021"),
            date_of_debiting:date("10.03.2026"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:3,
            status:"issued",
        },
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("12.07.2002"),
            date_of_debiting:date("12.07.2022"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:2,
            shelf:2,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("30.05.2005"),
            date_of_debiting:date("30.05.2025"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:2,
            shelf:2,
            status:"issued"
        }

    ]
})
let coll_of_poems_1 = db.Books.insertOne({
    type:"collection of poems",
    title:"Borodino. Poems and poems",
    first_name:"Mihail",
    last_name:"Lermontov",
    category:"poems",
    instances:[
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("08.08.1999"),
            date_of_debiting:date("08.08.2029"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("09.10.2002"),
            date_of_debiting:date("09.10.2032"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:3,
            status:"not issued",
        },
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("23.06.2005"),
            date_of_debiting:date("23.06.2035"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:1,
            status:"issued"
        },
        {//новая
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("25.07.2003"),
            date_of_debiting:date("25.07.2033"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"issued"
        },

    ]
})
let coll_of_art_1 = db.Books.insertOne({
    title:"In this fairy tale...",
    first_name:"Leo",
    last_name:"Letyagin",
    instances:[
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("17.07.2014"),
            date_of_debiting:date("17.7.2024"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[0].num_room,
            place:"subscription",
            row:2,
            shelf:1,
            status:"not issued"
        },
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("21.03.2004"),
            date_of_debiting:date("21.03.2024"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:3,
            status:"issued",
        },
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("30.05.2015"),
            date_of_debiting:date("30.05.2025"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[2].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"not issued"
        },//новая
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("01.07.2017"),
            date_of_debiting:date("01.07.2027"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[2].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"not issued"
        }

    ]
})
let report_1 = db.Books.insertOne({
    title:"Cultural studies",
    first_name:"Jack",
    last_name:"Lui",
    instances:[
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("12.02.2016"),
            date_of_debiting:date("12.02.2031"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("11.11.2018"),
            date_of_debiting:date("11.11.2023"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[1].num_room,
            place:"reading room",
            row:3,
            shelf:2,
            status:"not issued",
        },
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("12.07.2002"),
            date_of_debiting:date("12.07.2022"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[2].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("24.06.2017"),
            date_of_debiting:date("24.06.2031"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"issued"
        },

    ]
})
let book_2 = db.Books.insertOne({
    title:"Servants",
    first_name:"Catherine",
    last_name:"Stockett",
    instances:[
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("27.12.2015"),
            date_of_debiting:date("27.12.2025"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:1,
            status:"not issued"
        },
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("14.04.2014"),
            date_of_debiting:date("14.04.2024"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:2,
            status:"issued",
        },
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("15.04.2014"),
            date_of_debiting:date("15.04.2024"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"not issued"
        },//новая
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("06.12.2017"),
            date_of_debiting:date("06.12.2027"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("29.01.2016"),
            date_of_debiting:date("29.01.2026"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:1,
            status:"not issued"
        },

    ]
})
let journal_2 = db.Books.insertOne({
    title:"Maxim",
    first_name:"Alexander",
    last_name:"Malenkov",
    instances:[
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("20.12.2012"),
            date_of_debiting:date("20.12.2022"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:2,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("18.03.2017"),
            date_of_debiting:date("18.03.2027"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[1].num_room,
            place:"reading room",
            row:1,
            shelf:3,
            status:"issued",
        },
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("06.08.2021"),
            date_of_debiting:date("06.08.2031"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:1,
            status:"issued"
        },//новый
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("30.08.2013"),
            date_of_debiting:date("30.08.2023"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:2,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type: "journals",
            category:"news",
            date_of_receipt:date("16.05.2018"),
            date_of_debiting:date("16.05.2028"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[1].num_room,
            place:"reading room",
            row:1,
            shelf:3,
            status:"issued",
        }

    ]
})
let coll_of_poems_2 = db.Books.insertOne({
    title:"Poems and poems",
    first_name:"Vladimir",
    last_name:"Mayakovsky",
    instances:[
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("19.09.1993"),
            date_of_debiting:date("19.09.2023"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[2].num_room,
            place:"subscription",
            row:2,
            shelf:1,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("22.02.2000"),
            date_of_debiting:date("22.02.2030"),
            read_room:db.Library.findOne({_id: Library1.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:3,
            status:"issued",
        },
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("12.07.2002"),
            date_of_debiting:date("12.07.2032"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[0].num_room,
            place:"subscription",
            row:2,
            shelf:2,
            status:"not issued"
        },
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("12.07.2002"),
            date_of_debiting:date("12.07.2032"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:2,
            status:"not issued"
        },//новая
        {
            _id : ObjectId(),
            type:"collection of poems",
            category:"poems",
            date_of_receipt:date("15.04.2004"),
            date_of_debiting:date("15.04.2034"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:2,
            status:"issued"
        }

    ]
})
let coll_of_art_2 = db.Books.insertOne({
    title:"Artificial intelligence, analytics and new technologies",
    first_name:"Harvard Business Review",
    first_name:"Molly",
    last_name:"Urguhart",
    instances:[
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("29.12.2017"),
            date_of_debiting:date("29.12.2027"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[2].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("04.07.2018"),
            date_of_debiting:date("04.07.2028"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[1].num_room,
            place:"reading room",
            row:3,
            shelf:2,
            status:"not issued",
        },
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("13.11.2019"),
            date_of_debiting:date("13.11.2019"),
            read_room:db.Library.findOne({_id: Library3.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type:"collection of articles",
            category:"articles",
            date_of_receipt:date("24.02.2014"),
            date_of_debiting:date("24.02.2024"),
            read_room:db.Library.findOne({_id: Library2.insertedId}).emps[2].num_room,
            place:"subscription",
            row:3,
            shelf:3,
            status:"issued"
        }

    ]
})
let report_2 = db.Books.insertOne({
    title:"Analysis of the production program",
    first_name:"Otto",
    last_name:"Frisch",
    instances:[
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("07.03.2015"),
            date_of_debiting:date("07.03.2030"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[0].num_room,
            place:"subscription",
            row:2,
            shelf:3,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("07.03.2015"),
            date_of_debiting:date("07.03.2030"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[1].num_room,
            place:"reading room",
            row:3,
            shelf:2,
            status:"not issued",
        },
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("12.05.2016"),
            date_of_debiting:date("12.05.2031"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:3,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"reports",
            category:"reports",
            date_of_receipt:date("12.05.2016"),
            date_of_debiting:date("12.05.2031"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[1].num_room,
            place:"reading room",
            row:1,
            shelf:3,
            status:"not issued"
        }

    ]
})
let book_3 = db.Books.insertOne({
    title:"The Godfather",
    first_name:"Mario",
    last_name:"Ruzo",
    instances:[
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("24.05.2014"),
            date_of_debiting:date("24.05.2034"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[0].num_room,
            place:"subscription",
            row:3,
            shelf:1,
            status:"issued"
        },
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("05.06.2004"),
            date_of_debiting:date("05.06.2024"),
            read_room:db.Library.findOne({_id: Library5.insertedId}).emps[1].num_room,
            place:"reading room",
            row:2,
            shelf:1,
            status:"not issued",
        },
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("21.09.2002"),
            date_of_debiting:date("21.09.2022"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:2,
            status:"issued"
        },//новая
        {
            _id : ObjectId(),
            type:"books",
            category:"textbooks",
            date_of_receipt:date("21.09.2002"),
            date_of_debiting:date("21.09.2022"),
            read_room:db.Library.findOne({_id: Library4.insertedId}).emps[0].num_room,
            place:"subscription",
            row:1,
            shelf:2,
            status:"issued"
        }
    ]
})



//----------------------READERS-------------------------------------------------------------------------------------

let Reader1 = db.Readers.insertOne({
    first_name:"Olga",
    last_name:"Ivanova",
    category:"student",
    institution:"KemGU",
    faculty:"IT",
    course:3,
    group:"PI-203",
    phone: 89234560845,
    library:db.Library.findOne({_id: Library1.insertedId})._id,
    list_of_literature:[{
        book_name: db.Books.findOne({_id: book_1.insertedId}).title,
        author_name:db.Books.findOne({_id: book_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_1.insertedId}).instances[0],
        start_date: date("22.04.2021"),
        back_date: date("14.01.2022"),//когда сдал
        end_date:date("22.04.2022") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: report_1.insertedId}).title,
        author_name:db.Books.findOne({_id: report_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: report_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: report_1.insertedId}).instances[0],
        start_date: date("22.04.2021"),
        back_date: null,//когда сдал
        end_date:date("22.04.2022") //когда надо сдать
    }]
}) 
let Reader2 = db.Readers.insertOne({
    first_name:"Jack",
    last_name:"Todd",
    category:"schoolchild",
    name_school:"School №26",
    class:3,
    character_cl:"A",
    library:db.Library.findOne({_id: Library2.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: journal_1.insertedId}).title,
        author_name:db.Books.findOne({_id: journal_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: journal_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id:journal_1.insertedId}).instances[0],
        start_date: date("15.07.2021"),
        back_date: null,//когда сдал
        end_date:date("15.07.2022") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: report_1.insertedId}).title,
        author_name:db.Books.findOne({_id: report_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: report_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: report_1.insertedId}).instances[2],
        start_date: date("30.05.2018"),
        back_date: null,//когда сдал
        end_date:date("30.05.2019") //когда надо сдать
    }]
})
let Reader3 = db.Readers.insertOne({
    first_name:"Barbara",
    last_name:"Chase",
    category:"residents",
    place_of_work: "housewife",
    phone : 89558932345,
    address: "st.Stroiteley 10/85",
    library:db.Library.findOne({_id: Library3.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: journal_1.insertedId}).title,
        author_name:db.Books.findOne({_id: journal_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: journal_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id:journal_1.insertedId}).instances[2],
        start_date: date("11.06.2005"),
        back_date: date("17.03.2006"),//когда сдал
        end_date:date("11.06.2006") //когда надо сдать

    }]
})   
let Reader4 = db.Readers.insertOne({
    first_name:"Jake",
    last_name:"Nairn",
    category:"student",
    institution:"KemGU",
    faculty:"Journalism",
    course:5,
    group:"X-171",
    phone: 83428476556,
    library:db.Library.findOne({_id: Library4.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: coll_of_poems_1.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_poems_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_poems_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id:coll_of_poems_1.insertedId}).instances[2],
        start_date: date("17.07.2008"),
        back_date: date("04.12.2008"),//когда сдал
        end_date:date("17.07.2009") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: report_2.insertedId}).title,
        author_name:db.Books.findOne({_id: report_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: report_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id:report_2.insertedId}).instances[0],
        start_date: date("14.06.2017"),
        back_date: date("30.08.2017"),//когда сдал
        end_date:date("14.06.2018") //когда надо сдать
    }]
})   
let Reader5 = db.Readers.insertOne({
    first_name:"Margaret",
    last_name:"Price",
    category:"schoolchild",
    name_school:"School №2",
    class:9,
    character_cl:"B" ,
    library:db.Library.findOne({_id: Library5.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: journal_2.insertedId}).title,
        author_name:db.Books.findOne({_id: journal_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: journal_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id:journal_2.insertedId}).instances[0],
        start_date: date("25.08.2013"),
        back_date:date("23.01.2014"),//когда сдал
        end_date:date("25.08.2014") //когда надо сдать
    },{
        book_name:db.Books.findOne({_id: report_2.insertedId}).title,
        author_name:db.Books.findOne({_id: report_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: report_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id: report_2.insertedId}).instances[2],
        start_date: date("07.03.2020"),
        back_date: date("28.09.2020"),//когда сдал
        end_date:date("07.03.2021") //когда надо сдать
    }]
}) 
let Reader6 = db.Readers.insertOne({
    first_name:"Emrys",
    last_name:"Sanders",
    category:"residents",
    place_of_work: "Stroyservies/engineer",
    phone : 89867654390,
    address: "st.50 let goroda 39/105",
    library:db.Library.findOne({_id: Library1.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: coll_of_poems_2.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_poems_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_poems_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: coll_of_poems_2.insertedId}).instances[0],
        start_date: date("14.07.2005"),
        back_date: date("14.03.2006"),//когда сдал
        end_date:date("14.07.2006") //когда надо сдать
    }]
})  
let Reader7 = db.Readers.insertOne({
    first_name:"Harry",
    last_name:"Phelps",
    category:"student",
    institution:"KemGU",
    faculty:"IT",
    course:null,
    group:"PI-193",
    phone: 89894877654,
    library:null,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: coll_of_art_2.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_art_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_art_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id: coll_of_art_2.insertedId}).instances[0],
        start_date: date("12.11.2018"),
        back_date: null,//когда сдал
        end_date:date("12.11.2019") //когда надо сдать

    }]
}) 
let Reader8 = db.Readers.insertOne({
    first_name:"Paul",
    last_name:"Campbell",
    category:"schoolchild",
    name_school:"School №9",
    class:10,
    character_cl:"A",   
    library:db.Library.findOne({_id: Library3.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: coll_of_art_2.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_art_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_art_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id: coll_of_art_2.insertedId}).instances[2],
        start_date: date("24.10.2020"),
        back_date: date("02.03.2021"),//когда сдал
        end_date:date("24.10.2021") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: coll_of_poems_1.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_poems_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_poems_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: coll_of_poems_1.insertedId}).instances[0],
        start_date: date("14.12.2017"),
        back_date: date("08.07.2018"),//когда сдал
        end_date:date("14.12.2018") //когда надо сдать
    }]
})
let Reader9 = db.Readers.insertOne({
    first_name:"Ilya",
    last_name:"Duvanov",
    category:"residents",
    address: "st.Vesennya 51/1",
    place_of_work: "School №9/teacher",
    phone: 89678906578,
    library:db.Library.findOne({_id: Library4.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: book_3.insertedId}).title,
        author_name:db.Books.findOne({_id: book_3.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_3.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_3.insertedId}).instances[2],
        start_date: date("01.04.2007"),
        back_date: date("28.09.2007"),//когда сдал
        end_date:date("01.04.2008") //когда надо сдать

    }]
})
let Reader10 = db.Readers.insertOne({
    first_name:"Lydia",
    last_name:"Allison",
    category:"student",
    institution:"KuzGTU",
    faculty:"History",
    course:1,
    group:"H-201",
    phone: 89234567255,
    library:db.Library.findOne({_id: Library5.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: book_3.insertedId}).title,
        author_name:db.Books.findOne({_id: book_3.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_3.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_3.insertedId}).instances[0],
        start_date: date("01.04.2007"),
        back_date: date("28.09.2007"),//когда сдал
        end_date:date("01.04.2008") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: journal_2.insertedId}).title,
        author_name:db.Books.findOne({_id: journal_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: journal_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id:journal_2.insertedId}).instances[2],
        start_date: date("05.05.2022"),
        back_date:null,//когда сдал
        end_date:date("05.05.2023") //когда надо сдать
    }]
})
let Reader11 = db.Readers.insertOne({
    first_name:"Eileen",
    last_name:"Weaver",
    category:"researcher",
    direction:"chemistry",
    phone: 89234690845,
    library:db.Library.findOne({_id: Library1.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: book_1.insertedId}).title,
        author_name:db.Books.findOne({_id: book_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_1.insertedId}).instances[3],
        start_date: date("02.04.2007"),
        back_date: date("28.09.2007"),//когда сдал
        end_date:date("02.04.2008") //когда надо сдать

    }]
})
let Reader12 = db.Readers.insertOne({
    first_name:"John",
    last_name:"Todd",
    category:"researcher",
    direction:"mathematics",
    phone: 8923525487,
    library:db.Library.findOne({_id: Library2.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: book_1.insertedId}).title,
        author_name:db.Books.findOne({_id: book_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_1.insertedId}).instances[4],
        start_date: date("22.08.2010"),
        back_date:null,//когда сдал
        end_date:date("22.08.2011") //когда надо сдать

    }]
})
let Reader13 = db.Readers.insertOne({
    first_name:"Robert",
    last_name:"Barber",
    category:"researcher",
    direction:"informatics",
    phone: 89505899023,
    library:db.Library.findOne({_id: Library3.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: journal_1.insertedId}).title,
        author_name:db.Books.findOne({_id: journal_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: journal_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: journal_1.insertedId}).instances[3],
        start_date: date("08.07.2013"),
        back_date: date("20.05.2014"),//когда сдал
        end_date:date("08.07.2014") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: coll_of_poems_1.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_poems_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_poems_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: coll_of_poems_1.insertedId}).instances[3],
        start_date: date("12.09.2020"),
        back_date: date("26.06.2021"),//когда сдал
        end_date:date("12.09.2021") //когда надо сдать
    }]
})
let Reader14 = db.Readers.insertOne({
    first_name:"Betty",
    last_name:"Norton",
    category:"teacher",
    name_school:"School №9",
    phone: 89516708923,
    library:db.Library.findOne({_id: Library1.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: report_1.insertedId}).title,
        author_name:db.Books.findOne({_id: report_1.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: report_1.insertedId}).last_name,
        book_info:db.Books.findOne({_id: report_1.insertedId}).instances[3],
        start_date: date("21.09.2019"),
        back_date: date("24.03.2020"),//когда сдал
        end_date:date("21.09.2020") //когда надо сдать

    }]
})
let Reader15 = db.Readers.insertOne({
    first_name:"Lora",
    last_name:"Ryan",
    category:"teacher",
    institution:"KeGU",
    phone: 89233248372,
    library:db.Library.findOne({_id: Library5.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: journal_2.insertedId}).title,
        author_name:db.Books.findOne({_id: journal_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: journal_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id: journal_2.insertedId}).instances[3],
        start_date: date("07.11.2015"),
        back_date: date("14.02.2016"),//когда сдал
        end_date:date("07.11.2016") //когда надо сдать

    }]
})
let Reader16 = db.Readers.insertOne({
    first_name:"Charles",
    last_name:"Sparks",
    category:"retiree",
    phone: 89297459021,
    address: "st.Stroiteley 4/105",
    library:db.Library.findOne({_id: Library4.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: book_2.insertedId}).title,
        author_name:db.Books.findOne({_id: book_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_2.insertedId}).instances[3],
        start_date: date("26.04.2018"),
        back_date: date("21.07.2018"),//когда сдал
        end_date:date("26.04.2019") //когда надо сдать

    },{
        book_name:db.Books.findOne({_id: book_3.insertedId}).title,
        author_name:db.Books.findOne({_id: book_3.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: book_3.insertedId}).last_name,
        book_info:db.Books.findOne({_id: book_3.insertedId}).instances[3],
        start_date: date("13.07.2014"),
        back_date: date("19.08.2014"),//когда сдал
        end_date:date("13.07.2015") //когда надо сдать
    }]
})
let Reader17 = db.Readers.insertOne({
    first_name:"Basil",
    last_name:"Harris",
    category:"retiree",
    phone: 89999567220,
    address: "st.Vesennya 15/3",
    library:db.Library.findOne({_id: Library2.insertedId})._id,
    list_of_literature:[{
        book_name:db.Books.findOne({_id: coll_of_art_2.insertedId}).title,
        author_name:db.Books.findOne({_id: coll_of_art_2.insertedId}).first_name,
        author_surname:db.Books.findOne({_id: coll_of_art_2.insertedId}).last_name,
        book_info:db.Books.findOne({_id: coll_of_art_2.insertedId}).instances[3],
        start_date: date("27.12.2017"),
        back_date: date("28.09.2018"),//когда сдал
        end_date:date("27.12.2018") //когда надо сдать

    }]
})


