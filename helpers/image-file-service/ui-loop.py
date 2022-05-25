# Samuel Knox
# Programming Assignment #2 - Micro Services Warm-Up
# CS361-400
# Due 11:59pm, 01/17/2022

#exec(open("./filename").read())
# Library Imports
import time
from PIL import Image

# Main UI-Loop #
def main():

    while True:

        # prompt for user menu selection
        print("Enter '1' to generate new image\nEnter '2' to exit program")
        selection = input(' > ')
        
        if selection == '1':

            # tell prng-service.py to run number generation
            with open("prng-service.txt", "w") as f1:
                f1.write("run")

            # wait for prng-service.py to calculate random number
            print("waiting for number from prng-service.py...")
            time.sleep(15)

            # read prng-service.txt
            with open("prng-service.txt", "r+") as f2:
                data = f2.read().rstrip()

                # write number to image-service.txt
                with open("image-service.txt", "w+") as f1_image:
                    f1_image.write(data)
            
            # wait for image-service.py to calculate file path
            print("waiting for file path from image-service.py...")
            time.sleep(15)

            # read and print file path from image-service.txt
            with open("image-service.txt", "r") as f2_image:
                path = f2_image.read().rstrip()
                print(path)
                im = Image.open(path)
                im.show()

        elif selection == '2':
            break

        else:
            print("Invalid menu selection...")

    print('exiting...')


if __name__ == "__main__":
    main()