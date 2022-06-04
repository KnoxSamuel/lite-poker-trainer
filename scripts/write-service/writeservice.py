# Author: Edward Lada
# Email: ladae@oregonstate.edu
# Program: Write-to-file microservice
# Description: Program monitors a local file "start-writing.txt"
#              After detecting the string "start-new-write-operation"
#              the program will copy further entries in "start-writing.txt"
#              into a "write-output.txt" file until it detects the command
#              "stop-write-operation"

import time

def writeservice():
    START_COMMAND = "start-new-write-operation\n"
    END_COMMAND = "stop-write-operation\n"
    START = "new-write-operation-started\n"
    END = "write-operation-ended\n"
    TRANSFER = "start-writing.txt"
    RECORDS = "write-output.txt"
    CONFIRM = "write-success\n"
    FAIL = "write-failure\n"
    data = ""
    idle = True
    while True:
        # Wait for `START_COMMAND` to be detected
        while idle:
            time.sleep(0.1)
            with open(TRANSFER, "r") as io:
                io.seek(0)
                data = io.readline()
            if data == START_COMMAND:
                with open(TRANSFER, "w") as io:
                    io.seek(0)
                    io.write(START)
                    io.truncate()
                idle = False
        # Begin data copying operation
        while not idle:
            time.sleep(0.1)
            with open(TRANSFER, "r") as io:
                io.seek(0)
                data = io.readline()
            # Check if new data has been placed in file
            if data not in [CONFIRM,
                            FAIL,
                            START,
                            END,
                            START_COMMAND,
                            END_COMMAND]:
                with open(RECORDS, "a") as out:
                    out.write(data)
                with open(TRANSFER, "w") as io:
                    io.seek(0)
                    io.write(CONFIRM)
                    io.truncate()
            elif data == END_COMMAND:
                with open(TRANSFER, "w") as io:
                    io.seek(0)
                    io.write(END)
                    io.truncate()
                idle = True

if __name__ == "__main__":
    writeservice()









