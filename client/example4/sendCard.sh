export current_date_in_milliseconds_from_epoch=$(($(date +%s%N)/1000000))
export current_date_plus_one_day_in_milliseconds_from_epoch=$(($(date +%s%N)/1000000 + 86400000))
export current_date_plus_one_day_plus_one_hour_in_milliseconds_from_epoch=$(($(date +%s%N)/1000000 + 90000000))
curl -X POST http://localhost:2102/cards -H "Content-type:application/json" --data "$(envsubst <$1)"