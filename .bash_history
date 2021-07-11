history
ls
ls -al
logout
ip a s
nmcli con show
nmcli con add con-name dja type ethernet ifname eth0
nmcli con modify dja ipv4.addresses 192.168.122.101/24
nmcli con modify dja ipv4.dns 8.8.8.8
nmcli con modify dja ipv4.gateway 192.168.122.1
nmcli con modify dja ipv4.mathod manual
nmcli con modify dja ipv4.method manual
nmcli con up dja
clear
nmcli con show
ip a s
hostnamectl set-hostname Django
ip a s
wget https://kojipkgs.fedoraproject.org//packages/sqlite/3.8.11/1.fc21/x86_64/sqlite-devel-3.8.11-1.fc21.x86_64.rpm
yum isntall wget
yum install wget
wget https://kojipkgs.fedoraproject.org//packages/sqlite/3.8.11/1.fc21/x86_64/sqlite-3.8.11-1.fc21.x86_64.rpm 
ls
yum install sqlite-3.8.11-1.fc21.x86_64.rpm 
sqlite3 -version
wget https://kojipkgs.fedoraproject.org//packages/sqlite/3.8.11/1.fc21/x86_64/sqlite-devel-3.8.11-1.fc21.x86_64.rpm 
ls
yum isntall sqlite-devel-3.8.11-1.fc21.x86_64.rpm 
yum install sqlite-devel-3.8.11-1.fc21.x86_64.rpm 
sqlite3 -version
yum install python3
yum install python3-pip
mkdir /opt
cd /opt
ls
python3 -m venv my_env
source /opt/my_env/bin/activate
pip3 install django==3.1.3
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
getenforce
setenforce 0
source /opt/my_env/bin/activate
cd /
yum -y install git
ls
mkdir projects
cd pro
cd projects/
git clone https://github.com/oxomn/Django.git
cd Django/
ls
python3 manage.py runserver
yum install -y markdkdown
yum install -y markdown
pip3 install markdown
python3 manage.py runserver
python3 /opt/my_env/bin/activate
source /opt/my_env/bin/acticate
source /opt/my_env/bin/activate
python3 manage.py runserver 192.168.122.101:8000
source /opt/my_env/bin/activate
python3 manage.py runserver 192.168.122.101:8000
yum install python3-devel mysql-devel gcc
pip3 install mysqlclient
python3 -m pip install --upgrade pip
ls
python3 manage.py makemigrations
python3 manage.py migrate
source /opt/my_env/bin/activate
pip3 install gunicorn
cat config/wsgi.py 
cd /etc/systemd/system/
kls
ls
vi mysite.service
touch mysite.service
ls
systemctl start mysite.service 
systemctl status mysite.service
systemctl start mysite.service 
systemctl status mysite.service
systemctl status mysite.service -l
which /venvs
which mysite.env
cd /opt/my_env/
ls
cd bin/
ls
pwd
cd /projects/Django/
gunicorn --bind 0:8000 config.wsgi:application
gunicorn --bind unix:/tmp/gunicorn.sock config.wsgi:application
systemctl start mysite.service 
systemctl status mysite.service
systemctl status mysite.service -l
systemctl start mysite.service 
systemctl status mysite.service -l
find / --name *.sock
find / -name *.sock
nano
yum install nano
echo "DJANGO_SETTINGS_MODULE=config.settings" >> /opt/my_env/mysite.env
systemctl start mysite.service
pwd
systemctl start mysite.service
systemctl status mysite.service -l
systemctl start mysite.service
systemctl enable mysite.service
systemctl start gunicorn
vim /etc/systemd/gunicorn.service
yum -y install vim
vim /etc/systemd/gunicorn.service
systemctl status mysite.config
systemctl status mysite.servicee
systemctl status mysite.service
systemctl status gunicorn.service
systemctl start  gunicorn.service
systemctl restart mysite.service
