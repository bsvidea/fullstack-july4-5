const tamilPlaylist = [
  { id: 1, title: "Aasa Kooda", artist: "Sai Abhyankkar, Sai Smriti", album: "Think Indie", duration: "03:42" },
  { id: 2, title: "Hey Minnale", artist: "Haricharan, Shweta Mohan", album: "Amaran", duration: "03:55" },
  { id: 3, title: "Manasilaayo", artist: "Anirudh Ravichander, Malaysia Vasudevan", album: "Vettaiyan", duration: "03:15" },
  { id: 4, title: "Naa Ready", artist: "Thalapathy Vijay, Anirudh Ravichander", album: "Leo", duration: "04:05" },
  { id: 5, title: "Muththa Mazhai", artist: "Dhee", album: "Thug Life", duration: "04:06" },
  { id: 6, title: "Aga Naga", artist: "Shakthisree Gopalan", album: "Ponniyin Selvan - Part 2", duration: "04:12" },
  { id: 7, title: "Arabic Kuthu", artist: "Anirudh Ravichander, Jonita Gandhi", album: "Beast", duration: "04:39" },
  { id: 8, title: "Vaseegara", artist: "Bombay Jayashri", album: "Minnale", duration: "05:01" },
  { id: 9, title: "Munbe Vaa", artist: "Shreya Ghoshal, Naresh Iyer", album: "Sillunu Oru Kaadhal", duration: "05:57" },
  { id: 10, title: "New York Nagaram", artist: "A.R. Rahman", album: "Sillunu Oru Kaadhal", duration: "06:17" },
  { id: 11, title: "Enjoy Enjaami", artist: "Dhee, Arivu", album: "Enjoy Enjaami (Single)", duration: "04:39" },
  { id: 12, title: "Maruvaarthai", artist: "Sid Sriram", album: "Enai Noki Paayum Thota", duration: "05:55" },
  { id: 13, title: "Rowdy Baby", artist: "Dhanush, Dhee", album: "Maari 2", duration: "04:43" },
  { id: 14, title: "Kanjaapoovu Kannala", artist: "Sid Sriram", album: "Viruman", duration: "03:32" },
  { id: 15, title: "Naan Pizhai", artist: "Anirudh Ravichander, Ravi G, Shashaa Tirupati", album: "Kaathuvaakula Rendu Kaadhal", duration: "04:30" },
  { id: 16, title: "Othaayadi Pathayila", artist: "Anirudh Ravichander", album: "Kanaa", duration: "04:11" },
  { id: 17, title: "Tum Tum", artist: "Sri Vardhini, Aditi, Satya Yamini", album: "Enemy", duration: "03:49" },
  { id: 18, title: "Pookkalae Sattru Oyivedungal", artist: "Haricharan, Shreya Ghoshal", album: "I", duration: "05:08" },
  { id: 19, title: "Ennodu Nee Irundhaal", artist: "Sid Sriram, Sunitha Sarathy", album: "I", duration: "05:54" },
  { id: 20, title: "Kutti Story", artist: "Thalapathy Vijay, Anirudh Ravichander", album: "Master", duration: "04:05" },
  { id: 21, title: "Vaathi Coming", artist: "Anirudh Ravichander, Gana Balachandar", album: "Master", duration: "03:50" },
  { id: 22, title: "Verithanam", artist: "Thalapathy Vijay", album: "Bigil", duration: "04:14" },
  { id: 23, title: "Singappenney", artist: "A.R. Rahman, Shashaa Tirupati", album: "Bigil", duration: "05:56" },
  { id: 24, title: "Aalaporaan Thamizhan", artist: "Kailash Kher, Sathya Prakash, Pooja AV", album: "Mersal", duration: "05:48" },
  { id: 25, title: "Neethanae", artist: "Shreya Ghoshal, A.R. Rahman", album: "Mersal", duration: "04:29" },
  { id: 26, title: "High On Love", artist: "Sid Sriram", album: "Pyaar Prema Kaadhal", duration: "03:56" },
  { id: 27, title: "Visiri", artist: "Sid Sriram, Shashaa Tirupati", album: "Enai Noki Paayum Thota", duration: "05:11" },
  { id: 28, title: "Thalli Pogathey", artist: "Sid Sriram, Dinesh Kanagaratnam", album: "Achcham Yenbadhu Madamaiyada", duration: "04:26" },
  { id: 29, title: "Mental Manadhil", artist: "A.R. Rahman, Jonita Gandhi", album: "O Kadhal Kanmani", duration: "03:32" },
  { id: 30, title: "Aye Sinamika", artist: "Karthik", album: "O Kadhal Kanmani", duration: "06:31" },
  { id: 31, title: "Malare", artist: "Vijay Yesudas", album: "Premam", duration: "05:03" },
  { id: 32, title: "Pookkal Pookkum", artist: "Roop Kumar Rathod, Harini, Andrea Jeremiah", album: "Madrasapattinam", duration: "06:38" },
  { id: 33, title: "Adada Mazhaida", artist: "Rahul Nambiar, Saindhavi", album: "Paiyaa", duration: "04:25" },
  { id: 34, title: "Thuli Thuli", artist: "Haricharan", album: "Paiyaa", duration: "04:45" },
  { id: 35, title: "En Kadhal Solla", artist: "Yuvanshankar Raja, Tanvi Shah", album: "Paiyaa", duration: "04:47" },
  { id: 36, title: "Hosanna", artist: "Vijay Prakash, Suzanne D'Mello", album: "Vinnaithaandi Varuvaayaa", duration: "05:31" },
  { id: 37, title: "Mannipaaya", artist: "A.R. Rahman, Shreya Ghoshal", album: "Vinnaithaandi Varuvaayaa", duration: "06:56" },
  { id: 38, title: "Anbil Avan", artist: "Devan Ekambaram, Chinmayi", album: "Vinnaithaandi Varuvaayaa", duration: "04:07" },
  { id: 39, title: "Mundhinam Paarthene", artist: "Naresh Iyer, Prashanthini", album: "Vaaranam Aayiram", duration: "05:40" },
  { id: 40, title: "Nenjukkul Peidhidum", artist: "Hariharan, Devan Ekambaram", album: "Vaaranam Aayiram", duration: "06:10" },
  { id: 41, title: "Ava Enna Enna", artist: "Karthik, V.V. Prassanna", album: "Vaaranam Aayiram", duration: "05:18" },
  { id: 42, title: "Adiye Kolluthe", artist: "Benny Dayal, Krish, Shruti Haasan", album: "Vaaranam Aayiram", duration: "05:15" },
  { id: 43, title: "June Ponal", artist: "Krish, Arun", album: "Unnale Unnale", duration: "06:01" },
  { id: 44, title: "Unnale Unnale", artist: "Karthik, Krish, Harini", album: "Unnale Unnale", duration: "05:12" },
  { id: 45, title: "Oru Maalai", artist: "Karthik", album: "Ghajini", duration: "05:53" },
  { id: 46, title: "Suttum Vizhi", artist: "Hariharan, Bombay Jayashri", album: "Ghajini", duration: "05:22" },
  { id: 47, title: "Kadhal Konjam", artist: "Naresh Iyer", album: "Pachaikili Muthucharam", duration: "05:33" },
  { id: 48, title: "Minnale Nee", artist: "Srinivas", album: "May Maadham", duration: "05:35" },
  { id: 49, title: "Enna Solla Pogirai", artist: "Shankar Mahadevan", album: "Kandukondain Kandukondain", duration: "06:00" },
  { id: 50, title: "Thendrale Ennai Thodu", artist: "K.J. Yesudas", album: "Thendrale Ennai Thodu", duration: "04:12" }
];


function addartist()
{
  var x=document.getElementById("artist");
  for(i=0;i<tamilPlaylist.length;i++)
  {
    var y=document.createElement('option');
    y.text=tamilPlaylist[i]['artist'];
    x.appendChild(y);
  }
}