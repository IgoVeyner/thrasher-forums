# Clear database
Board.destroy_all

# Create new boards
Board.create(name: "events", description: "Demo / Tour Dates / Local Events")
Board.create(name: "videos")
Board.create(name: "photos")