Firebase Flow
=============

1 player visits the multiplayer page
creates a model, a view, a game id, and url for the second player
waits for a "entered" even from second player

| p2 gets link, model, view inited
| sends "entered"
| waits for ack

sends ack

One UI enters wait for player's move

| moving player's cursor moves are sent via message
| moving player's clicks are sent via message
| when move is completed, 
| 

(if my turn, view both processes and serializes mouseclicks)
(if not my turn, view neither processes nor serializes mouse clicks)
(when start ticking set view state to waiting for ack)
(when done ticking, ack other view state)
