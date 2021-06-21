# questions

What decisions do I consider as I play hearts?



# next

high
- work out logic of playing a card
- Create ComputerPlayer
- create component to display card selector

medium

low
- play with tween libs?

# info

# reference

- https://timdeschryver.dev/blog/integrate-jest-into-an-angular-application-and-library

clubs
- if suite lead and I don't have any, play the queen of spades if I have it
- if suite lead and I don't have any, play hearts if I have it
- if suite has been played for the first time, it's ok to play the highest card

spades
- if I have the queen of spades, i try to avoid playing that suite
- if I don't have king, queen or ace of spades, play the highest card in spaces
- if suite lead and I don't have any, play the queen of spades if I have it
- if suite lead and I don't have any, play hearts if I have it
- if I have the queen of spades, it's ok to play my lowest spades

diamonds
- if i'm the last player, it's ok to play the highest card
- try to play under the lowest highest card on the table
- if diamonds were lead and I only have one diamond left, play that card
- if suite lead and I don't have any, play the queen of spades if I have it
- if suite lead and I don't have any, play hearts if I have it
- if I have one card left in a suite and it hasn't been played yet, it's ok to play that card

hearts
- try to play under the lowest highest card on the table
- tend to play the lowest card value
- if suite lead and I don't have any, play the queen of spades if I have it


https://www.free-hearts.com/#/app/game

