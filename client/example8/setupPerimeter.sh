# Get the access token
source ../getToken.sh admin

# Create perimeter
curl -X POST http://localhost:2103/perimeters -H "Content-type:application/json" -H "Authorization:Bearer $token" --data @$1


# Add perimeter to group
curl -X PUT http://localhost:2103/perimeters/example8-Perimeter/groups -H "Content-type:application/json" -H "Authorization:Bearer $token" --data "[\"Dispatcher\"]"

