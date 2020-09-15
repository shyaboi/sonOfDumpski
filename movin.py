import os
import shutil
path = os.getcwd()


print(path)

dumpDir = os.listdir(path)


for filename in os.listdir(path):
    if filename.endswith(".jpg"): 
        dumpFiles = os.path.join(path, filename)
        #  cwd = path + os.path.join(filename)
        shutil.move(dumpFiles, path+'/dinus/'+filename)
