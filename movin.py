import os
import shutil
import time
import subprocess


time.sleep(5)
print('pythoiing starterdd')
process_name = 'curl.exe'


    

def checker():
    def process_exists(process_name):
        call = 'TASKLIST', '/FI', 'imagename eq %s' % process_name
        # use buildin check_output right away
        output = subprocess.check_output(call).decode()
        # check in last line for process name
        last_line = output.strip().split('\r\n')[-1]
        # because Fail message could be translated
        return last_line.lower().startswith(process_name.lower())
    check = process_exists(process_name)
    if check == True:
        print('sick curls bruh')
        time.sleep(2)
        checker()
    if check == False:
            print('waves crashed')
            pass

checker()

path = os.getcwd()


drte = str(time.time())

print(drte)
dumpDir = os.listdir(path)



newDir = drte+'wallsDump'
os.mkdir(newDir)


for filename in os.listdir(path):
    if filename.endswith(".png"): 
        newPath = path+newDir
        print(newPath, newDir)
        dumpFiles = os.path.join(path, filename)
        #  cwd = path + os.path.join(filename)
        shutil.move(dumpFiles, newDir)
