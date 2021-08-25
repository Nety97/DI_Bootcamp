import axios from 'axios';
export const FNAME = 'FNAME';
export const SNAME = 'SNAME';
export const RESULT = 'RESULT';

export const handleFname = (value) => {
  return{
    type:FNAME,
    payload: value
  }
}

export const handleSname = (value) => {
  return {
    type:SNAME,
    payload: value
  }
}

export const handleClick = (fname, sname) => (dispatch) => {
  let options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {fname: fname, sname: sname},
    headers: {
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      'x-rapidapi-key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c'
    }
  };

  axios.request(options).then(function (response) {
  	console.log(response.data);
    dispatch({
      type:RESULT,
      payload:response.data
    })
  }).catch(function (error) {
  	console.error(error);
  });
}
