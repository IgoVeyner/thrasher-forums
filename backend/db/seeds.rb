# Clear database
Board.destroy_all
Post.destroy_all
User.destroy_all

# Create new users
user1 = User.create(username: "Igor", password: "password", email: "temp@email.com")
user2 = User.create(username: "Not_Igor", password: "password", email: "temp2@email.com")
user3 = User.create(username: "Also_Not_Igor", password: "password", email: "temp3@email.com")

# Create Boards
board_events = Board.create(name: "events", description: "Demo / Tour Dates / Local Events")
board_videos = Board.create(name: "videos")
board_photos = Board.create(name: "photos")

# Create Posts
  # - Events   
post_event1 = Post.create(title: "Plan B | Demo | NYC", text: "April 1st, 2021", user_id: user1.id, board_id: board_events.id)
post_event2 = Post.create(title: "Primitive | Demo | NYC", text: "April 10th, 2021", user_id: user2.id, board_id: board_events.id)
post_event3 = Post.create(title: "Numbers | Demo | NYC", text: "June 1st, 2021", user_id: user2.id, board_id: board_events.id)
post_event4 = Post.create(title: "TOA | Demo | NYC", text: "May 13th, 2021", user_id: user3.id, board_id: board_events.id)
post_event5 = Post.create(title: "Deluxe | Demo | NYC", text: "April 4th, 2021",user_id: user1.id, board_id: board_events.id)

  # - Videos
post_video1 = Post.create(title: "Best Plan B Video", text: "Questionable. Without a doubt.", user_id: user1.id, board_id: board_videos.id)
post_video2 = Post.create(title: "Bobby Worrest - Out There", text: "Really insightful video shedding some light into Bobby's past", user_id: user1.id, board_id: board_videos.id)
post_video3 = Post.create(title: "Where is the P-Rod Out There?", text: "I love P-Rod", user_id: user2.id, board_id: board_videos.id)
post_video4 = Post.create(title: "LENZ 3! After 8 years!", text: "The wait is over! The video is amazing!", user_id: user3.id, board_id: board_videos.id)

  # - Photos
post_photo1 = Post.create(title: "Best Thrasher Cover all time?", text: "Jeremy Wray, the Water Tower. Whats your opinion?", user_id: user1.id, board_id: board_photos.id)
post_photo2 = Post.create(title: "Most Iconic Photo?", text: "Tod Swank by J. Grant Brittan", user_id: user1.id, board_id: board_photos.id)
post_photo3 = Post.create(title: "Favorite Bobby Puleo photo", text: "50-50 up the handicap rail", user_id: user3.id, board_id: board_photos.id)

# Create Comments
comment1 = Comment.create(text: "Nope, it has to be Jamie Foy's Front Crook down El Toro", user_id: user2.id, post_id: post_photo1.id)