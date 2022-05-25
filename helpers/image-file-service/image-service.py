# Samuel Knox
# Programming Assignment #2 - Micro Services Warm-Up
# CS361-400
# Due 11:59pm, 01/17/2022


# Library Imports
import time
import os, sys


# Main UI-Loop #
# Generates non-negative pseudo-random number #
# Writes number to prng-service.txt #
def main():
    
    img_set = os.listdir(r'/Users/samue/Desktop/cs361-assignment2/image_set/')
    img_set_size = len(img_set)

    while True:

        time.sleep(1)

        f1 = open("image-service.txt", "r")
        num = f1.read().rstrip()
        f1.close()

        if num.isdigit() == False:
            continue

        num = int(num)
        #print(num)

        if num >= img_set_size:
            num = num % img_set_size
        
        num = str(num)

        with open("image-service.txt", "w") as f2:
            f2.write("C:/Users/samue/Desktop/cs361-assignment2/image_set/img (" + num + ").png")

        # show updated number written to file
        time.sleep(20)

if __name__ == "__main__":
    main()