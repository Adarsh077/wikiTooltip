export default url =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200)
        resolve(JSON.parse(this.responseText));
      else if (this.readyState === 4 && this.status != 200)
        reject("Error code: " + this.status);
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
