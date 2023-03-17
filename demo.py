import random

print("Let's play Rock, Paper, Scissors!")

# define the options
options = ["Rock", "Paper", "Scissors"]

# ask the user to make a choice
user_choice = input("Enter your choice (Rock/Paper/Scissors): ")

# generate a random choice for the computer
computer_choice = random.choice(options)

# print the choices
print("You chose", user_choice)
print("The computer chose", computer_choice)

# determine the winner
if user_choice == computer_choice:
    print("It's a tie!")
elif user_choice == "Rock":
    if computer_choice == "Paper":
        print("You lose!", computer_choice, "covers", user_choice)
    else:
        print("You win!", user_choice, "smashes", computer_choice)
elif user_choice == "Paper":
    if computer_choice == "Scissors":
        print("You lose!", computer_choice, "cuts", user_choice)
    else:
        print("You win!", user_choice, "covers", computer_choice)
elif user_choice == "Scissors":
    if computer_choice == "Rock":
        print("You lose...", computer_choice, "smashes", user_choice)
    else:
        print("You win!", user_choice, "cuts", computer_choice)
else:
    print("Invalid input! You must enter either Rock, Paper or Scissors.")
