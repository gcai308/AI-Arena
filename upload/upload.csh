#!/bin/csh

set src_root = "$PWD/../src"
# echo $src_root

set files_to_upload = `cat ./files_to_upload.list`

# echo "$files_to_upload"

foreach file ($files_to_upload)
    #echo "scp file $src_root/$file..."
    scp -i "$KEY_DIR/AILab.pem"  $src_root/$file "ubuntu@ec2-13-52-245-67.us-west-1.compute.amazonaws.com:~/deploy/$file"
end
