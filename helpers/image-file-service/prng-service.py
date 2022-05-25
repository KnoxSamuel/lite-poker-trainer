# Samuel Knox
# Programming Assignment #2 - Micro Services Warm-Up
# CS361-400
# Due 11:59pm, 01/17/2022


# Library Imports
import random
import time


# Main UI-Loop #
# Generates non-negative pseudo-random number #
# Writes number to prng-service.txt #
def main():
    
    while True:

        time.sleep(1)

        f1 = open("prng-service.txt", "r")
        data = f1.read().rstrip()
        f1.close()
        
        if data == "run":
            prng_num = str(random.randint(0, 100000))
            
        with open("prng-service.txt", "w") as f2:
            f2.write(prng_num)

        # show updated number written to file
        time.sleep(20)

if __name__ == "__main__":
    main()