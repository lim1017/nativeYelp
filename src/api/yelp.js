import axios from 'axios'

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers:{
    Authorization: "Bearer jxJ9LfUYjPOmc6U6rCMWQBknn8U4_iqN5TTiScvnF0bLZWF19wT1cRt21VhULwQMxiA9ObKRvmO-11tyEwbcBALPuHHbQTgRoYswTxRjRMK-ufsFoA_AGqti7OYpX3Yx"

  }
})