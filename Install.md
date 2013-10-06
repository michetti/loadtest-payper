sudo apt-get install wget curl git libfontconfig1

cd /home/ubuntu
wget https://phantomjs.googlecode.com/files/phantomjs-1.9.2-linux-x86_64.tar.bz2
tar -jxf phantomjs-1.9.2-linux-x86_64.tar.bz2
mv phantomjs-1.9.2-linux-x86_64 phantom
echo 'export PATH=$PATH:/home/ubuntu/phantom/bin' >> .bashrc
. .bashrc

git clone git://github.com/n1k0/casperjs.git
cd casperjs
sudo ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs
cd /home/ubuntu

git clone https://github.com/michetti/loadtest-payper.git
cd loadtest-payper
./run 1 100 10 http://payper-9279.onmodulus.net/signin
