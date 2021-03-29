# Clear database
Board.destroy_all
Post.destroy_all
User.destroy_all

# Create new users
user1 = User.create(username: "Igor", password: "password", email: "temp@email.com")
user2 = User.create(username: "Not_Igor", password: "password", email: "temp2@email.com")
user3 = User.create(username: "Also_Not_Igor", password: "password", email: "temp3@email.com")

# Create new boards
board_events = Board.create(name: "events", description: "Demo / Tour Dates / Local Events")
board_videos = Board.create(name: "videos")
board_photos = Board.create(name: "photos")

# Create new posts
# - Events   
post_event1 = Post.create(title: "Plan B | Demo | NYC", user_id: user1.id, board_id: board_events.id)
post_event2 = Post.create(title: "Primitive | Demo | NYC", user_id: user2.id, board_id: board_events.id)
post_event3 = Post.create(title: "Numbers | Demo | NYC", user_id: user2.id, board_id: board_events.id)
post_event4 = Post.create(title: "TOA | Demo | NYC", user_id: user3.id, board_id: board_events.id)
post_event5 = Post.create(title: "Deluxe | Demo | NYC", user_id: user1.id, board_id: board_events.id)

# - Videos
post_video1 = Post.create(title: "Best Plan B Video", user_id: user1.id, board_id: board_videos.id)
post_video2 = Post.create(title: "Bobby Worrest - Out There", user_id: user1.id, board_id: board_videos.id)
post_video3 = Post.create(title: "Where is the P-Rod Out There?", user_id: user2.id, board_id: board_videos.id)
post_video4 = Post.create(title: "LENZ 3! After 8 years!", user_id: user3.id, board_id: board_videos.id)

# - Photos
post_photo1 = Post.create(title: "Best Thrasher Cover all time?", user_id: user1.id, board_id: board_photos.id)
post_photo2 = Post.create(title: "Most Iconic Photo?", user_id: user1.id, board_id: board_photos.id)
post_photo2 = Post.create(title: "Favorite Bobby Puleo photo", user_id: user3.id, board_id: board_photos.id)