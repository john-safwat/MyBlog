
var projects = [
    {
        "image" : "images/banners/Heimdall.png",
        'title' : 'Heimdall App',
        'description' : "Heimdall is Smart Door Lock App stands as a testament to the convergence of security, convenience, and connectivity in the realm of smart home technology. By providing users with the ability to remotely control their locks, view live streams, manage E-Keys, and communicate within the app, this application transforms the way individuals engage with their home security systems.",
        'link' : 'https://github.com/john-safwat/Heimdall',
        'downLoadLink' : 'https://github.com/john-safwat/Heimdall/releases/download/Heimdall/Heimdall.apk',

    },
    {
        "image" : "images/banners/El3b.png",
        'title' : 'El3b App',
        'description' : "El3b, the mobile app designed to provide you with the latest games news and a platform for chatting. We appreciate your usage of our app and strive to offer you an enjoyable and informative experience along with other app users.",
        'link' : 'https://github.com/john-safwat/El3b',
        'downLoadLink' : 'https://github.com/john-safwat/El3b/releases/download/El3b-V1.0.1/El3b.apk',

    },
    {
        "image" : "images/banners/Heimdall Admin Panel.png",
        'title' : 'Heimdall Admin Panel',
        'description' : "The admin panel boasts a meticulously crafted user interface, designed with clarity and ease of use in mind. Navigating the system feels intuitive, with a well-organized layout that guides users directly to the functionalities they need. No more getting lost in a labyrinth of menus – the admin panel streamlines navigation, eliminating frustration and saving valuable time.",
        'link' : 'https://github.com/john-safwat/Heimdall-Admin-Panel',
        'downLoadLink' : 'https://github.com/john-safwat/Heimdall-Admin-Panel',

    },
    {
        "image" : "images/banners/gaya store.png",
        'title' : 'Gaya Store App',
        'description' : "A Flutter e-commerce app that allows users to browse and purchase products from a variety of categories. The app features a clean and user-friendly UI, as well as a variety of features, such as product filters, product reviews, and a shopping cart. Build to demonstrate the use of flutter and (Clean Arch , MVVM ,Repository Pattern , SQLite )",
        'link' : 'https://github.com/john-safwat/Gaya-Store-App',
        'downLoadLink' : 'https://github.com/john-safwat/Gaya-Store-App/releases/download/GayaStore/Gaya.Store.apk',

    },
    {
        "image" : "images/banners/movies 2.png",
        'title' : 'Movies App',
        'description' : "A Flutter movies app that allows users to browse and watch movies from a variety of sources. Build to demonstrate the use of flutter and (Dio , MVVM , Bloc , Clean Arch)",
        'link' : 'https://github.com/john-safwat/Movies',
        'downLoadLink' : 'https://github.com/john-safwat/Movies/releases/download/Movies/movies.apk',
    },
    {
        "image" : "images/banners/chat.png",
        'title' : 'Chat App',
        'description' : "This chat app is a Flutter project that uses Firebase for authentication, data storage, and real-time communication. It is built using the Clean Architecture pattern, which separates the app's concerns into different layers. The Repository Pattern is used to manage the app's data, and the MVVM (Model-View-ViewModel) pattern is used to manage the app's UI.",
        'link' : 'https://github.com/john-safwat/Chat',
        'downLoadLink' : 'https://github.com/john-safwat/Chat/releases/download/ChatApp/chat.apk',
    },
    {
        "image" : "images/banners/movies 1.png",
        'title' : 'Movies App',
        'description' : "A Flutter movies app that allows users to browse and watch movies from a variety of sources. Build to demonstrate the use of flutter",
        'link' : 'https://github.com/john-safwat/MoviesApp',
        'downLoadLink' : 'https://github.com/john-safwat/MoviesApp/releases/download/MoviesApp/Movies.App.apk',
    },

    {
        "image" : "images/banners/todo.png",
        'title' : 'ToDo App',
        'description' : "is a sample task management flutter application built to demonstrate the use of flutter with firebase",
        'link' : 'https://github.com/john-safwat/ToDo',
        'downLoadLink' : 'https://github.com/john-safwat/ToDo/releases/download/ToDoAppv2/todo.apk',
    },
    {
        "image" : "images/banners/news.png",
        'title' : 'News App',
        'description' : "API News is JSON API For Live News and Blog Articles from the media. This Project uses the HTTP Package to connect FlutterApplication with REST API",
        'link' : 'https://github.com/john-safwat/NewsApp',
        'downLoadLink' : 'https://github.com/john-safwat/NewsApp/releases/download/NewsAppv2/news.app.apk',
    },
    {
        "image" : "images/banners/numerical.png",
        'title' : 'Numerical Analysis App',
        'description' : "About This project is a numerical analysis application built using Flutter that can be used to solve matrices and nonlinear equations",
        'link' : 'https://github.com/john-safwat/Numerical-Analysis-Project',
        'downLoadLink' : 'https://github.com/john-safwat/Numerical-Analysis-Project/releases/tag/Numerical_App',
    }
]


for(let i = 0; i<projects.length ; i++){
    document.getElementById('projects').innerHTML +=`<div class="container project"><img src="${projects[i]['image']}" alt=""><div class="content"><p class="title">${projects[i]['title']}</p><p class="description">${projects[i]['description']}</p><a href="${projects[i]['link']}" target="_blank" class="link">View Project</a><a href="${projects[i]['downLoadLink']}" target="_blank" class="downLoadLink">DownLoad Now</a></div></div>`;
}


var links = [
    {
        'link' :"https://github.com/john-safwat" ,
        'icon' :"images/icons/github.png"
    },
    {
        'link' :"https://www.linkedin.com/in/john-safwat-b3645427a/" ,
        'icon' :"images/icons/linkedin.png"
    },
    {
        'link' :"https://www.behance.net/johnsafwat" ,
        'icon' :"images/icons/behance.png"
    },
    {
        'link' :"mailto:johnsafwat362@gmail.com" ,
        'icon' :"images/icons/google.png"
    },
    {
        'link' :"https://www.instagram.com/john_s_911/" ,
        'icon' :"images/icons/instagram.png"
    },
    {
        'link' :"https://discordapp.com/users/787110639083978833 " ,
        'icon' :"images/icons/discord.png"
    },
    {
        'link' :"https://wa.me/01204984211" ,
        'icon' :"images/icons/whatsapp.png"
    },
    {
        'link' :"https://www.facebook.com/john.safwat.77" ,
        'icon' :"images/icons/facebook.png"
    },
];

for(let i = 0; i<links.length ; i++){
    document.getElementById('icons').innerHTML +=`<a href="${links[i]['link']}" target="_blanc"><img src="${links[i]['icon']}" alt=""></a>`;

}
