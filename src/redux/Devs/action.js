
// action

export const createDevs = (payload) => {

    let data = [];
    if( localStorage.getItem('devs')){
      data = JSON.parse(localStorage.getItem('devs'));
    }

    data.push(payload)

    localStorage.setItem('devs', JSON.stringify(data));

    return ({
      type : 'DEVS_ADDED',
      payload : data
    })

  
   

}