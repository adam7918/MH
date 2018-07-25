# How to deploy

### Domain Name
1. Ensure domain www.medievalhavoc.com DNS is configured to VPS IP.

### DeployHQ Setup
1. Navigate to http://www.deployhq.com. Update SSH login details.
2. Click deploy project (commit start = entire repository)
3. install dependencies on VPS directory: /var/www/html (npm install)
```
# Navigate to project location
cd /var/www/html

# Install dependencies
npm install
```


### VPS Setup
1. Install Node and NPM (if not already installed)
``` 
# Download archive
wget http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz

# Extract archive
tar xzvf node-v* && cd node-v*

# Download packages needed to compile
sudo yum install gcc gcc-c++

# Configure and compile
./configure
make

# Install
sudo make install

# Check installation
node --version
```

2. Install MySQL
3. Import Database
4. Install pm2
5. Run server