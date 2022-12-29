export async function getCars (){
    const response = await fetch('http://127.0.0.1:8000/cars/');
    const data = await response.json();
    return data
  };
  