module.exports = (req, res) => {
    const things = [
        {
            id: 1,
            title: "Skydiving",
            content:
              "Experience the thrill with stunning views of the Palm Jumeirah.",
            place: "Dubai, UAE",
          },
          {
            id: 2,
            title: "Bungee Jumping",
            content: "Leap off the bridge with the falls in the background.",
            place: "Victoria Falls, Zambia/Zimbabwe",
          },
          {
            id: 3,
            title: "Scuba Diving",
            content: "Explore the world's largest coral reef system.",
            place: "Great Barrier Reef, Australia",
          },
          {
            id: 4,
            title: "Paragliding",
            content: "Glide over breathtaking Swiss landscapes.",
            place: "Interlaken, Switzerland",
          },
          {
            id: 5,
            title: "Rock Climbing",
            content: "Climb the famous El Capitan or Half Dome.",
            place: "Yosemite National Park, USA",
          },
          {
            id: 6,
            title: "White Water Rafting",
            content: "Navigate thrilling rapids near Victoria Falls.",
            place: "Zambezi River, Zimbabwe",
          },
          {
            id: 7,
            title: "Ziplining",
            content: "Zip through lush rainforests.",
            place: "Monteverde Cloud Forest, Costa Rica",
          },
          {
            id: 8,
            title: "Motocross",
            content: "Ride through diverse terrains.",
            place: "Baja California, Mexico",
          },
          {
            id: 9,
            title: "Shark Cage Diving",
            content: "Get up close with great whites.",
            place: "Gansbaai, South Africa",
          },
          {
            id: 10,
            title: "Base Jumping",
            content: "Jump amidst stunning scenery.",
            place: "Lauterbrunnen Valley, Switzerland",
          },
      
          // Exploration and Adventure
          {
            id: 11,
            title: "Backpacking",
            content: "Traverse breathtaking mountain trails.",
            place: "Himalayas, Nepal",
          },
          {
            id: 12,
            title: "Hiking",
            content: "Explore the stunning landscapes of South America.",
            place: "Patagonia, Argentina/Chile",
          },
          {
            id: 13,
            title: "Safari",
            content: "Witness the Great Migration and diverse wildlife.",
            place: "Serengeti National Park, Tanzania",
          },
          {
            id: 14,
            title: "Road Trip",
            content: "A scenic drive along the California coast.",
            place: "Pacific Coast Highway, USA",
          },
          {
            id: 15,
            title: "Hot Air Balloon Ride",
            content: "Float over unique rock formations and caves.",
            place: "Cappadocia, Turkey",
          },
          {
            id: 16,
            title: "Kayaking",
            content: "Paddle in one of the world’s most beautiful fjords.",
            place: "Milford Sound, New Zealand",
          },
          {
            id: 17,
            title: "Camping",
            content: "Stay amidst the Canadian Rockies.",
            place: "Banff National Park, Canada",
          },
          {
            id: 18,
            title: "Sailing",
            content: "Experience the Mediterranean Sea and culture.",
            place: "Greek Islands",
          },
          {
            id: 19,
            title: "Spelunking",
            content: "Discover glowworm-lit underground caverns.",
            place: "Waitomo Glowworm Caves, New Zealand",
          },
          {
            id: 20,
            title: "Volunteering",
            content: "Assist in environmental or community projects.",
            place: "Bali, Indonesia",
          },
      
          // Relaxing and Low-Key Activities
          {
            id: 21,
            title: "Movie Marathon",
            content: "Create the perfect ambiance at home.",
            place: "Cozy Home Theater",
          },
          {
            id: 22,
            title: "Stargazing",
            content: "One of the best places to observe the night sky.",
            place: "Atacama Desert, Chile",
          },
          {
            id: 23,
            title: "Reading",
            content: "Enjoy books in a historic setting.",
            place: "New York Public Library, USA",
          },
          {
            id: 24,
            title: "Beach Day",
            content: "Relax on white sandy beaches with crystal clear waters.",
            place: "Maldives",
          },
          {
            id: 25,
            title: "Gardening",
            content: "Create your own peaceful retreat.",
            place: "Your Backyard",
          },
          {
            id: 26,
            title: "Picnic",
            content: "A classic spot for a relaxing day.",
            place: "Central Park, New York, USA",
          },
          {
            id: 27,
            title: "Cooking a New Recipe",
            content: "Experiment with international cuisines.",
            place: "At Home",
          },
          {
            id: 28,
            title: "Yoga Retreat",
            content: "Rejuvenate amidst nature.",
            place: "Bali, Indonesia",
          },
          {
            id: 29,
            title: "Spa Day",
            content: "Relax and unwind in a luxurious setting.",
            place: "Blue Lagoon, Iceland",
          },
          {
            id: 30,
            title: "Art and Craft",
            content: "Express creativity in a calming environment.",
            place: "At Home Studio",
          },
    ];
    res.json(things);
};
