import ShopCloud from '@flipgive/shopcloud';

let rewards_id = ""
let rewards_secret = ""

let user_data = {
  "id": 19850703,
  "name": "Emmett Brown",
  "email": "ebrown@time.com",
  "country": "USA"
 }

let campaign_data = {
  "id": 19551105,
  "name": "The Time Travelers",
  "category": "Events & Trips",
  "country": "USA",
  "admin_data": user_data
}

let group_data = {
  "name": "Marty McFly"
}

let payload = {
  "user_data": user_data,
  "campaign_data": campaign_data,
  "group_data": group_data
}

console.log(payload)

ShopCloud(id, rewards_secret).then(shopCloud => {
  console.log(shopCloud.validIdentified(payload));
  shopCloud.identifiedToken(payload).then(token => { console.log(token) });
});
