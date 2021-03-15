export token=$(curl -s -X POST -d "username=admin&password=test&grant_type=password&client_id=opfab-client" http://localhost:2002/auth/token | awk 'match($0,/\"access_token\":\"([^\"]+)\"/,a){print a[1]}')

echo "\"access_token\":\""$token"\""
