import u6
import sys
import time

d = u6.U6()  # initialize the interface; assumes a single U6 is plugged in to a USB port
d.configU6()  # set default configuration
d.configIO()  # ask for analog inputs
d.packetsPerRequest = 1  # you can adjust this value to get more or less data


analog_input_no =int(sys.argv[1])
duration = int(sys.argv[2])

#set DAC0 to 4.0 voltage
DAC0 = 5000
d.writeRegister(DAC0, 4.0)

start_time = time.time()

def show_result(i, ain):
    print("{\"iteration\":" + str(i) + ", \"voltageValue\":" + str( ain) + "}" )

def writeData( i):
    result = d.getAIN(positiveChannel=analog_input_no,  resolutionIndex=12, settlingFactor=0, differential=True)
    show_result(i, result)



iterator = 0
while True:
    current_time = time.time()
    elapsed_time = current_time - start_time
    writeData( iterator)
    iterator = iterator + 1

    if elapsed_time > duration:
        break
