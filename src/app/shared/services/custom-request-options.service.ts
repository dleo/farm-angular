import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CustomRequestOptions extends RequestOptions {
  headers = new Headers();

  constructor() {
    super();



    const token = this.getToken();

    if (token) {
      this.setAuthToken(token);
    }
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  setAuthToken(token) {
    this.setHeader('Authorization', `Bearer ${token}`);
  }

  setHeader(name, value) {
    this.headers.set(name, value);
  }

  delHeader(name) {
    this.headers.delete(name);
  }

  getHeader(name) {
    this.headers.get(name);
  }
}
