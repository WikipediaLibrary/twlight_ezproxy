#!/usr/bin/env bash
set -eou pipefail

if [ ! -f .env ]
then
printf "
Please create a .env file with the following content:
host=ezproxy.example.com[:port_optional]
user=username
pass=password
"
fi

set -a
source .env
set +a

search=${1}
today=$(date +"%Y%m%d")
requested_date=${2:-${today}}
start_date=$(date --date="${requested_date} - 1 day" +"%Y%m%d")
declare -a dates=("${start_date}" "${requested_date}")

if [ ! -f cookies.txt ]
then
    echo "logging in"
    curl -X POST "https://login.${host}/login" \
         --silent --insecure --cookie-jar cookies.txt \
         -H "Content-Type: application/x-www-form-urlencoded" \
         -d "url=https://login.${host}/loggedin/hezpadmin.htm&user=${user}&pass=${pass}" \
         -o /dev/null || (echo "login failed"; exit 1)
fi

log_list=""
for date in "${dates[@]}"
do
    age=$((today-date))
    filename="ezp${date}.log"
    log_list="${log_list} ${filename}"

    if [ ! -f ${filename} ]
    then

        if [[ "$age" -gt "5" ]]
        then
            filename=${filename}.gz
        fi
        echo "downloading ${filename}"
        if [[ "$age" -lt "6" ]]
        then
            echo "uncompressed log may take some time to download"
        fi
        curl --silent --insecure -b cookies.txt "https://${host}/loggedin/admlog/${filename}" >> ${filename} || (echo "download failed"; exit 1)
        if [[ "$age" -gt "5" ]]
        then
            echo "unzipping ${filename}"
            gunzip ${filename}
        fi
    fi
done

ipfile="ips.txt"
sessionfile="sessions.txt"
cat ${log_list} | grep -F "${search}" | cut -d ' ' -f 3 | sort | uniq  > ${sessionfile} || (echo "no session matches found"; exit 1)
sed -i '/^-$/d' ${sessionfile}
echo "session matches:
$(cat ${sessionfile})"

# get all ips associated with sessionid
cat ${log_list} | \
grep -F -f ${sessionfile} | cut -d ' ' -f 1 | sort | uniq > ${ipfile} || (echo "no ip matches found"; exit 1)
echo "ip matches:
$(cat ${ipfile})"

# search for logins associated with any dirty ip
search='https\?://\(.\+\)\?'${host}':.*\?/login?user='
loginmatches=$(cat ${log_list} | grep ${search} | grep -F -f ${ipfile}) || (echo "no login matches found"; exit 1)
usernames=$(echo ${loginmatches} | cut -d '=' -f 2 | cut -d '&' -f 1 | uniq) || (echo "${loginmatches}"; exit 1)
rm ${sessionfile}
rm ${ipfile}

echo "username matches:"
echo "${usernames}"
