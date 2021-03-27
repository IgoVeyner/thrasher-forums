# Clear database
Board.destroy_all

# Create new boards
Board.create(name: "Events")
Board.create(name: "Videos")
Board.create(name: "Photos")