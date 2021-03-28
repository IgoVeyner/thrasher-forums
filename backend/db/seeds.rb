# Clear database
Board.destroy_all

# Create new boards
Board.create(name: "Events", description: "Demo / Tour Dates / Local Events")
Board.create(name: "Videos")
Board.create(name: "Photos")