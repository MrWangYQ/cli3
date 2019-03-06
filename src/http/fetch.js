class FetchUtil {
  init() {
    this.url = '';
    this.method = 'GET';
    this.headers = {};
    this.body_type = 'form';
    this.bodys = {};
    this.credentials = 'omit';
    this.return_type = 'json';
    this.overtime = 0;
    this.firstThen = undefined;

    return this;
  }


  setUrl(url) {
    this.url = url;
    return this;
  }

  setMethod(val) {
    this.method = val;
    return this;
  }

  setBodyType(val) {
    this.body_type = val;
    return this;
  }

  setReturnType(val) {
    this.return_type = val;
    return this;
  }

  setOvertime(val) {
    this.overtime = val;
    return this;
  }

  setHeader(name, val = null) {
    if (typeof name === 'string') {
      this.headers[name] = val;
    } else if (typeof name === 'object') {
      Object.keys(name).map((index) => {
        this.headers[index] = name[index];
      });
    }

    return this;
  }

  setBody(name, val = null) {
    if (typeof name === 'string') {
      this.bodys[name] = val;
    } else if (typeof name === 'object') {
      Object.keys(name).map((index) => {
        this.bodys[index] = name[index];
      });
    }
    return this;
  }

  setCookieOrigin() {
    this.credentials = 'same-origin';
    return this;
  }

  setCookieCors() {
    this.credentials = 'include';
    return this;
  }

  thenStart(then) {
    this.firstThen = then;
    return this;
  }

  dofetch() {
    const options = {};
    options.method = this.method;
    options.credentials = this.credentials;

    options.headers = this.headers;

    if ({} != this.bodys && this.method !== 'GET') {
      if (this.body_type === 'form') {
        this.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        let data = '';
        Object.keys(this.bodys).map((index) => {
          const param = encodeURI(this.bodys[index]);
          data += `${index}=${param}&`;
        });
        options.body = data;
      } else if (this.body_type === 'file') {
        const data = new FormData();
        Object.keys(this.bodys).map((index) => {
          data.append(index, this.bodys[index]);
        });
        options.body = data;
      } else if (this.body_type === 'json') {
        options.body = JSON.stringify(this.bodys);
      }
    }

    return Promise.race([
      fetch(this.url, options),
      new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('request timeout')), this.overtime ? this.overtime : 30 * 1000);
      }),
    ]).then((response) => {
      if (this.firstThen) {
        const tempResponse = this.firstThen(response);
        if (tempResponse) {
          return tempResponse;
        }
      }
      return response;
    }).then((response) => {
      if (this.return_type === 'json') {
        return response.json();
      }
      if (this.return_type === 'text') {
        return response.text();
      }
      if (this.return_type === 'blob') {
        return response.blob();
      }
      if (this.return_type === 'formData') {
        return response.formData();
      }
      if (this.return_type === 'arrayBuffer') {
        return response.arrayBuffer();
      }
    });
  }
}


export default FetchUtil;
